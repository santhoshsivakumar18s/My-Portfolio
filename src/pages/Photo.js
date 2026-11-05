import React from 'react';

const Photo = () => {
  return (
    <section className="photo-page" id="photo">
      <div className="photo-gallery">
        <div className="photo-gallery-item">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&q=80"
            alt="Architecture 1"
          />
        </div>
        <div className="photo-gallery-item">
          <img
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&q=80"
            alt="Architecture 2"
          />
        </div>
        <div className="photo-gallery-item">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
            alt="Architecture 3"
          />
        </div>
      </div>
    </section>
  );
};

export default Photo;

