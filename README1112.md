
# 11- Review of sending component and props data

create Movie.js component in components folder 


```bash
// version 1

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

```

```bash

// version 2 Movie.js

import React from 'react';

const Movie = ({movie}) => {
    return(
        <div className='movie' >
          <div className='movie-title'>{movie.title}</div>
          <div className='movie-year'>{movie.year}</div>
        </div>
    );

};

export default Movie;

```

# 12 - Creating a movie list addition form 1

1. In order for components to be rendered, use state structures and use effects rather 
   than arrays.


2. Let's put the movie array inside the usestate.


`code`

version 1

```bash

//*** / 12/30  
// Creating a movie list addition form 1

import React,{useState, useEffect} from 'react';
import Movie from './components/Movie';

function App() {
  const [movieTitle, setMovieTitle] =useState('');
  const [movieYear, setMovieYear] =useState('');
  const [movies, setMovies] = useState([
    {title: 'No Hard Feelings1', year:2020},
    {title: 'No Hard Feelings2', year:2021},
    {title: 'No Hard Feelings3', year:2022},
    {title: 'No Hard Feelings4', year:2023},
  ]);

  useEffect(()=>{
    console.log('rendering for state change')
  });

   const renderMovies = movies.map(movie => {
      return (
        <Movie movie={movie} key={movie.title}/>
      );
   });

   const addMovie = (event) => {
    event.preventDefault();
    // console.log(movieTitle, movieYear);

    setMovies([{
      title: movieTitle,
      year: movieYear,
    }])

    # movies.push({
    #   title: movieTitle,
    #   year: movieYear,
    # })
   };
  
  return (
    <div className='App'>
      <h1>Movie List </h1>
      <form onSubmit={addMovie}>
        <input
        type='text' 
        value={movieTitle}
        placeholder='movie title'
        onChange={e=>setMovieTitle(e.target.value)}/>
        <br/>
        <input
        type='text' 
        value={movieYear}
        placeholder='movie year'
        onChange={e=>setMovieYear(e.target.value)}/>
        <br/>
        <button type='submit'>Add movie</button>
      </form>
      {renderMovies}
    </div>
  )
}

export default App;

```

###  destructuring assignment , ...movies

//*** / 12/30  
// Creating a movie list addition form 1

import React,{useState, useEffect} from 'react';
import Movie from './components/Movie';

function App() {
  const [movieTitle, setMovieTitle] =useState('');
  const [movieYear, setMovieYear] =useState('');
  const [movies, setMovies] = useState([
    {title: 'No Hard Feelings1', year:2020},
    {title: 'No Hard Feelings2', year:2021},
    {title: 'No Hard Feelings3', year:2022},
    {title: 'No Hard Feelings4', year:2023},
  ]);

  useEffect(()=>{
    console.log('rendering for state change')
  });

   const renderMovies = movies.map(movie => {
      return (
        <Movie movie={movie} key={movie.title}/>
      );
   });

   const addMovie = (event) => {
    event.preventDefault();
    // console.log(movieTitle, movieYear);

    setMovies([
      ...movies,{
      title: movieTitle,
      year:  movieYear,
    }]);

    // reset for input filds empty 
    setMovieTitle('');
    setMovieYear('')

    // movies.push({
    //   title: movieTitle,
    //   year: movieYear,
    // })
   };
  
  return (
    <div className='App'>
      <h1>Movie List </h1>
      <form onSubmit={addMovie}>
        <input
        type='text' 
        value={movieTitle}
        placeholder='movie title'
        onChange={e=>setMovieTitle(e.target.value)}/>
        <br/>
        <input
        type='text' 
        value={movieYear}
        placeholder='movie year'
        onChange={e=>setMovieYear(e.target.value)}/>
        <br/>
        <button type='submit'>Add movie</button>
      </form>
      {renderMovies}
    </div>
  )
}

export default App;
