import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, message } = await request.json();

  if (!email || !message) {
    return Response.json({ error: 'Email and message are required.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ackshat.tiwari@gmail.com',
    subject: 'Contact Form (Resend)',
    html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}