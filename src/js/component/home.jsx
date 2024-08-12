import React, { useState, useEffect } from "react";
import { FaClock } from 'react-icons/fa';
import SecondsCounter from './SecondsCounter';
import MinutesCounter from './MinutesCounter';
import HoursCounter from './HoursCounter';
import DaysCounter from './DaysCounter';

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 59) {
              setHours(prevHours => {
                if (prevHours === 23) {
                  setDays(prevDays => prevDays + 1);
                  return 0;
                }
                return prevHours + 1;
              });
              return 0;
            }
            return prevMinutes + 1;
          });
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="container text-center">
      <div className="row g-2 g-lg-3 bg-black justify-content-center">
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <div className="p-3 mt-3 mb-3 bg-dark rounded-3 text-white">
            <h1><FaClock /></h1>
          </div>
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <DaysCounter days={days} />
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <HoursCounter hours={hours} />
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <MinutesCounter minutes={minutes} />
        </div>
        <div className="col-12 col-sm-1 d-flex justify-content-center align-items-center">
          <SecondsCounter seconds={seconds} />
        </div>
      </div>
    </div>
  );
};

export default Home;
