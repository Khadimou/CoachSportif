import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  content: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
