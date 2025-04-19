import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Skill.css'; // Make sure this file includes media queries
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGit,
  SiPython,
  SiExpress,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#f7df1e" /> },
    { name: 'React', icon: <SiReact size={40} color="#61DBFB" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={40} color="#3C873A" /> },
    { name: 'Express', icon: <SiExpress size={40} color="#000000" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
    { name: 'HTML5', icon: <SiHtml5 size={40} color="#e34c26" /> },
    { name: 'CSS3', icon: <SiCss3 size={40} color="#264de4" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} color="#7952B3" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38B2AC" /> },
    { name: 'Git', icon: <SiGit size={40} color="#F1502F" /> },
    { name: 'Python', icon: <SiPython size={40} color="#3776AB" /> },
    { name: 'SQL', icon: <SiMysql size={40} color="#00758F" /> },
  ];

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      <section id="skills" className="py-3">
        <Container className="skills-container">
          {/* Left: Text Box */}
          <div className="skills-text">
            <div className="text-box">
              <h2 className="text-center mb-3 py-3">My Skills</h2>
              <p>
                My main area of interest is frontend development using React. In addition to my
                frontend development skills, I also have a solid foundation in data analysis. I have
                obtained some technical skills in Excel, SQL, Tableau, Power BI, and basic statistics
                and probability for analysis. I am also interested in graphic designing using Canva and Figma.
              </p>
            </div>
          </div>

          {/* Right: Skill Icons */}
          <div className="skill-icons">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div>{skill.icon}</div>
                <div className="mt-2 fw-bold">{skill.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Skills;
