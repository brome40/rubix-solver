import React from 'react';
import './App.css';
import { Cube } from './components/Cube.tsx';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rubik's Cube Project</h1>
        <div className='cube'>
          <Cube />
        </div>
      </header>
    </div>
  );
}

export default App;
