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
