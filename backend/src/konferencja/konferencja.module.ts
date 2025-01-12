/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KonferencjaService } from './konferencja.service';
import { KonferencjaController } from './konferencja.controller';
import { Konferencja } from './konferencja.entity';
import { MailerService } from '../emailSender'

@Module({
  imports: [TypeOrmModule.forFeature([Konferencja])],
  controllers: [KonferencjaController],
  providers: [KonferencjaService, MailerService ],
})
export class KonferencjaModule {}
