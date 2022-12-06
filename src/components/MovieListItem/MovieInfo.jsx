import React from 'react';
import dateFormat, { masks } from 'dateformat';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Button,
  Wrapper,
  Overview,
  Image,
  Descr,
  Text,
  Info,
  Title,
} from './MovieInfo.styled';
import { TiArrowBack } from 'react-icons/ti';

masks.releaseTime = 'dd mmmm yyyy';

function MovieInfo({
  poster_path,
  title,
  name,
  overview,
  genres,
  release,
  runtime,
  voteAverage,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <Button type="button" onClick={() => navigate(-1)}>
        <TiArrowBack size="2em" color="#483d8b" />
      </Button>
      <Wrapper>
        {!poster_path && (
          <Image
            src={`https://static.thenounproject.com/png/70760-200.png`}
            alt={title || name}
            width="250"
            height="375"
          />
        )}
        {poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title || name}
          />
        )}
        <Info>
          <Title>{title || name}</Title>
          <Overview>{overview}</Overview>
          <Text>
            <Descr>Genres:</Descr> {genres}
          </Text>
          <Text>
            <Descr>Release:</Descr> {dateFormat(`${release}`, 'releaseTime')}
          </Text>
          <Text>
            <Descr>Runtime:</Descr> {runtime} min
          </Text>
          <Text>
            <Descr>Rating:</Descr> {voteAverage.toFixed(1)}
          </Text>
        </Info>
      </Wrapper>
    </div>
  );
}

export default MovieInfo;

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  voteAverage: PropTypes.number.isRequired,
};
