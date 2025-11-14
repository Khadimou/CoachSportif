import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  Headers,
  RawBodyRequest,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-intent/:bookingId')
  @UseGuards(JwtAuthGuard)
  createPaymentIntent(@Param('bookingId') bookingId: string) {
    return this.paymentsService.createPaymentIntent(bookingId);
  }

  @Post('webhook')
  async handleWebhook(
    @Headers('stripe-signature') signature: string,
    @Req() request: RawBodyRequest<Request>,
  ) {
    return this.paymentsService.handleWebhook(signature, request.rawBody);
  }

  @Post('refund/:paymentIntentId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  refundPayment(@Param('paymentIntentId') paymentIntentId: string) {
    return this.paymentsService.refundPayment(paymentIntentId);
  }
}
