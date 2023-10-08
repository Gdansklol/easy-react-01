// 07/30 Eliminate repetition with components
// create componeclickHandler
// Let’s learn how to send data from a parent component to a child component.

import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
  

function App() {
  const [buttonName, setButtonName] = useState('clickB:');
  const clickHandler = () => {
    setButtonName('Klicka 😃')
  };
  return (
  <div className='App' >
    <h1>Cruella Coder</h1>
    <Counter click="clickA:" />
      <Counter click={buttonName} />
      <Counter />
      <button
        onClick={clickHandler}
      >
        clickB
      </button>
  </div>
  );
};

export default App
