import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTwittDto, UpdateTwittDto } from './dto';
import { Repository } from 'typeorm';
import { Twitt } from './twitt.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TwittsService {
  constructor(
    @InjectRepository(Twitt)
    private readonly twittRepository: Repository<Twitt>,
  ) {}

  async findAllTwitt(): Promise<Twitt[]> {
    return await this.twittRepository.find();
  }

  async findTwitt(id: number): Promise<Twitt> {
    const twitt: Twitt = await this.twittRepository.findOneBy({ id });
    if (!twitt) {
      throw new NotFoundException();
    }
    return twitt;
  }

  createTwitt({ message }: CreateTwittDto) {
    const newTwitt: Twitt = this.twittRepository.create({ message });
    return this.twittRepository.save(newTwitt);
  }

  async updateTwitt(id: number, { message }: UpdateTwittDto) {
    const updateTwitt: Twitt = await this.twittRepository.preload({
      id,
      message,
    });
    if (!updateTwitt) throw new NotFoundException('Resource not found');

    return updateTwitt;
  }

  async removeTwitt(id: number): Promise<void> {
    const twitt: Twitt = await this.twittRepository.findOneBy({ id });
    if (!twitt) throw new NotFoundException('Resource not found');
  }
}
