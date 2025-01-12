/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BackupService {
  private dbPath = path.resolve('database.sqlite');
  private backupDir = path.resolve(__dirname, '../backups');
  constructor() {
    console.log(this.dbPath)
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir);
    }
  }

  @Cron('0 0 * * *')

  createBackup() {
    console.log(this.dbPath)
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFilePath = path.join(
      this.backupDir,
      `backup-${timestamp}.sqlite`,
    );

    try {
      fs.copyFileSync(this.dbPath, backupFilePath);
      console.log(`Backup bazy danych utworzony: ${backupFilePath}`);
    } catch (error) {
      console.error('Błąd podczas tworzenia kopii zapasowej:', error);
    }
  }
}
