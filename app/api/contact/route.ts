import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // In production, send this via your email provider (Resend, etc.).
  // Here, we just log to the server and pretend success.
  console.log('[contact] inbound message:', body);
  return NextResponse.json({ ok: true });
}
