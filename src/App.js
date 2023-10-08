// 10/30 

import React from 'react';

function App() {
  const movies = [
    {title: 'No Hard Feelings1', year:2020},
    {title: 'No Hard Feelings2', year:2021},
    {title: 'No Hard Feelings3', year:2022},
    {title: 'No Hard Feelings4', year:2023},
  ];

   const renderMovies = movies.map(movie => {
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
      {renderMovies}
  
    </div>
  )
}

export default App;
