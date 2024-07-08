import React from 'react';
import PropTypes from 'prop-types';
import './HeroComponent.css';

const HeroComponent = ({ backgroundImage, showSearch, children }) => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        {showSearch && (
          <div className="search-bar-container">
            <img src='src/assets/icons/search.svg' alt="Search" className="search-icon" />
            <input type="text" placeholder="اسم مؤسسة او محافظة" className="search-input" />
            <button className="search-button">
              <span>ابحث</span>
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

HeroComponent.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  showSearch: PropTypes.bool,
  children: PropTypes.node,
};

HeroComponent.defaultProps = {
  showSearch: true,
  children: null,
};

export default HeroComponent;
