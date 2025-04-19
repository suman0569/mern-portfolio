const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { submitContactForm };