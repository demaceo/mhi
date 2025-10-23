import { google } from 'googleapis';
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

class GmailService {
  private oauth2Client: any;
  
  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env['GOOGLE_CLIENT_ID'],
      process.env['GOOGLE_CLIENT_SECRET'],
      'https://developers.google.com/oauthplayground' // Redirect URL
    );

    this.oauth2Client.setCredentials({
      refresh_token: process.env['GOOGLE_REFRESH_TOKEN']
    });
  }

  async sendEmail({ to, subject, html, replyTo }: EmailOptions): Promise<{ success: boolean; error?: any; messageId?: string }> {
    try {
      // Get access token
      const accessToken = await this.oauth2Client.getAccessToken();

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env['GOOGLE_EMAIL'],
          clientId: process.env['GOOGLE_CLIENT_ID'],
          clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
          refreshToken: process.env['GOOGLE_REFRESH_TOKEN'],
          accessToken: accessToken.token,
        },
      });

      // Send email
      const result = await transporter.sendMail({
        from: `Mile High Interface <${process.env['GOOGLE_EMAIL']}>`,
        to,
        subject,
        html,
        replyTo: replyTo || process.env['GOOGLE_EMAIL'],
      });

      return { 
        success: true, 
        messageId: result.messageId 
      };

    } catch (error) {
      console.error('Gmail API Error:', error);
      return { 
        success: false, 
        error: error 
      };
    }
  }

  // Test the connection
  async testConnection(): Promise<{ success: boolean; error?: any }> {
    try {
      await this.oauth2Client.getAccessToken();
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}

export const gmailService = new GmailService();