//*** / 14/30  
// Creating a movie list addition form 2
// Let’s make the form into another component or remove in App.js

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
