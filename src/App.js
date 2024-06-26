import React, {useState} from 'react';

import fetchWeather from './api/fetchWeather';

import './App.css';

const App = () => {

  const [query, setQuery] = useState(''); // query state
  const [weather, setWeather] = useState({}); // weather state

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery('');
    }
  }

  return (
    // Main container
      <div className='main-container'>
        <input
          type='text'
          className='search'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={search}
        />
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>     
           </h2> 

           <div className="city-temp">
             {Math.round(weather.main.temp)}
             <sup>&deg;C</sup>
          </div>

          <div className="info">
            <img
              className="city-icon"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;