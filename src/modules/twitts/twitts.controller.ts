import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTwittDto, UpdateTwittDto } from './dto';
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
  getTwittsById(@Param('id') id: number): Twitt {
    return this.twittsService.findTwitt(id);
  }

  @Post()
  postTwitts(@Body() message: CreateTwittDto) {
    return this.twittsService.createTwitt(message);
  }

  @Patch(':id')
  updateTwitts(@Param('id') id: number, @Body() twitt: UpdateTwittDto) {
    return this.twittsService.updateTwitt(id, twitt);
  }

  @Delete(':id')
  deleteTwitts(@Param('id') id: number) {
    return this.twittsService.removeTwitt(id);
  }
}
