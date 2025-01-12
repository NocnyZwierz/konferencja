/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Konferencja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;
  @Column()
  Affiliation: string;
  @Column()
  AcademicTitle: string;
  @Column()
  Abstract: string;
  @Column()
  Email: string;
  @Column()
  Number: number;
}
