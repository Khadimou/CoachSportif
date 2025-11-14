import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from './entities/program.entity';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private programsRepository: Repository<Program>,
  ) {}

  async create(createProgramDto: CreateProgramDto): Promise<Program> {
    const program = this.programsRepository.create(createProgramDto);
    return this.programsRepository.save(program);
  }

  async findAll(): Promise<Program[]> {
    return this.programsRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findActive(): Promise<Program[]> {
    return this.programsRepository.find({
      where: { isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Program> {
    const program = await this.programsRepository.findOne({ where: { id } });
    if (!program) {
      throw new NotFoundException('Program not found');
    }
    return program;
  }

  async update(id: string, updateProgramDto: UpdateProgramDto): Promise<Program> {
    await this.programsRepository.update(id, updateProgramDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.programsRepository.delete(id);
  }
}
