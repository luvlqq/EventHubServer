import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEventDto } from './dto/create.event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  getAllEvents() {
    return this.prisma.event.findMany();
  }

  getUniqEvent(id: number) {
    return this.prisma.event.findUnique({ where: { id } });
  }

  // * Join to event
  joinToEvent(id) {
    return this.prisma.event.update(id);
  }

  // * Create and event
  createAnEvent(dto: CreateEventDto) {
    const createAnEvent = this.prisma.event.create({ data: dto });
  }

  // * Delete an event
  deleteAnEvent(id) {
    return this.prisma.event.delete(id);
  }

  // * Update event details
  editAnEvent() {}
}
