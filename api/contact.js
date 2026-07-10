import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, city, address, message } = req.body;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'sophieobinyan@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h2>New message from your website</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  });

  return res.status(200).json({ success: true });
}
