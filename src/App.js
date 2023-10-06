// 07 Eliminate repetition with components






// 05 useState in form 
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = (event) => {
//     // alert('Submitted !');
//     event.preVentDefault();
//     console.log(username, password);
//   };

//   return (
//     <div className='App'>
//       <input placeholder='UserName'
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       /><br />
//       <input placeholder='PassWord'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}/><br />
//       <button onClick={onSubmit} >LogIn</button>
//     </div>
//   )
// }

// export default App;
  

// 06 - use useEffect in form
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
 
 useEffect (()=>{
  console.log(count)
 })

  const increment = () => {
    setCount(count +1);
  }

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
}
export default App;
