import React from 'react';
import { Link } from 'react-router-dom';

import { Item, Title, TitleWrap } from './MovieListItem.styled';

function MovieListItem({ movie }) {
  return (
    <Item key={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
          width="250"
          height="375"
        />
        <TitleWrap>
          <Title>{movie.title || movie.name}</Title>
        </TitleWrap>
      </Link>
    </Item>
  );
}

export default MovieListItem;
