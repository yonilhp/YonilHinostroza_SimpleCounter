// src/component/home.jsx
import React, { useState, useEffect } from "react";
import SecondsCounter from './secondsCounter'; // Importa el nuevo componente
import { FaClock } from 'react-icons/fa';

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (

    <div className="container text-center">
      <div className="row g-2 g-lg-3 bg-black justify-content-center">
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center ">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
			<h1>
				<FaClock/>
			</h1>
		  </div>
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
			<h1>0</h1>
		  </div>
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
		  <h1>0</h1>
		  </div>
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
		  <h1>0</h1>
		  </div>
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
		  <h1>0</h1>
		  </div>
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
		  <h1>0</h1>
		  </div>
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
		  <h1><SecondsCounter seconds={seconds}/></h1>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
