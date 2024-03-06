import React from 'react';
import MovieCard from './MovieCard';
import data from '../MovieData.json';

const MovieList = () => {
  return (
    <div>
      <div>
        {data.movies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )})}
      </div>
    </div>
  );
};

export default MovieList;
