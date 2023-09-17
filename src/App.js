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
