import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact, ContactStatus } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
    private mailService: MailService,
  ) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const contact = this.contactsRepository.create(createContactDto);
    const savedContact = await this.contactsRepository.save(contact);

    // Send email notification
    await this.mailService.sendContactNotification(createContactDto);

    return savedContact;
  }

  async findAll(): Promise<Contact[]> {
    return this.contactsRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Contact> {
    return this.contactsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateContactDto: UpdateContactDto): Promise<Contact> {
    await this.contactsRepository.update(id, updateContactDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contactsRepository.delete(id);
  }

  async getStats() {
    const total = await this.contactsRepository.count();
    const newCount = await this.contactsRepository.count({
      where: { status: ContactStatus.NEW },
    });
    const inProgressCount = await this.contactsRepository.count({
      where: { status: ContactStatus.IN_PROGRESS },
    });
    const resolvedCount = await this.contactsRepository.count({
      where: { status: ContactStatus.RESOLVED },
    });

    return {
      total,
      new: newCount,
      inProgress: inProgressCount,
      resolved: resolvedCount,
    };
  }
}
