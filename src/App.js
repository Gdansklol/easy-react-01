// 09/30 conditional rendring with toogle button true or false

import React, { useState, useEffect } from 'react';

function App() {
  const [condition, setCondition] = useState(false);
  const toogle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderCondition = condition
    ? 'True'
    : 'False'

  return (
    <div>
      <h1>Cruella Lee Coder </h1>
      <div>
            {renderCondition}
      </div>
      <button onClick={toogle}>Toogle btn True/False</button>
    </div>
  )
}

export default App;
