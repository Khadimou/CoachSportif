import { IsString, IsEnum, IsNumber, IsArray, IsOptional, IsBoolean, Min } from 'class-validator';
import { ProgramDifficulty } from '../entities/program.entity';

export class UpdateProgramDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(ProgramDifficulty)
  @IsOptional()
  difficulty?: ProgramDifficulty;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

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

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
