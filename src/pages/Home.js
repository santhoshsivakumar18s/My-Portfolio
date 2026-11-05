import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-image-section">
        <img
          src="/assests/me.jpeg"
          alt="Portfolio Portrait"
        />
      </div>
      <div className="home-content-section">
        <h1 className="home-title">
          <div className="home-title-line">
            My <span className="title-line-decoration"></span>
          </div>
          <div>Portfolio</div>
        </h1>
        <p className="home-description">
          Hey, I'm Santhosh. A student exploring the intersection of AI and Data.
I work with Python, JavaScript, Full-Stack Development, and Machine Learning.
I believe in learning by building, solving real world problems, and growing through technology.
        </p>
        <div className="home-actions">
          <button
            className="btn-explore"
            onClick={() => {
              const el = document.getElementById('works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Now
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
