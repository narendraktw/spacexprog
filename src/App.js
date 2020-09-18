import React from 'react';
import './App.css';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">SpaceX Launch Programs</h1>
      <div className="app__body">
        <Home/>
      </div>
      <div className="app__footer">
        <h2>Developed By:</h2> Narendra Bisht
      </div>
    </div>
  );
}

export default App;
