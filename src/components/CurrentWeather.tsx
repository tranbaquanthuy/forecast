import React from 'react';
import './../styles/CurrentWeather.scss';
import WeatherDetail from './WeatherDetail';

interface CurrentWeatherProps {
  date: string;
  iconUrl: string;
  temperature: string;
  description: string;
  humidity: string;
  windSpeed: string;
  visibility: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  date,
  iconUrl,
  temperature,
  description,
  humidity,
  windSpeed,
  visibility,
}) => {
  return (
    <div className="current-weather">
      <h2>{date}</h2>
      <div className="weather-header-detail">
        <div>
          <img src={iconUrl} alt="Weather Icon" />
        </div>
        <div>
          <p>{temperature}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="weather-details">
        <WeatherDetail label="Humidity" value={humidity} />
        <WeatherDetail label="Wind Speed" value={windSpeed} />
        <WeatherDetail label="Visibility" value={visibility} />
      </div>
    </div>
  );
};

export default CurrentWeather;
