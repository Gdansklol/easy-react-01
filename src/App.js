// 09/30 conditional rendring with toogle button true or false

import React, { useState, useEffect } from 'react';

function App() {
  const [condition, setCondition] = useState(false);
  const toogle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderCondition = condition
    ? <div>True</div>
    : <div>False</div>

  return (
    <div>
      <h1>Cruella Lee Coder </h1>
      {renderCondition }
      <button onClick={toogle}>Toggle Button True / False</button>
    </div>
  )
}

export default App;
