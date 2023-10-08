



# 11- Review of sending component and props data

create Movie.js component in components folder 


```bash

import React from 'react';

const Movie = (props) => {
    return(
        <div className='movie' >
          <div className='movie-title'>{props.movie.title}</div>
          <div className='movie-year'>{props.movie.year}</div>
        </div>
    );

};

export default Movie;


import React from 'react';
import Movie from './components/Movie';

function App() {
  const movies = [
    {title: 'No Hard Feelings1', year:2020},
    {title: 'No Hard Feelings2', year:2021},
    {title: 'No Hard Feelings3', year:2022},
    {title: 'No Hard Feelings4', year:2023},
  ];

   const renderMovies = movies.map(movie => {
      return (
        <Movie movie={movie}/>
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

``````