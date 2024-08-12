// src/component/SecondsCounter.jsx
import React from 'react';

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
      <h1>{seconds}</h1>
    </div>
  );
};

export default SecondsCounter;
