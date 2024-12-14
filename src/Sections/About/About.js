import React from 'react';
import CanvasBackground from '../../hooks/CanvasBackground';
import useTypingEffect from '../../hooks/useTypingEffect';

import './About.css';

const About = () => {
  const typedText = useTypingEffect("Full-Stack Web Developer", 100);

  return (
    <div className="about-page" id="aboutMe">
      {/* Canvas for background */}
      <CanvasBackground />
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-content__title">
            Hi, I'm <span className="highlighted-text">Aya</span>
            <p className="typed-text">{typedText}</p>
          </h1>
          <p className="about-content__description">
            Web developer with expertise in both front-end and back-end technologies.
          </p>
          <p className="about-content__description">
            Get in Touch, Let's build something together!
          </p>
          <div className="social-links">
            <a href="https://github.com/ak-AYA" className="social-link" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aya-garalleh-702157188/" className="social-link" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <a href="mailto:garalleh.aya.via@gmail.com" className="contact-button">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
