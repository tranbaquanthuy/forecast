import React from 'react';
import './../styles/WeatherDetail.scss';
import Icon from './common/Icon';
import WindIcon from '../assets/wind.svg';
import BoldLabel from './common/BoldLabel';

interface WeatherDetailProps {
  label: string;
  value: string;
  isDisplayWindIcon?: boolean;
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({ label, value, isDisplayWindIcon }) => {
  return (
    <div className="weather-detail">
      <div>
        {label}
      </div>
      <div>
        {isDisplayWindIcon ? <Icon className="wind-icon" src={WindIcon} alt="Wind Icon" value={value} /> : <BoldLabel value={value}/>}
      </div>
    </div>
  );
};

export default WeatherDetail;
