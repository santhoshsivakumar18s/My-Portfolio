import React from 'react';

const AboutMe = () => {
  return (
    <section className="aboutme-page" id="about">
      <div className="aboutme-content">
        <div className="aboutme-left">
          <h2 className="section-title">About Me</h2>
          <div className="section-title-underline"></div>
          <p className="aboutme-intro">
            I'm Santhosh, a passionate B.Tech Artificial Intelligence and Data Science student at Saveetha Engineering College, Chennai. I enjoy building technology-driven solutions that combine software development, artificial intelligence, and problem-solving.
          </p>
        </div>

        <div className="aboutme-right">
          {/* <div className="aboutme-block">
            <h3>My Vision</h3>
            <p>
              To become an innovative technology engineer who builds intelligent, impactful, and scalable solutions. I aspire to contribute to the future of Artificial Intelligence, Computer Vision, and robotics by transforming complex ideas into meaningful real-world applications.
            </p>
          </div>

          <div className="aboutme-block">
            <h3>My Mission</h3>
            <p>
              My mission is to continuously learn, experiment, and develop my technical skills while building practical solutions to real-world problems. I believe in learning through hands-on experience, exploring emerging technologies, and creating software that makes a difference.
            </p>
          </div> */}

          <div className="aboutme-block">
            <h3>What I Do</h3>
            <p>
              01. Full-Stack Development

Building responsive and user-friendly web applications using React, JavaScript, Node.js, and modern backend technologies.<br /> <br />

02. Artificial Intelligence & Machine Learning

Exploring machine learning algorithms and developing intelligent applications using Python, TensorFlow, Scikit-learn, and data science libraries.<br /> <br />

03. Problem Solving & Innovation

Turning ideas into practical projects, experimenting with new technologies, and developing solutions through continuous learning and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="aboutme-stats">
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">30+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Awards Won</span>
        </div>
      </div> */}
    </section>
  );
};

export default AboutMe;

