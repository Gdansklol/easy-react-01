// 07 Eliminate repetition with components

import React, { useEffect, useState } from 'react';
import './App.css';
  

function App() {
  const [count, setCount] = useState(0);
 
 useEffect (()=>{
  console.log(count)
 })

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count -1)
  }
 console.log('ok rendering')
  return (
  <div className='App' >
    <h1>Code with useEffect</h1>
    <button onClick={increment}>+ Increment button</button>
    <button onClick={decrement}>- Decrement button</button>
  </div>
  );
};

export default App