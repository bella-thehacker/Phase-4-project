import React, { useState } from 'react';

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    position: "relative", // Keep relative positioning
    width: "50vw",        // Half the screen width
    height: "50vh",       // Half the screen height
    margin: "0 auto",     // Center the slider horizontally
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",                // Center vertically
    transform: "translateY(-50%)",
    left: "10px",              // Adjusted from 32px for smaller width
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",                // Center vertically
    transform: "translateY(-50%)",
    right: "10px",             // Adjusted from 32px for smaller width
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",        // Space the dots below the slider
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: currentIndex ? "#000" : "#fff",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const imageStyles = {
    width: "100%",         // Full width within the slider container
    height: "100%",        // Full height within the slider container
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      {/* Left arrow */}
      <div style={leftArrowStyles} onClick={goToPrevious}>
        &#10094; {/* Left arrow */}
      </div>

      {/* Right arrow */}
      <div style={rightArrowStyles} onClick={goToNext}>
        &#10095; {/* Right arrow */}
      </div>

      {/* Image */}
      <div style={imageStyles}></div>

      {/* Dots below the slider */}
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              ...dotStyles,
              color: currentIndex === slideIndex ? '#000' : '#bbb',
            }}
            onClick={() => goToSlide(slideIndex)}
          >
            &#9679; {/* Dot */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
