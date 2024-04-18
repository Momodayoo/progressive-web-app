# progressive-web-app
Progressive web app 1

1. npx create-react-app ./
2. delete src folder
3. create new src with index.js
4. in index.js:- 
    import React from 'react'
    import ReactDOM from 'react-dom'

    ReactDOM.render(<App/>), document.getElementById('root');

5. Add new app.js in source
    import React from 'react';

const App = () => {
  return (
    <div>
      <h1>My React App!</h1>
    </div>
  );
}

export default App;

6. Axios Fetch

   create api folder in src, create new fetchWeather.js api file 

   import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d0148764789aaba32';

const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}

export default fetchWeather;

7. import api file into App.js

8. follow all features

9. Deploy on netlify to satisfy PWA https optimization:

npm run build on terminal 

The build folder is ready to be deployed.
You may serve it with a static server:

