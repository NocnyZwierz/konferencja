import { Module } from '@nestjs/common';
import { KonferencjaModule } from './konferencja/konferencja.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Konferencja } from './konferencja/konferencja.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { BackupService } from './backup.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Konferencja],
      synchronize: true,
    }),
    KonferencjaModule,
  ],
  controllers: [AppController],
  providers: [AppService, BackupService],
})
export class AppModule {}
