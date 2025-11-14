import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testimonial } from './entities/testimonial.entity';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(
    @InjectRepository(Testimonial)
    private testimonialsRepository: Repository<Testimonial>,
  ) {}

  async create(userId: string, createTestimonialDto: CreateTestimonialDto): Promise<Testimonial> {
    const testimonial = this.testimonialsRepository.create({
      ...createTestimonialDto,
      userId,
      isApproved: false,
    });
    return this.testimonialsRepository.save(testimonial);
  }

  async findAll(): Promise<Testimonial[]> {
    return this.testimonialsRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findApproved(): Promise<Testimonial[]> {
    return this.testimonialsRepository.find({
      where: { isApproved: true, isVisible: true },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByUser(userId: string): Promise<Testimonial[]> {
    return this.testimonialsRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Testimonial> {
    const testimonial = await this.testimonialsRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!testimonial) {
      throw new NotFoundException('Testimonial not found');
    }

    return testimonial;
  }

  async update(id: string, updateTestimonialDto: UpdateTestimonialDto): Promise<Testimonial> {
    await this.testimonialsRepository.update(id, updateTestimonialDto);
    return this.findOne(id);
  }

  async approve(id: string): Promise<Testimonial> {
    await this.testimonialsRepository.update(id, { isApproved: true });
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.testimonialsRepository.delete(id);
  }
}
