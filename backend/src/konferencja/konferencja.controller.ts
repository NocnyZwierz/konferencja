/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { KonferencjaService } from './konferencja.service';
import { MailerService } from '../emailSender'


@Controller('konferencja')
export class KonferencjaController {
  

  constructor(private readonly konferencjaService: KonferencjaService, private readonly SendMailSarvice: MailerService ) {}
  @Post()
  async create(
    @Body('Name') Name: string,
    @Body('Affiliation')Affiliation: string,
    @Body('AcademicTitle')AcademicTitle: string,
    @Body('Abstract')Abstract: string,
    @Body('Email')Email: string,
    @Body('Number')Number: number,
  ){

    const createEntry = this.konferencjaService.create(Name, Affiliation, AcademicTitle, Abstract, Email, Number);
    await this.SendMailSarvice.sendWelcomeEmail(Email, Name);
    return createEntry ;
  }

  @Get()
  get() {
    return this.konferencjaService.findAll();
  }
}
