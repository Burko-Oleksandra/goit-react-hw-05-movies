import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Item, Title, TitleWrap, ImageWrap } from './MovieListItem.styled';

function MovieListItem({ movie }) {
  return (
    <Item key={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        <ImageWrap>
          {!movie.poster_path && (
            <img
              src={`https://static.thenounproject.com/png/70760-200.png`}
              alt={movie.title || movie.name}
              width="250"
              height="375"
            />
          )}
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              width="250"
              height="375"
            />
          )}
        </ImageWrap>
        <TitleWrap>
          <Title>{movie.title || movie.name}</Title>
        </TitleWrap>
      </Link>
    </Item>
  );
}

export default MovieListItem;

MovieListItem.propTypes = {
  movies: PropTypes.array,
};
