# 09 Conditional Rendering

```javascript
// 09/30 conditional rendring with toogle button true or false

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderConditon = condition ? <div>True</div> : <div>False</div>;
  return (
    <div className="App">
      <h1>Cruella Coder</h1>
      {renderConditon}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
```
