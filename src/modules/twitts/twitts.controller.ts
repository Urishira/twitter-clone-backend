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
  getTwitts(@Query() filterQuery): Promise<Twitt[]> {
    const { SearchItem, olderBy } = filterQuery;
    return this.twittsService.findAllTwitt();
  }

  @Get(':id')
  getTwittsById(@Param('id') id: number): Promise<Twitt> {
    return this.twittsService.findTwitt(id);
  }

  @Post()
  postTwitts(@Body() message: CreateTwittDto) {
    return this.twittsService.createTwitt(message);
  }

  @Patch(':id')
  updateTwitts(
    @Param('id') id: number,
    @Body() twitt: UpdateTwittDto,
  ): Promise<Twitt> {
    return this.twittsService.updateTwitt(id, twitt);
  }

  @Delete(':id')
  deleteTwitts(@Param('id') id: number): Promise<void> {
    return this.twittsService.removeTwitt(id);
  }
}
