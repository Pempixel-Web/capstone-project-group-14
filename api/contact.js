export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, city, address, message } = req.body;

  console.log('New contact submission:', { fullName, email, phone, city, address, message });

  return res.status(200).json({ success: true });
}
