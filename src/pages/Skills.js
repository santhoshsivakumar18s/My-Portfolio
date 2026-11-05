import React from 'react';

const skillsData = [
  { name: 'App development', level: 78 },
  { name: 'Web Development', level: 92 },
  { name: 'Postgre SQL', level: 85 },
  { name: 'Data Science', level: 90 },
  { name: 'python', level: 98 },
  { name: 'Git & Github', level: 95 },
];

const toolsData = [
  { name: 'Web development', icon: 'html5', color: 'E34F26' },
  { name: 'Git & GitHub', icon: 'github', color: 'FFFFFF' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
  { name: 'React', icon: 'react', color: '61DAFB' },
  { name: 'Python', icon: 'python', color: '3776AB' },
  { name: 'Data Science', icon: 'chart', color: 'FFFFFF' },
];

const Skills = () => {
  return (
    <section className="skills-page" id="skills">
      <div className="skills-content">
        <div className="skills-left">
          <h2 className="section-title">My Skills</h2>
          <div className="section-title-underline"></div>
          <p className="skills-description">
            I have hands on experience in programming, full-stack development.
            I enjoy exploring different tools and frameworks to build practical, scalable, and user focused applications.
          </p>

          <div className="tools-grid">
            {toolsData.map((tool, index) => (
              <div className="tool-item" key={index}>
                <span className="tool-icon">
                  {tool.icon === 'chart' ? (
                    <svg viewBox="0 0 24 24" role="img" aria-label="Data Science">
                      <path d="M4 19V5M4 19h17M8 16v-4h3v4M14 16V8h3v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`}
                      alt=""
                    />
                  )}
                </span>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-right">
          <div className="skills-bars">
            {skillsData.map((skill, index) => (
              <div className="skill-bar-item" key={index}>
                <div className="skill-bar-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
