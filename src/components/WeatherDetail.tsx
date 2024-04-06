import React from 'react';
import './../styles/WeatherDetail.scss';

interface WeatherDetailProps {
  label: string;
  value: string;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ label, value }) => {
  return (
    <div className="weather-detail">
      <div>
        {label}
      </div>
      <div>
        {value}
      </div>
    </div>
  );
};

export default WeatherDetail;
