// src/component/MinutesCounter.jsx
import React from 'react';

const MinutesCounter = ({ minutes }) => {
  return (
    <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
      <h1>{minutes}</h1>
    </div>
  );
};

export default MinutesCounter;
