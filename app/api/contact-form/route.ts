import { NextResponse } from 'next/server';
import { gmailService } from '@/lib/gmail';
import { z } from 'zod';

// HTML escape function to prevent HTML injection in email templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Validation schema for the multi-step form
const formSchema = z.object({
  persona: z.enum(['entrepreneur', 'startup-founder', 'small-business', 'investor', 'product-manager', 'visionary'], {
    errorMap: () => ({ message: 'Please select who you are' }),
  }),
  goals: z.array(z.string()).min(1, 'Please select at least one goal'),
  services: z.array(z.enum(['mvp', 'web-app', 'mobile-app', 'ui-ux', 'consulting', 'maintenance'])).min(1, 'Please select at least one service'),
  timeline: z.enum(['exploring', 'soon', 'urgent'], {
    errorMap: () => ({ message: 'Please select a timeline' }),
  }),
  email: z.string().email('Invalid email address'),
  message: z.string().max(5000, 'Message must be at most 5000 characters').optional(),
});

// Mapping for display labels
const personaLabels: Record<string, string> = {
  'entrepreneur': 'Entrepreneur',
  'startup-founder': 'Startup Founder',
  'small-business': 'Small Business Owner',
  'investor': 'Investor',
  'product-manager': 'Product Manager',
  'visionary': 'Visionary',
};

const serviceLabels: Record<string, string> = {
  'mvp': 'MVP Development',
  'web-app': 'Web Application',
  'mobile-app': 'Mobile App',
  'ui-ux': 'UI/UX Design',
  'consulting': 'Technical Consulting',
  'maintenance': 'Maintenance & Support',
};

const timelineLabels: Record<string, string> = {
  'exploring': 'Just Exploring',
  'soon': 'Ready to Start Soon (1-3 months)',
  'urgent': 'Urgent Need (Immediately)',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = formSchema.safeParse(body);
    if (!validationResult.success) {
      // Sanitize error messages to avoid exposing internal details
      const errorMessages = validationResult.error.errors.map((err) => err.message);
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: errorMessages,
        },
        { status: 400 }
      );
    }

    const { persona, goals, services, timeline, email, message } = validationResult.data;

    // Check if Gmail credentials are configured
    if (
      !process.env['GOOGLE_CLIENT_ID'] ||
      !process.env['GOOGLE_CLIENT_SECRET'] ||
      !process.env['GOOGLE_REFRESH_TOKEN'] ||
      !process.env['GOOGLE_EMAIL']
    ) {
      console.error('Gmail OAuth credentials are not properly configured');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not configured',
        },
        { status: 500 }
      );
    }

    // Format the data for the email (escape user input to prevent HTML injection)
    const personaLabel = escapeHtml(personaLabels[persona] || persona);
    const servicesFormatted = services.map((s) => escapeHtml(serviceLabels[s] || s)).join(', ');
    const timelineLabel = escapeHtml(timelineLabels[timeline] || timeline);
    const goalsFormatted = goals.map((g) => escapeHtml(g)).join(', ');
    const escapedEmail = escapeHtml(email);
    const escapedMessage = message ? escapeHtml(message) : '';

    // Email content for the business
    const businessEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead - Who Are You Form - Mile High Interface</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0891b2 0%, #065f46 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Submission</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Who Are You Form - Mile High Interface</p>
  </div>

  <div style="background: #f0fdfa; padding: 25px; border-radius: 8px; border-left: 4px solid #0891b2; margin-bottom: 20px;">
    <h2 style="margin-top: 0; color: #0891b2; font-size: 18px;">Lead Profile</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #555; width: 120px; vertical-align: top;">Type:</td>
        <td style="padding: 10px 0; color: #333;">
          <span style="display: inline-block; background: linear-gradient(135deg, #0891b2, #065f46); color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${personaLabel}</span>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #555; vertical-align: top;">Email:</td>
        <td style="padding: 10px 0; color: #333;"><a href="mailto:${escapedEmail}" style="color: #0891b2; text-decoration: none; font-weight: 500;">${escapedEmail}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 0; font-weight: 600; color: #555; vertical-align: top;">Timeline:</td>
        <td style="padding: 10px 0; color: #333;">
          <span style="display: inline-block; background: ${timeline === 'urgent' ? '#ef4444' : timeline === 'soon' ? '#f59e0b' : '#6b7280'}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${timelineLabel}</span>
        </td>
      </tr>
    </table>
  </div>

  <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #e9ecef; margin-bottom: 20px;">
    <h3 style="margin-top: 0; color: #333; border-bottom: 2px solid #f1f3f4; padding-bottom: 10px;">Goals</h3>
    <ul style="margin: 0; padding-left: 20px;">
      ${goals.map((goal) => `<li style="margin: 8px 0; color: #555;">${escapeHtml(goal)}</li>`).join('')}
    </ul>
  </div>

  <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #e9ecef; margin-bottom: 20px;">
    <h3 style="margin-top: 0; color: #333; border-bottom: 2px solid #f1f3f4; padding-bottom: 10px;">Services Interested In</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      ${services
        .map(
          (service) =>
            `<span style="display: inline-block; background: #f0fdfa; color: #0891b2; padding: 6px 12px; border-radius: 6px; font-size: 14px; border: 1px solid #0891b2;">${escapeHtml(serviceLabels[service] || service)}</span>`
        )
        .join('')}
    </div>
  </div>

  ${
    escapedMessage
      ? `
  <div style="background: white; padding: 25px; border-radius: 8px; border: 1px solid #e9ecef; margin-bottom: 20px;">
    <h3 style="margin-top: 0; color: #333; border-bottom: 2px solid #f1f3f4; padding-bottom: 10px;">Additional Message</h3>
    <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 3px solid #0891b2;">
      <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #555;">${escapedMessage}</p>
    </div>
  </div>
  `
      : ''
  }

  <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; text-align: center;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      This lead was submitted via the "Who Are You" form on
      <a href="https://milehighinterface.com" style="color: #0891b2; text-decoration: none;">milehighinterface.com</a>
    </p>
    <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
      Sent on ${new Date().toLocaleString('en-US', {
        timeZone: 'America/Denver',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      })}
    </p>
  </div>
