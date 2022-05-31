import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTwittDto, UpdateTwittDto } from './dto';

import { Twitt } from './twitt.entity';

@Injectable()
export class TwittsService {
  private _twitts: Twitt[] = [
    {
      id: 1,
      message: 'Hello',
    },
  ];

  findTwitt(id: number): Twitt {
    const twitt = this._twitts.find((twitt) => twitt.id === id);
    if (!twitt) {
      throw new NotFoundException();
    }
    return twitt;
  }

  findAllTwitt(): Twitt[] {
    return this._twitts;
  }

  createTwitt({ message }: CreateTwittDto): void {
    this._twitts.push({
      id: Math.random() * 2000 + 1,
      message,
    });
  }

  updateTwitt(id: number, { message }: UpdateTwittDto): Twitt {
    const twitt: Twitt = this.findTwitt(id);
    twitt.message = message;
    return twitt;
  }

  removeTwitt(id: number): void {
    const removet = this._twitts.filter((twitt) => twitt.id !== id);
    this._twitts = removet;
  }
}
