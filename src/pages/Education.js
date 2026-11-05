import React from 'react';

const educationData = [
  
  {
    degree: 'Bachelor of Technology',
    institution: 'Saveetha Engineering College',
    year: '2025 — 2029',
    
  },
  {
    degree: 'Intermediate',
    institution: 'PSN Sri Vivekanandha Jr college',
    year: '2023-2025',
    
  },
  {
    degree: 'High School',
    institution: 'PCR Govt High School',
    year: '2012 — 2025',
    
  },
];

const Education = () => {
  return (
    <section className="education-page" id="education">
      <div className="education-header">
        <h2 className="section-title">Education</h2>
        <div className="section-title-underline"></div>
        <p className="education-subtitle">
          My academic journey and professional certifications that have shaped my
          expertise and creative approach.
        </p>
      </div>

      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-card-dot"></div>
            <div className="education-card-content">
              <span className="education-year">{item.year}</span>
              <h3 className="education-degree">{item.degree}</h3>
              <h4 className="education-institution">{item.institution}</h4>
              <p className="education-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

