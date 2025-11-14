import { IsEnum, IsOptional, IsDateString, IsString } from 'class-validator';
import { BookingStatus, PaymentStatus } from '../entities/booking.entity';

export class UpdateBookingDto {
  @IsEnum(BookingStatus)
  @IsOptional()
  status?: BookingStatus;

  @IsEnum(PaymentStatus)
  @IsOptional()
  paymentStatus?: PaymentStatus;

  @IsDateString()
  @IsOptional()
  sessionDate?: string;

  @IsString()
  @IsOptional()
  sessionTime?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
