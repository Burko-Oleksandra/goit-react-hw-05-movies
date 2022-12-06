import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineReviews } from 'react-icons/md';

import MovieInfo from 'components/MovieListItem/MovieInfo';
import { getMovieDetails } from '../../services/api';
import { Wrap, Text } from './MovieDetailPage.styled';

function MovieDetailPage() {
  const [selectedMovie, setselectedMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      const results = await getMovieDetails(movieId);
      setselectedMovie(results);
      setGenres(results.genres);
    };
    getDetails();
  }, [movieId]);

  const handleOpenTabByName = route =>
    location.pathname.includes(route)
      ? location.pathname.replace(`/${route}`, '')
      : route;

  const movieGenres = genres.map(gene => gene.name);

  return (
    selectedMovie && (
      <>
        <MovieInfo
          poster_path={selectedMovie.poster_path}
          title={selectedMovie.title}
          name={selectedMovie.name}
          overview={selectedMovie.overview}
          genres={movieGenres.join(', ')}
          release={selectedMovie.release_date}
          runtime={selectedMovie.runtime}
          voteAverage={selectedMovie.vote_average}
        />
        <Wrap>
          <Text to={handleOpenTabByName('cast')}>
            <BsFillPeopleFill size="2em" color="#483d8b" />
            Cast
          </Text>
          <Text to={handleOpenTabByName('reviews')}>
            <MdOutlineReviews size="2em" color="#483d8b" />
            Review
          </Text>
        </Wrap>
        <Outlet />
      </>
    )
  );
}

export default MovieDetailPage;
