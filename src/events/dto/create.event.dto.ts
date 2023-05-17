import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  eventName: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  organizer: string;
  bannerImg?: string;
  @IsNotEmpty()
  planedAt: Date;
  @IsNotEmpty()
  theme: string;
  @IsNotEmpty()
  place: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  availablePlace: number;
}
