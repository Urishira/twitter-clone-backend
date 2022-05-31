import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Twitt {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  message: string;
}
