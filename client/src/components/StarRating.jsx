import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating" style={{ display: 'flex', gap: '5px' }}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index} style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => onRatingChange(ratingValue)}
              style={{ display: 'none' }}
            />
            <span
              className="star"
              style={{
                color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
                fontSize: '24px',
              }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
