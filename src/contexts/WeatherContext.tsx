import React from 'react';

export interface WeatherDataType {
    date: string;
    iconUrl: string;
    temperature: string;
    description: string;
    humidity: string;
    windSpeed: string;
    visibility: string;
}

export interface ForecastDataType {
    date: string;
    time: string;
    temperature: string;
    description: string;
}

interface WeatherContextType {
    currentWeatherData: WeatherDataType;
    forecastData: ForecastDataType[];
    setCurrentWeatherData: (data: WeatherDataType) => void;
    setForecastData: (data: ForecastDataType[]) => void;
}

export const WeatherContext = React.createContext<WeatherContextType>(
    {} as WeatherContextType
);
