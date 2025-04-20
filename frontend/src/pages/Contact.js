import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './css/Contact.css';
import { BsFillSendArrowDownFill } from "react-icons/bs";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, variant: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sumanchy.onrender.com/api/contact', formData);
      setAlert({
        show: true,
        variant: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setAlert({
        show: true,
        variant: 'danger',
        message: 'Failed to send message. Please try again.'
      });
      console.error('Error submitting form:', error);
    }
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlert({ show: false, variant: '', message: '' });
    }, 5000);
  };

  return (
    <section
      className="py-5"
      style={{
        background: 'linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%)',
      }}
      id="contact"
    >
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>

        {alert.show && (
          <Alert variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>
            {alert.message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit} className="contact-form">
          {/* Name */}
          <div className="form-floating-custom">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Name"
            />
            <label>Name</label>
          </div>

          {/* Email */}
          <div className="form-floating-custom">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Email"
            />
            <label>Email</label>
          </div>

          {/* Message */}
          <div className="form-floating-custom">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-control"
              placeholder="Message"
            />
            <label>Message</label>
          </div>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Get in Touch <BsFillSendArrowDownFill />
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
