import React from 'react';

const projects = [
  {
    id: 1,
    title: 'VoyageMind – AI Tour Planner',
    category: 'Hackathon Project',
    image: '/assests/voyage.png',
  },
  {
    id: 2,
    title: 'Web Application',
    category: 'Development',
    image: '/assests/todo.png',
  },
  {
    id: 3,
    title: 'Mobile App ',
    category: 'Hackathon Project',
    image: '/assests/rapid.png',
  },
  {
    id: 4,
    title: 'Cognisafe',
    category: 'Prototype',
    image: '/assests/cognisafe.png',
  },
  {
    id: 5,
    title: 'AI Assistant',
    category: 'AI Assistant',
    image: '/assests/AI.png',
  },
  
];

const MyWorks = () => {
  return (
    <section className="works-page" id="works">
      <div className="works-header">
        <h2 className="section-title">My Works</h2>
        <div className="section-title-underline"></div>
        
      </div>

      <div className="works-grid">
        {projects.map((project) => (
          <div className="work-card" key={project.id}>
            <div className="work-card-image">
              <img src={project.image} alt={project.title} />
              <div className="work-card-overlay">
                <span className="work-card-category">{project.category}</span>
                <h3 className="work-card-title">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;

