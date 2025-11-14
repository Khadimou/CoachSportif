import { IsString, IsEnum, IsNumber, IsArray, IsOptional, Min } from 'class-validator';
import { ProgramDifficulty } from '../entities/program.entity';

export class CreateProgramDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(ProgramDifficulty)
  difficulty: ProgramDifficulty;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  duration?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  features?: string[];

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
