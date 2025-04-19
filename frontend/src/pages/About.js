import React from 'react';
import { Container } from 'react-bootstrap';
import videofile from './img/myvideo.mp4';
import './css/About.css'; // custom styles

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="text-center mb-5 section-title">About</h2>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-5">
          {/* Text Area */}
          <div className="about-text-box">
            <p>
              <h3>Hi, I'm Suman.</h3><br></br>
              I'm someone who enjoys solving problems, learning quickly, and paying close attention 
              to the details most people overlook. I'm currently studying CSIT in Biratnagar, 
              and I'm curious about all things tech I love building things with code.Outside of class and projects, I’m usually watching a good movie, reading a cool book, or 
              diving into an online coding course. <br></br><br></br>I believe that strong communication and leadership 
              are just as important as technical skills — and I’m all about bringing those together 
              on creative, ambitious projects with people who think big.
            </p>
           
          </div>

          {/* Video Area */}
          <div className="about-video-box">
            <video className="about-video" controls>
              <source src={videofile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
