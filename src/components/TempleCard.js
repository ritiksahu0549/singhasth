// src/components/TempleCard.js

// src/components/TempleCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const TempleCard = ({ id, title, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0, 100)}...</p>
          <Link to={`/temple/${id}`} className="btn btn-primary mt-auto">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TempleCard;
