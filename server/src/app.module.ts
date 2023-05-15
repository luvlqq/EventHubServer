import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [AuthModule, UsersModule, EventsModule, RatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
