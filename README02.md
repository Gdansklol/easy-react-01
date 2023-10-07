### Test code for update button with javsScript code before use react hoook useState

`code`

```bash

import React from 'react';
import './App.css';

function App() {

  const onSubmit = () => {
    alert("Good! Submitted. 😂")
  };

  const onKeyUpEnter = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  }

  let text = "Pippi";

  const upDateText = () => {
    text = "Frontend Developer";
    console.log(text)
    document.getElementById('text').innerHTML=text;
  }

  return (
  <div >
    <div className='container'>Frontend Developer Pippi
      <br></br>
      <input onKeyUp={onKeyUpEnter}/>
      <button onClick={onSubmit}>
        Submit
      </button>

      <br /><br/>

    <span id='text'>{text}</span>
    <button onClick={upDateText}>Update</button>


      </div>
  </div>
  );
}
export default App;

```

# 04. react useState

> ex) _ text update button _

```bash

import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Pippi');

  const onSubmit = () => {
    alert("Good! Submitted. 😂")
  };

  const onKeyUpEnter = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  }

// let text = 'Pippi'

  const upDateText = () => {
    // text = "Frontend Developer";
    console.log(text);
    setText('Frontend Developer')
  }

  return (
  <div >
    <div className='container'>Frontend Developer Pippi
      <br></br>
      <input onKeyUp={onKeyUpEnter}/>
      <button onClick={onSubmit}>
        Submit
      </button>

      <br /><br/>

    <span>{text}</span>
    <button onClick={upDateText}>Update</button>


      </div>
  </div>
  );
}
export default App;

```

# 05 - useState in form

```bash
import React, {useState} from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const onSubmit = () => {
    alert("Good! Submitted. 😂")
  };

  console.log(userName);
  console.log(passWord);

  return (
  <div >
    <div className='container'>Fun react hook Market 😉
     <br/>
     <input
     placeholder='Username'
     value={userName}
     onChange={(e) => setUserName(e.target.value)}

     /><br />

     <input
     placeholder='Password'
     value={passWord}
     onChange={(e)=>setPassWord(e.target.value)}
      /><br/>
    <button onClick={onSubmit}>Login</button>


      </div>
  </div>
  );
}
export default App;


```

> changes with wrap <form></form>

ex) `code`

```bash
const onSubmit = (event) => {
    event.preventDefault();
    console.log(userName, passWord);
  };

```

> When the a tag or submit tag is clicked, it moves through the href or is executed by refreshing the window.

You can prevent this behavior through preventDefault.

Mainly used cases

1. When not moving to the href link even when the a tag is clicked

2. If you want to prevent a new execution even if you press the submit button in the form (submit works).

- A similar function is stopPropagation. This function prevents events from propagating to parent tags.\*

```bash
import React, {useState} from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userName, passWord);
  };

  return (
  <div >
    <form onSubmit={onSubmit}>
    <div className='container'>Fun react hook Market 😉
     <br/>
     <input
     placeholder='Username'
     value={userName}
     onChange={(e) => setUserName(e.target.value)}

     /><br />

     <input
     placeholder='Password'
     value={passWord}
     onChange={(e)=>setPassWord(e.target.value)}
      /><br/>
    <button type='submit'>Login</button>


      </div>
      </form>
  </div>
  );
}
export default App;

```

link : (https://www.youtube.com/watch?v=UFtirvA6NDU&list=PLB7CpjPWqHOuf62H44TMkMIsqfkIzcEcX&index=5)

```js
// 05 useState in form
import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    // alert('Submitted !');
    event.preVentDefault();
    console.log(username, password);
  };

  return (
    <div className="App">
      <input
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        placeholder="PassWord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={onSubmit}>LogIn</button>
    </div>
  );
}

export default App;
```
or

```bash

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

```
