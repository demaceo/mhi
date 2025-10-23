import { NextResponse } from 'next/server';
import { gmailService } from '@/lib/gmail';

// Initialize Gmail service (no initialization needed)

export async function GET() {
  try {
    // Check if Gmail credentials are configured
    if (!process.env['GOOGLE_CLIENT_ID'] || !process.env['GOOGLE_CLIENT_SECRET'] || !process.env['GOOGLE_REFRESH_TOKEN'] || !process.env['GOOGLE_EMAIL']) {
      return NextResponse.json(
        { 
          error: 'Gmail OAuth credentials not configured',
          hasCredentials: {
            clientId: !!process.env['GOOGLE_CLIENT_ID'],
            clientSecret: !!process.env['GOOGLE_CLIENT_SECRET'],
            refreshToken: !!process.env['GOOGLE_REFRESH_TOKEN'],
            email: !!process.env['GOOGLE_EMAIL']
          },
          businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
        },
        { status: 500 }
      );
    }

    // Test Gmail connection
    const connectionTest = await gmailService.testConnection();
    if (!connectionTest.success) {
      return NextResponse.json(
        { 
          error: 'Gmail connection failed',
          details: connectionTest.error,
          hasCredentials: true,
          businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
        },
        { status: 500 }
      );
    }

    // Test sending a simple email
    const result = await gmailService.sendEmail({
      to: process.env['BUSINESS_EMAIL'] || process.env['GOOGLE_EMAIL'] || 'hello@milehighinterface.com',
      subject: 'Test Email - Contact Form Debug (Gmail)',
      html: '<p>This is a test email to verify the Gmail configuration is working correctly.</p>',
    });

    if (!result.success) {
      return NextResponse.json(
        { 
          error: 'Email send failed',
          details: result.error,
          hasCredentials: true,
          businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully via Gmail',
      messageId: result.messageId,
      hasCredentials: true,
      businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error,
        hasCredentials: {
          clientId: !!process.env['GOOGLE_CLIENT_ID'],
          clientSecret: !!process.env['GOOGLE_CLIENT_SECRET'],
          refreshToken: !!process.env['GOOGLE_REFRESH_TOKEN'],
          email: !!process.env['GOOGLE_EMAIL']
        },
        businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
      },
      { status: 500 }
    );
  }
}