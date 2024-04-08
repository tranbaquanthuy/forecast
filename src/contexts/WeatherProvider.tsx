import React from "react";
import {ForecastDataType, WeatherContext, WeatherDataType} from "./WeatherContext";
interface WeatherProviderProps {
    children: React.ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
    const initialCurrentWeatherData: WeatherDataType = {
        date: 'April 6, 2024',
        iconUrl: 'https://openweathermap.org/img/wn/04n@2x.png',
        temperature: '26°C',
        description: 'Broken Clouds',
        humidity: '96%',
        windSpeed: '1.54 m/s',
        visibility: '8 km',
    };

    const initialForecastData: ForecastDataType[] = [
        { date: 'April 6, 2024', time: '08:00', temperature: '25.35/25.22°C', description: 'moderate rain' },
        { date: 'April 7, 2024', time: '11:00', temperature: '25.02/24.82°C', description: 'heavy intensity rain' },
        { date: 'April 6, 2024', time: '14:00', temperature: '24.31/24.31°C', description: 'heavy intensity rain' },
        { date: 'April 7, 2024', time: '17:00', temperature: '24.02/24.02°C', description: 'moderate rain' },
        { date: 'April 8, 2024', time: '08:00', temperature: '25.24/25.24°C', description: 'broken clouds' },
    ];

    const [currentWeatherData, setCurrentWeatherData] = React.useState<WeatherDataType>(initialCurrentWeatherData);
    const [forecastData, setForecastData] = React.useState<ForecastDataType[]>(initialForecastData);

    return (
        <WeatherContext.Provider value={{ currentWeatherData, forecastData, setCurrentWeatherData, setForecastData }}>
            {children}
        </WeatherContext.Provider>
    );
};