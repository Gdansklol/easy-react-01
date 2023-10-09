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


