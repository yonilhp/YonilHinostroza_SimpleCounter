// src/component/DaysCounter.jsx
import React from 'react';

const DaysCounter = ({ days }) => {
  return (
    <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
      <h1>{days}</h1>
    </div>
  );
};

export default DaysCounter;
