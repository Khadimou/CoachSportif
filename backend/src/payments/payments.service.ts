import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { BookingsService } from '../bookings/bookings.service';
import { PaymentStatus } from '../bookings/entities/booking.entity';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private configService: ConfigService,
    private bookingsService: BookingsService,
  ) {
    this.stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2024-12-18.acacia',
    });
  }

  async createPaymentIntent(bookingId: string) {
    const booking = await this.bookingsService.findOne(bookingId);

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: Math.round(booking.amount * 100), // Convert to cents
      currency: 'eur',
      metadata: {
        bookingId: booking.id,
        userId: booking.userId,
        programId: booking.programId,
      },
    });

    await this.bookingsService.updatePaymentStatus(
      bookingId,
      PaymentStatus.PENDING,
      paymentIntent.id,
    );

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    };
  }

  async handleWebhook(signature: string, body: Buffer) {
    const webhookSecret = this.configService.get('STRIPE_WEBHOOK_SECRET');

    try {
      const event = this.stripe.webhooks.constructEvent(
        body,
        signature,
        webhookSecret,
      );

      switch (event.type) {
        case 'payment_intent.succeeded':
          await this.handlePaymentSuccess(event.data.object as Stripe.PaymentIntent);
          break;

        case 'payment_intent.payment_failed':
          await this.handlePaymentFailure(event.data.object as Stripe.PaymentIntent);
          break;

        default:
          console.log(`Unhandled event type: ${event.type}`);
      }

      return { received: true };
    } catch (error) {
      console.error('Webhook error:', error);
      throw error;
    }
  }

  private async handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
    const bookingId = paymentIntent.metadata.bookingId;

    if (bookingId) {
      await this.bookingsService.updatePaymentStatus(
        bookingId,
        PaymentStatus.PAID,
        paymentIntent.id,
      );
    }
  }

  private async handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
    const bookingId = paymentIntent.metadata.bookingId;

    if (bookingId) {
      await this.bookingsService.updatePaymentStatus(
        bookingId,
        PaymentStatus.FAILED,
        paymentIntent.id,
      );
    }
  }

  async refundPayment(paymentIntentId: string) {
    const refund = await this.stripe.refunds.create({
      payment_intent: paymentIntentId,
    });

    return refund;
  }
}
