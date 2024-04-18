import React, {useState} from 'react';

import fetchWeather from './api/fetchWeather';

import './App.css';

const App = () => {

  const [query, setQuery] = useState(''); // query state

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);

      console.log(data);
    }
  }

  return (
    <div>
      <h1>My React App!</h1>
      
      <div className='main-container'>
        <input
          type='text'
          className='search'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={search}
        />
        </div>
    </div>
  );
}

export default App;