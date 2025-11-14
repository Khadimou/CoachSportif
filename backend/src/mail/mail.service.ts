import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransporter({
      host: this.configService.get('MAIL_HOST'),
      port: this.configService.get('MAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get('MAIL_USER'),
        pass: this.configService.get('MAIL_PASSWORD'),
      },
    });
  }

  async sendContactNotification(contactData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message: string;
  }) {
    const mailOptions = {
      from: this.configService.get('MAIL_FROM'),
      to: this.configService.get('ADMIN_EMAIL'),
      subject: '🔔 Nouvelle demande de contact - Coach Sportif',
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${contactData.firstName} ${contactData.lastName}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        ${contactData.phone ? `<p><strong>Téléphone:</strong> ${contactData.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendBookingConfirmation(bookingData: {
    userEmail: string;
    userName: string;
    programTitle: string;
    sessionDate: Date;
    sessionTime?: string;
    amount: number;
  }) {
    const mailOptions = {
      from: this.configService.get('MAIL_FROM'),
      to: bookingData.userEmail,
      subject: '✅ Confirmation de réservation - Coach Sportif',
      html: `
        <h2>Réservation confirmée</h2>
        <p>Bonjour ${bookingData.userName},</p>
        <p>Votre réservation a été confirmée avec succès !</p>
        <p><strong>Programme:</strong> ${bookingData.programTitle}</p>
        <p><strong>Date:</strong> ${bookingData.sessionDate.toLocaleDateString('fr-FR')}</p>
        ${bookingData.sessionTime ? `<p><strong>Heure:</strong> ${bookingData.sessionTime}</p>` : ''}
        <p><strong>Montant:</strong> ${bookingData.amount}€</p>
        <p>Nous avons hâte de vous voir !</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendWelcomeEmail(userData: { email: string; firstName: string }) {
    const mailOptions = {
      from: this.configService.get('MAIL_FROM'),
      to: userData.email,
      subject: '🎉 Bienvenue sur Coach Sportif',
      html: `
        <h2>Bienvenue ${userData.firstName} !</h2>
        <p>Merci de vous être inscrit sur notre plateforme.</p>
        <p>Vous pouvez maintenant explorer nos programmes et réserver vos séances.</p>
        <p>À très bientôt !</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
