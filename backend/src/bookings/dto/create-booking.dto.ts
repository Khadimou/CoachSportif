import { IsString, IsDateString, IsOptional, IsUUID } from 'class-validator';

export class CreateBookingDto {
  @IsUUID()
  programId: string;

  @IsDateString()
  sessionDate: string;

  @IsString()
  @IsOptional()
  sessionTime?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
