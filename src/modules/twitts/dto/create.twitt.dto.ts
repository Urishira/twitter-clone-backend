import { IsString } from 'class-validator';

export class CreateTwittDto {
  @IsString()
  readonly message: string;
}
