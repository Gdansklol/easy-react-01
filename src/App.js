// 07 Eliminate repetition with components

import React, { useEffect, useState } from 'react';
import './App.css';
  

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <h1> Cruella Lee </h1>
      <button onClick={increment}>Click {count}</button>
    </div>
  );
};

export default App