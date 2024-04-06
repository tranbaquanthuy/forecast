import React from 'react';
import './../styles/ForecastElement.scss';
import Icon from '../components/common/Icon';

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
      <div className="time">
        <h3>{time}</h3>
      </div>
      <div className="temperature">
        <Icon src="https://openweathermap.org/img/wn/04n@2x.png" alt="Search Icon"/>
        <p>{temperature}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ForecastElement;
