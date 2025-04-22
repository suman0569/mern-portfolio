import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mypic from './img/suman123.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import { GoArrowDownRight } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Home = () => {
  const roles = ['Frontend Developer', 'Data Analyst', 'UI/UX Designer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="py-5 home-section"
      style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="order-md-1 order-2">
            <div className='mb-3 d-flex'>
              <h1 className='mb-0'>Hi, I am </h1>
              <h1>
                <span className="text-primary">{roles[currentRoleIndex]}</span>
              </h1>
            </div>
           

            {/* Social Icons */}
            <div className="d-flex gap-3 mb-4">
              <a href="https://www.facebook.com/share/18bB16zTyP/" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/sumancdry77?igsh=MTdzam5xeXMyMmR6aw==" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sumanchy" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/suman0569" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaGithub size={24} />
              </a>
            </div>

            <div className="d-flex gap-3 mt-2">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="px-4 py-2 shadow"
                style={{ backgroundColor: '#3498db', borderColor: '#3498db' }}
              >
                Hire me <GoArrowDownRight />
              </Button>
            </div>
          </Col>

          <Col md={6} className="order-md-2 order-1 mb-4 mb-md-0">
            <div className="profile-image-container">
              <div
                className="mx-auto shadow-lg"
                style={{
                  width: '300px',
                  height: '300px',
                  border: '5px solid white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src={mypic}
                  alt="Suman Chaudhary"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
