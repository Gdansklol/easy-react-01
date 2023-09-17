import React from 'react';

function App() {

  const onSubmit = () => {
    alert("Good! Submitted. 😂")
  };

  const onKeyUpEnter = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  }


  return (
    <div>Frontend Developer Pippi 
      <br></br>
      <input onKeyUp={onKeyUpEnter}/>
      <button onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
export default App;
