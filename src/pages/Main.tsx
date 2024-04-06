import React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import ForecastElement from '../components/ForecastElement';
import './../styles/Main.scss';

const Main: React.FC = () => {
  const currentWeatherData = {
    date: 'April 6, 2024',
    iconUrl: 'https://openweathermap.org/img/wn/04n@2x.png',
    temperature: '26°C',
    description: 'Broken Clouds',
    humidity: '96%',
    windSpeed: '1.54 m/s',
    visibility: '8 km',
  };

  const forecastData = [
    { date: 'April 6, 2024', time: '08:00', temperature: '25.35/25.22°C', description: 'moderate rain' },
    { date: 'April 7, 2024', time: '11:00', temperature: '25.02/24.82°C', description: 'heavy intensity rain' },
    { date: 'April 6, 2024', time: '14:00', temperature: '24.31/24.31°C', description: 'heavy intensity rain' },
    { date: 'April 7, 2024', time: '17:00', temperature: '24.02/24.02°C', description: 'moderate rain' },
    { date: 'April 8, 2024', time: '08:00', temperature: '25.24/25.24°C', description: 'broken clouds' },
  ];

  // Group forecastData by date
  const groupedForecastData: {[key: string]: any[]} = {};
  forecastData.forEach((forecast) => {
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
      <CurrentWeather {...currentWeatherData} />
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
