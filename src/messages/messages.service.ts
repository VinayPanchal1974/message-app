import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepo: MessagesRepository;
  constructor() {
    // Service is creating its own dependencies(DON'T DO THIS ON REAL APPS. INSTEAD USE DEPENDENCY INJECTION)
    // MessageRepository is a dependency of MessageService (it means Service will not work well unless it has repository)
    this.messageRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
