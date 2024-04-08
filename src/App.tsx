import React from 'react';
import './App.css';
import SearchToolBar from './components/SearchToolbar';
import Main from './pages/Main';
import {WeatherProvider} from "./contexts/WeatherProvider";

function App() {
  return (
      <WeatherProvider>
        <div className="App">
          <SearchToolBar/>
          <Main/>
        </div>
      </WeatherProvider>
  );
}

export default App;
