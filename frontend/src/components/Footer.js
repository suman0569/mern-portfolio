import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center">
          <Col>
            

            

            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <a
                href="https://www.facebook.com/share/18bB16zTyP/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-center text-decoration-none"
              >
                <FaFacebookF size={20} />
                <div style={{ fontSize: '0.8rem' }}></div>
              </a>

              <a
                href="https://www.linkedin.com/in/sumanchy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-center text-decoration-none"
              >
                <FaLinkedinIn size={20} />
                <div style={{ fontSize: '0.8rem' }}></div>
              </a>

              <a
                href="https://www.instagram.com/sumancdry77?igsh=MTdzam5xeXMyMmR6aw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-center text-decoration-none"
              >
                <FaInstagram size={20} />
                <div style={{ fontSize: '0.8rem' }}></div>
              </a>

              <a
                href="https://github.com/suman0569"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-center text-decoration-none"
              >
                <FaGithub size={20} />
                <div style={{ fontSize: '0.8rem' }}></div>
              </a>
             
            </div>
          </Col>
        </Row>
      </Container>
      <p className='pt-4 text-center pd-0 ' style={{ fontSize: '0.75rem' }}>
  @2025 Suman Chaudhary. All rights Reserved
</p>

    </footer>
  );
};

export default Footer;
