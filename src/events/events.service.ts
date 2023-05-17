import { BadRequestException, Injectable } from '@nestjs/common';
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
  // TODO make an event follow service
  async joinToEvent(id: number) {
    const userIsJoin = await this.prisma.user.findUnique({ where: { id } });
    if (userIsJoin) {
      throw new BadRequestException('You already join!');
    }
    // await this.prisma.user.create({ data: { joinEvents } });
  }

  // * Create and event
  createAnEvent(dto: CreateEventDto) {
    return this.prisma.event.create({ data: dto });
  }

  // * Delete an event
  deleteAnEvent(id: number) {
    return this.prisma.event.delete({ where: { id } });
  }

  // * Update event details
  editAnEvent(id: number, dto: CreateEventDto) {
    return this.prisma.event.update({ where: { id }, data: dto });
  }
}
