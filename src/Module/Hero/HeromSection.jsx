import  { useState } from 'react';
import PropTypes from 'prop-types';
import './Hero.css';
import back from '/assets/img/chevron_back.png'
const HeroSection = ({ images, backgroundImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="text-container">
          <h1 className="hero-title">استكشف</h1>
          <p className="hero-subtitle">افضل الوجهات المثالية</p>
         
          <button className="explore-button">
            استكشف المزيد<img src={back} alt="" /></button>
         
        </div>
        <div className="carousel-container">
          {images.map((image, index) => (
            <div key={index} className={`image-wrapper ${index === currentIndex ? 'active' : ''}`}>
              <img className="hero-image" src={image.src} alt={image.alt} />
           
            </div>
          ))}
          <div className="dots-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroSection;
