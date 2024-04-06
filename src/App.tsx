import React from 'react';
import './App.css';
import SearchToolBar from './components/SearchToolbar';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <SearchToolBar/>
      <Main/>
    </div>
  );
}

export default App;