</body>
</html>
    `.trim();

    // Determine business email recipient
    const businessEmailRecipient = process.env['BUSINESS_EMAIL'] || process.env['GOOGLE_EMAIL'];
    if (!businessEmailRecipient) {
      console.error('No business email configured. Set BUSINESS_EMAIL or GOOGLE_EMAIL environment variable.');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not properly configured. Please contact the site administrator.',
        },
        { status: 500 }
      );
    }

    // Send email to business
    const businessEmailResult = await gmailService.sendEmail({
      to: businessEmailRecipient,
      subject: `New Lead: ${personaLabel} - ${timelineLabel}`,
      html: businessEmailContent,
      replyTo: email,
    });

    if (!businessEmailResult.success) {
      console.error('Failed to send business email:', businessEmailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send email',
          details: businessEmailResult.error,
        },
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
  <title>Thank you - Mile High Interface</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0891b2 0%, #065f46 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Thank You!</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Mile High Interface LLC</p>
  </div>

  <div style="padding: 25px;">
    <h2 style="color: #333; margin-top: 0;">We've Received Your Information!</h2>

    <p style="color: #555; font-size: 16px;">
      Thank you for taking the time to tell us about yourself and your project. Our team will review your submission and reach out within 1-2 business days.
    </p>

    <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin: 20px 0;">
      <h3 style="margin-top: 0; color: #0891b2;">Here's What You Shared:</h3>
      <ul style="margin: 0; padding-left: 20px; color: #555;">
        <li style="margin: 8px 0;"><strong>You are:</strong> ${personaLabel}</li>
        <li style="margin: 8px 0;"><strong>Your goals:</strong> ${goalsFormatted}</li>
        <li style="margin: 8px 0;"><strong>Services:</strong> ${servicesFormatted}</li>
        <li style="margin: 8px 0;"><strong>Timeline:</strong> ${timelineLabel}</li>
      </ul>
    </div>

    <p style="color: #555;">
      In the meantime, feel free to explore our services and past work on our website. We're excited to learn more about your project!
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://milehighinterface.com/services" style="display: inline-block; background: linear-gradient(135deg, #0891b2 0%, #065f46 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
        Explore Our Services
      </a>
    </div>

    <p style="color: #555;">
      Best regards,<br>
      <strong>The Mile High Interface Team</strong>
    </p>
  </div>

  <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; text-align: center; border-top: 3px solid #0891b2;">
    <p style="margin: 0; color: #666; font-size: 14px;">
      Mile High Interface LLC<br>
      Colorado, USA
    </p>
    <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
      This is an automated confirmation email.
    </p>
  </div>
</body>
</html>
    `.trim();

    // Send confirmation email (optional - don't fail if this fails)
    try {
      await gmailService.sendEmail({
        to: email,
        subject: 'Thank you for reaching out to Mile High Interface',
        html: confirmationEmailContent,
      });
    } catch (confirmationError) {
      console.warn('Failed to send confirmation email:', confirmationError);
    }

    // Log successful submission (without sensitive email data)
    console.log(`[contact-form] Lead submitted successfully. Type: ${personaLabel}, Timeline: ${timelineLabel}`);

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
