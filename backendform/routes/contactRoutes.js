const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load env variables from .env

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Log to verify environment variables (optional - remove in production)
  console.log('Using email:', process.env.EMAIL_USER);

  // Create transporter INSIDE the route (safer for small apps)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // your Gmail
      pass: process.env.EMAIL_PASS,  // your Gmail App Password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent from ${email}`);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

module.exports = router;
