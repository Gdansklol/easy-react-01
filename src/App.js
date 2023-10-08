// 07/30 Eliminate repetition with components
// create components folder in src and then create Counter.js file/component

import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
  

function App() {

  return (
  <div className='App' >
    <h1>Cruella Coder</h1>
    <Counter />
    <Counter />
    <Counter />
  </div>
  );
};

export default App
