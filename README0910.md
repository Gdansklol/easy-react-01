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

# 10 - How to use a loop using map


```bash

// 09/30 conditional rendring with toogle button true or false

import React from 'react';

function App() {
  const movies = [
    {title: 'No Hard Feelings1', year:2020},
    {title: 'No Hard Feelings2', year:2021},
    {title: 'No Hard Feelings3', year:2022},
    {title: 'No Hard Feelings4', year:2023},
  ]
  

  return (
    <div className='App'>
      <h1>Movie List </h1>
     <div className='movie'>
      <div  className='movie-title'>{movies[0].title }</div>
      <div  className='movie-year'>{movies[0].year }</div>
     </div>
     <div className='movie'>
      <div  className='movie-title'>{movies[1].title }</div>
      <div  className='movie-year'>{movies[1].year }</div>
     </div>
     <div className='movie'>
      <div  className='movie-title'>{movies[2].title }</div>
      <div  className='movie-year'>{movies[2].year }</div>
     </div>
     <div className='movie'>
      <div  className='movie-title'>{movies[3].title }</div>
      <div  className='movie-year'>{movies[3].year }</div>
     </div>
  
    </div>
  )
}

export default App;

```

## after using movies.map

`code`

```bash

// 10/30 

import React from 'react';

function App() {
  const movies = [
    {title: 'No Hard Feelings1', year:2020},
    {title: 'No Hard Feelings2', year:2021},
    {title: 'No Hard Feelings3', year:2022},
    {title: 'No Hard Feelings4', year:2023},
  ];

  const renderMovis = movies.map(movie => {
    return (
     <div className='movie' key={movie.title}>
      <div className='movie-title'>{movie.title}</div>
      <div className='movie-year'>{movie.year}</div>
     </div>
    )
  })
  

  return (
    <div className='App'>
      <h1>Movie List </h1>
     {renderMovis}
  
    </div>
  )
}

export default App;

```
