// StarRating.jsx

import React, { useState } from 'react';
import '../Styles/StarRating.css'; // Correct the path and adjust the CSS file name

const StarRating = ({ productId, rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarClick = (selectedRating) => {
    onRatingChange(productId, selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <i
            key={index}
            className={`fa fa-star ${starValue <= (hoveredRating || rating) ? 'active' : ''}`}
            onMouseEnter={() => setHoveredRating(starValue)}
            onMouseLeave={() => setHoveredRating(null)}
            onClick={() => handleStarClick(starValue)}
          ></i>
        );
      })}
    </div>
  );
};

export default StarRating;
