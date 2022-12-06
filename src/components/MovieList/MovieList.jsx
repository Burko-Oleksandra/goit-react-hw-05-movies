import React from 'react';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
