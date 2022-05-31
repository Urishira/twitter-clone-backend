import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Twitt } from './twitt.entity';
import { TwittsController } from './twitts.controller';
import { TwittsService } from './twitts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Twitt])],
  controllers: [TwittsController],
  providers: [TwittsService],
})
export class TwittsModule {}
