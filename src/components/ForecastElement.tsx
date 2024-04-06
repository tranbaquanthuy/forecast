import React from 'react';
import './../styles/ForecastElement.scss';

interface ForecastElementProps {
  time: string;
  temperature: string;
  description: string;
}

const ForecastElement: React.FC<ForecastElementProps> = ({
  time,
  temperature,
  description,
}) => {
  return (
    <div className="forecast-card">
      <div>
        <h3>{time}</h3>
      </div>
      <div>
        <p>{temperature}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ForecastElement;
