// src/component/HoursCounter.jsx
import React from 'react';

const HoursCounter = ({ hours }) => {
  return (
    <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
      <h1>{hours}</h1>
    </div>
  );
};

export default HoursCounter;
