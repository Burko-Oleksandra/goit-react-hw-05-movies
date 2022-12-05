import React from 'react';
import { List } from './MovieList.styled';

import MovieListItem from 'components/MovieListItem/MovieListItem';

function MovieList({ movies }) {
  return (
    <List>
      {movies &&
        movies.map(movie => {
          return <MovieListItem key={movie.id} movie={movie} />;
        })}
    </List>
  );
}

export default MovieList;
