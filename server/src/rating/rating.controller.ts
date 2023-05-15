import { Controller, Get, Post } from '@nestjs/common';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get(':id')
  getEventRating() {}

  @Post(':id')
  setReview() {}
}
