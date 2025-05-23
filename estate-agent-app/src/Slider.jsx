import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  '/assets/house1.jpg',
  '/assets/house2.jpg',
  '/assets/house3.jpg',
  '/assets/house4.jpg',
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="rightSide">
        <img
          src={images[currentIndex]}
          alt={`House ${currentIndex + 1}`}
          className="slider-image"
      />
    </div>
    </div>
  );
}

export default Slider;
