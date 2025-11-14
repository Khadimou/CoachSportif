import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking, BookingStatus, PaymentStatus } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ProgramsService } from '../programs/programs.service';
import { MailService } from '../mail/mail.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
    private programsService: ProgramsService,
    private mailService: MailService,
  ) {}

  async create(userId: string, createBookingDto: CreateBookingDto): Promise<Booking> {
    const program = await this.programsService.findOne(createBookingDto.programId);

    if (!program.isActive) {
      throw new BadRequestException('Program is not available');
    }

    const booking = this.bookingsRepository.create({
      ...createBookingDto,
      userId,
      amount: program.price,
      status: BookingStatus.PENDING,
      paymentStatus: PaymentStatus.PENDING,
    });

    return this.bookingsRepository.save(booking);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingsRepository.find({
      relations: ['user', 'program'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByUser(userId: string): Promise<Booking[]> {
    return this.bookingsRepository.find({
      where: { userId },
      relations: ['program'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Booking> {
    const booking = await this.bookingsRepository.findOne({
      where: { id },
      relations: ['user', 'program'],
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    return booking;
  }

  async update(id: string, updateBookingDto: UpdateBookingDto): Promise<Booking> {
    await this.bookingsRepository.update(id, updateBookingDto);
    return this.findOne(id);
  }

  async updatePaymentStatus(
    id: string,
    paymentStatus: PaymentStatus,
    stripePaymentIntentId?: string,
  ): Promise<Booking> {
    const updateData: any = { paymentStatus };

    if (stripePaymentIntentId) {
      updateData.stripePaymentIntentId = stripePaymentIntentId;
    }

    if (paymentStatus === PaymentStatus.PAID) {
      updateData.status = BookingStatus.CONFIRMED;
    }

    await this.bookingsRepository.update(id, updateData);
    const booking = await this.findOne(id);

    // Send confirmation email
    if (paymentStatus === PaymentStatus.PAID) {
      await this.mailService.sendBookingConfirmation({
        userEmail: booking.user.email,
        userName: `${booking.user.firstName} ${booking.user.lastName}`,
        programTitle: booking.program.title,
        sessionDate: booking.sessionDate,
        sessionTime: booking.sessionTime,
        amount: booking.amount,
      });
    }

    return booking;
  }

  async remove(id: string): Promise<void> {
    await this.bookingsRepository.delete(id);
  }

  async getStats() {
    const total = await this.bookingsRepository.count();
    const pending = await this.bookingsRepository.count({
      where: { status: BookingStatus.PENDING },
    });
    const confirmed = await this.bookingsRepository.count({
      where: { status: BookingStatus.CONFIRMED },
    });
    const completed = await this.bookingsRepository.count({
      where: { status: BookingStatus.COMPLETED },
    });

    return {
      total,
      pending,
      confirmed,
      completed,
    };
  }
}
