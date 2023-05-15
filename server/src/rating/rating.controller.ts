import { Controller, Get, Post } from '@nestjs/common';
import { RatingService } from './rating.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Rating')
@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get event rating' })
  getEventRating() {}

  @Post(':id')
  @ApiOperation({ summary: 'Set event rating by user' })
  setReview() {}
}
