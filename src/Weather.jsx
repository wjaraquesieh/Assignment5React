import React, { useEffect, useState } from 'react';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = 'd2645c94bc074b3391e40a9ef20ecac0';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(data => setWeather(data));
  }, [capital]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const tempInCelsius = weather.main.temp - 273.15;

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>Temperature: {tempInCelsius.toFixed(2)} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
