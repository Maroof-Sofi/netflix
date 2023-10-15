import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    movies.nowPlayingMovies &&(

      <div className='bg-black'>
        <div className='-mt-50 pl-12 relative z-20'>
     <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList  title={"Trending"} movies={movies.nowPlayingMovies}/>
     <MovieList  title={"Popular"} movies={movies.popularMovies}/>
     <MovieList  title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
     <MovieList  title={"Horro Movies"} movies={movies.nowPlayingMovies}/>
        </div>
      {/* 
       MovieList 
       -Popular
       -Trending
       -Now Playing
       -Horro
       -Comedy
       -Romantic
      */}
    </div>
      )
  );
};

export default SecondaryContainer