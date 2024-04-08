import React, {useContext} from 'react';
import CurrentWeather from '../components/CurrentWeather';
import ForecastElement from '../components/ForecastElement';
import './../styles/Main.scss';
import {WeatherContext} from "../contexts/WeatherContext";

const Main: React.FC = () => {
  const weatherContext = useContext(WeatherContext);

  // Group forecastData by date
  const groupedForecastData: {[key: string]: any[]} = {};
  weatherContext.forecastData.forEach((forecast) => {
    const { date, ...rest } = forecast;
    if (!groupedForecastData[date]) {
      groupedForecastData[date] = [];
    }
    groupedForecastData[date].push(rest);
  });

  const isToday = (checkDate: string) => {
    const today = new Date();
    const date = new Date(checkDate);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };


  return (
    <div className="home-page">
      <CurrentWeather {...weatherContext.currentWeatherData} />
      <div className="forecast">
        <h2>5-day Forecast (3 Hours)</h2>
        <div className='five-days-forecast-detail'>
          {Object.entries(groupedForecastData).map(([date, forecasts], index) => (
            <div key={index} className="forecast-group">
              <h2>{isToday(date) ? 'Today' : date}</h2>
              {forecasts.map((forecast: any, i: number) => (
                <ForecastElement key={i} {...forecast} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
