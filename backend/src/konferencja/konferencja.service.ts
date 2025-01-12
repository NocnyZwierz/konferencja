/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Konferencja } from './konferencja.entity';

@Injectable()
export class KonferencjaService {
    constructor(
        @InjectRepository(Konferencja)
        private konferencjaRepository: Repository<Konferencja>
    ){}

    create(Name: string, Affiliation: string, AcademicTitle: string, Abstract: string, Email: string, Number: number) {
        const konferencja = new Konferencja()
        konferencja.Name = Name;
        konferencja.Affiliation = Affiliation;
        konferencja.AcademicTitle = AcademicTitle;
        konferencja.Abstract = Abstract;
        konferencja.Email = Email;
        konferencja.Number = Number;
        return this.konferencjaRepository.save(konferencja);
    }

    findAll() {
        return this.konferencjaRepository.find();
    }
}
