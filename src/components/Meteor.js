import React from 'react';

const Meteor = ({ left, top, angle, delay, duration, theme }) => {
  const meteorStyle = {
    left: `${left}px`,
    top: `${top}%`,
    transform: `rotate(${angle}deg)`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };

  return <span className="meteor" style={meteorStyle} />;
};

export default Meteor;
