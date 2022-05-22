import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Twitt } from './twitt.entity';
import { TwittsService } from './twitts.service';

@Controller('twitts')
export class TwittsController {
  constructor(private readonly twittsService: TwittsService) {}

  @Get()
  getTwitts(@Query() filterQuery): Twitt[] {
    const { SearchItem, olderBy } = filterQuery;
    return this.twittsService.findAllTwitt();
  }

  @Get(':id')
  getTwittsById(@Param('id') id: string): Twitt {
    return this.twittsService.findTwitt(id);
  }

  @Post()
  postTwitts(@Body('message') message: string) {
    return this.twittsService.createTwitt(message);
  }

  @Patch(':id')
  updateTwitts(@Param('id') id: string, @Body('message') message: string) {
    return this.twittsService.updateTwitt(id, message);
  }

  @Delete(':id')
  deleteTwitts(@Param('id') id: string) {
    return this.twittsService.removeTwitt(id);
  }
}
