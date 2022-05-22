import { Injectable, NotFoundException } from '@nestjs/common';

import { Twitt } from './twitt.entity';

@Injectable()
export class TwittsService {
  private _twitts: Twitt[] = [
    {
      id: ' 1',
      message: 'Hello',
    },
  ];

  findTwitt(id: string): Twitt {
    const twitt = this._twitts.find((twitt) => twitt.id === id);
    if (!twitt) {
      throw new NotFoundException();
    }
    return twitt;
  }

  findAllTwitt(): Twitt[] {
    return this._twitts;
  }

  createTwitt(message: string): void {
    this._twitts.push({
      id: (Math.random() * 2000 + 1).toString(),
      message,
    });
  }

  updateTwitt(id: string, message: string): Twitt {
    const twitt: Twitt = this.findTwitt(id);
    twitt.message = message;
    return twitt;
  }

  removeTwitt(id: string): void {
    const removet = this._twitts.filter((twitt) => twitt.id !== id);
    this._twitts = removet;
  }
}
