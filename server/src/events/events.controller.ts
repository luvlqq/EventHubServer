import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all events from db' })
  getAllEvents() {}

  @Get(':id')
  @ApiOperation({ summary: 'Get unique event from db' })
  getUniqEvent() {}

  @Post(':id')
  @ApiOperation({ summary: 'Join to event' })
  joinToEvent() {}

  @Post('create')
  @ApiOperation({ summary: 'Create and event' })
  createAnEvent() {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an event' })
  deleteAnEvent() {}

  @Patch(':id')
  @ApiOperation({ summary: 'Update event details' })
  editAnEvent() {}
}
