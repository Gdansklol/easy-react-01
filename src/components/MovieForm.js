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
        resetForm();
   
    //   setMovies([
    //     ...movies,{
    //     title: movieTitle,
    //     year:  movieYear,
    //   }]);
  
      // reset for input filds empty 
    //   setMovieTitle('');
    //   setMovieYear('')
  
    
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

