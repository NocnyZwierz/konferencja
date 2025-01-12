/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailersend.net',
      port: 587,
      secure: false,
      auth: {
        user: 'MS_xP0kII@trial-ynrw7gy79vjg2k8e.mlsender.net',
        pass: '31suWpqnTPmBFTAb',
      },
    });
  }

async sendWelcomeEmail(Email, Name) {
    const mailOptions = {
      from: '"Paweł Grabczak" <MS_xP0kII@trial-ynrw7gy79vjg2k8e.mlsender.net>',
      to: Email,
      subject: 'Potwierdzenie zgłoszenia udziału w konferencji.',
      text: `Cześć ${Name} ,\n\nTwoje zgłoszenie zostało przyjęte.\n\nDziękujemy i do zobaczenia!\n`
      
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
