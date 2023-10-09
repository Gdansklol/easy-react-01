# 13 13 Creating a movie list addition form 2

```bash

//*** / 13/30  
// Creating a movie list addition form 2

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
      ...movies,
      {
        title: movieTitle,
      year: movieYear,
    }])
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

 // reset for empty input after add menu 

 ```bash

 //*** / 13/30  
// Creating a movie list addition form 2

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
      ...movies,
      {
        title: movieTitle,
      year: movieYear,
    }]);
    // reset for empty input after add menu 
      setMovieTitle('');
      setMovieYear('')
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

```js

//*** / 13/30  
// Creating a movie list addition form 2

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
      ...movies,
      {
        title: movieTitle,
      year: movieYear,
    }]);
    // reset for empty input after add menu 
      setMovieTitle('');
      setMovieYear('')
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





# 14 - Changing parent component state in child component

create MoviForm.js  inside components


//*** / 14/30  
// Creating a movie list addition form 2
// Let’s make the form into another component or remove in App.js

```js
App.js 

import React,{useState} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {
  // const [movieTitle, setMovieTitle] =useState('');
  // const [movieYear, setMovieYear] =useState('');
  const [movies, setMovies] = useState([
    {title: 'No Hard Feelings1', year:2020},
    {title: 'No Hard Feelings2', year:2021},
    {title: 'No Hard Feelings3', year:2022},
    {title: 'No Hard Feelings4', year:2023},
  ]);

   const renderMovies = movies.map(movie => {
      return (
        <Movie movie={movie} key={movie.title}/>
      );
   });

   // sending props , addMovie to a child component 
   const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
  ]);
    // reset for empty input after add menu 
      // setMovieTitle('');
      // setMovieYear('')
   };
  
  return (
    <div className='App'>
      <h1>Movie List </h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
    </div>
  )
}

export default App;

```

```js

MoviForm.js

// 13/30

import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] =useState('');
    const [movieYear, setMovieYear] =useState('');

    const resetForm =() =>{
        setMovieTitle('');
        setMovieYear('');
    };

     const onSubmit = (event) => {
      event.preventDefault();
      addMovie({
        title: movieTitle,
        year: movieYear,
      });
    //   setMovieTitle('');
    //   setMovieYear('')
      resetForm();
     };

    
    return (
        <form onSubmit={onSubmit}>
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
  
      
    )

};

export default MovieForm;

```





