// 05 useState in form
// import React, { useState } from 'react';
// import './App.css';

// function App() {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

// const onSubmit = (event) => {
// // alert('Submitted !');
// event.preVentDefault();
// console.log(username, password);
// };

// return (
// <div className='App'>
// <input placeholder='UserName'
// value={username}
// onChange={(e) => setUsername(e.target.value)}
// /><br />
// <input placeholder='PassWord'
// value={password}
// onChange={(e) => setPassword(e.target.value)}/><br />
// <button onClick={onSubmit} >LogIn</button>
// </div>
// )
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

#

code

```bash

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


```

<p> For some reason, we use this count table. 
    I want to use one more count button. 
    What should I odn in that case? In that case, I create one more useState and count1, setCount1 .  inital valu is 0. and our function uses increment1. 
</p>

`code`

```js
// 07/30 Eliminate repetition with components
// create components folder in src and then create Counter.js file/component

import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Cruella Coder</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```

# 08- Sending data to child components Props!

```javascript
// 07/30 Eliminate repetition with components
// create componeclickHandler
// Let’s learn how to send data from a parent component to a child component.

import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [buttonName, setButtonName] = useState("clickB:");
  const clickHandler = () => {
    setButtonName("Klicka 😃");
  };
  return (
    <div className="App">
      <h1>Cruella Coder</h1>
      <Counter click="clickA:" />
      <Counter click={buttonName} />
      <Counter />
      <button onClick={clickHandler}>clickB</button>
    </div>
  );
}

export default App;
```
