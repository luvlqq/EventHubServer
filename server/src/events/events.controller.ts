import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('')
  getAllEvents() {}

  @Get(':id')
  getUniqEvent() {}

  @Post(':id')
  joinToEvent() {}

  @Post('create')
  createAnEvent() {}

  @Delete(':id')
  deleteAnEvent() {}

  @Patch(':id')
  editAnEvent() {}
}
