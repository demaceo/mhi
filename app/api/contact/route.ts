import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend
const resend = new Resend(process.env['RESEND_API_KEY']);

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Check if Resend API key is configured
    if (!process.env['RESEND_API_KEY']) {
      console.error('RESEND_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Email content for the business
    const businessEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - Mile High Interface</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Mile High Interface LLC</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea;">
    <h2 style="margin-top: 0; color: #333;">Contact Details</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: 600; color: #555; width: 80px;">Name:</td>
        <td style="padding: 8px 0; color: #333;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: 600; color: #555;">Email:</td>
        <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
      </tr>
    </table>
  </div>
  
  <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #e9ecef; margin-top: 20px;">
    <h3 style="margin-top: 0; color: #333; border-bottom: 2px solid #f1f3f4; padding-bottom: 10px;">Message</h3>
    <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 3px solid #667eea;">
      <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
    </div>
  </div>
  
  <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; text-align: center;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      This message was sent via the contact form on 
      <a href="https://milehighinterface.com" style="color: #667eea; text-decoration: none;">milehighinterface.com</a>
    </p>
    <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
      Sent on ${new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })}
    </p>
  </div>
</body>
</html>
    `.trim();

    // Send email to business
    const businessEmailResult = await resend.emails.send({
      from: 'Mile High Interface <noreply@milehighinterface.com>',
      to: process.env['BUSINESS_EMAIL'] || 'hello@milehighinterface.com',
      subject: `New Contact Form Submission from ${name}`,
      html: businessEmailContent,
      replyTo: email,
    });

    if (businessEmailResult.error) {
      console.error('Failed to send business email:', businessEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    const confirmationEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting Mile High Interface</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Thank You!</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Mile High Interface LLC</p>
  </div>
  
  <div style="padding: 25px;">
    <h2 style="color: #333; margin-top: 0;">Hi ${name},</h2>
    
    <p style="color: #555; font-size: 16px;">
      Thank you for reaching out to Mile High Interface! We've received your message and will get back to you within 1-2 business days.
    </p>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
      <p style="margin: 0; white-space: pre-wrap; color: #555;">${message}</p>
    </div>
    
    <p style="color: #555;">
      In the meantime, feel free to explore our work and services on our website. If you have any urgent questions, 
      you can reply directly to this email.
    </p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://milehighinterface.com" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
        Visit Our Website
      </a>
    </div>
    
    <p style="color: #555;">
      Best regards,<br>
      <strong>The Mile High Interface Team</strong>
    </p>
  </div>
  
  <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; text-align: center; border-top: 3px solid #667eea;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      Mile High Interface LLC<br>
      Colorado, USA
    </p>
    <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
      This is an automated confirmation email. Please do not reply to this message.
    </p>
  </div>
</body>
</html>
    `.trim();

    // Send confirmation email (optional - only if we want to send confirmations)
    try {
      await resend.emails.send({
        from: 'Mile High Interface <hello@milehighinterface.com>',
        to: email,
        subject: 'Thank you for contacting Mile High Interface',
        html: confirmationEmailContent,
      });
    } catch (confirmationError) {
      // Don't fail the main request if confirmation email fails
      console.warn('Failed to send confirmation email:', confirmationError);
    }

    // Log successful submission
    console.log(`[contact] Email sent successfully to business. From: ${name} <${email}>`);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
