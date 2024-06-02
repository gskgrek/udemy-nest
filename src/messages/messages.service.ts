import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async create(contetnt: string) {
    return this.messagesRepo.create(contetnt);
  }
}
