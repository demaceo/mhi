import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env['RESEND_API_KEY']);

export async function GET() {
  try {
    // Check if API key is configured
    if (!process.env['RESEND_API_KEY']) {
      return NextResponse.json(
        { 
          error: 'RESEND_API_KEY not configured',
          hasApiKey: false,
          businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
        },
        { status: 500 }
      );
    }

    // Test sending a simple email
    const result = await resend.emails.send({
      from: 'Mile High Interface <hello@milehighinterface.com>',
      to: process.env['BUSINESS_EMAIL'] || 'hello@milehighinterface.com',
      subject: 'Test Email - Contact Form Debug',
      html: '<p>This is a test email to verify the Resend configuration is working correctly.</p>',
    });

    if (result.error) {
      return NextResponse.json(
        { 
          error: 'Email send failed',
          details: result.error,
          hasApiKey: true,
          businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      emailId: result.data?.id,
      hasApiKey: true,
      businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error,
        hasApiKey: !!process.env['RESEND_API_KEY'],
        businessEmail: process.env['BUSINESS_EMAIL'] || 'not set'
      },
      { status: 500 }
    );
  }
}