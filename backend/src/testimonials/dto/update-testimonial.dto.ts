import { IsString, IsBoolean, IsOptional, IsInt, Min, Max } from 'class-validator';

export class UpdateTestimonialDto {
  @IsString()
  @IsOptional()
  content?: string;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsOptional()
  rating?: number;

  @IsBoolean()
  @IsOptional()
  isApproved?: boolean;

  @IsBoolean()
  @IsOptional()
  isVisible?: boolean;
}
