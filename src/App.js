<<<<<<< HEAD
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
=======
// 05- useState, useEffect

import React,{useState,useEffect} from 'react';

function App() {
  const [count, setCount] =useState(0);
  const [cruella, setCruella] =useState(0);
  useEffect (()=>{
    console.log(count,cruella)
  },[count,cruella])

  useEffect (()=> {
    console.log('first rendreing with empty array []')
  },[])

  const increment =() => {
    setCount(count +1)
  }

  return (
    <div className='App'>
      <h1>Cruella coder</h1>
      <button onClick={increment}>Click for increment</button>
      <button onClick={()=> setCruella()}>Click 2</button>
    </div>
  );
};

export default App;








// // 05 - useEffect
// import React, {useEffect, useState} from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [test, setTest] = useState(0)
 
//  useEffect (()=>{
//   console.log(count + ", " + test)
//  },[count])

//  useEffect (()=> {
//   console.log('first rendring and no more rendring')
//  },[])
//   const increment = () => {
//     setCount(count +1);
//   }

//   const decrement = () => {
//     setTest (test -1);
//   }
//  console.log('rendering works')
//   return (
//   <div className='App' >
//     <h1>Code with useEffect</h1>
//     <button onClick={increment}>(+) Increment button</button>
//     <button onClick={decrement}>(-) Decrement button</button>
//   </div>
//   );
// }
// export default App;
>>>>>>> fe61edb (05 useState useEffect for rendring)
