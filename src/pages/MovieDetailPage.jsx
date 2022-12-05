import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/api';
// import MovieInfo from 'components/MovieInfo';

function MovieDetailPage() {
  const [selectedMovie, setselectedMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const { results } = await getMovieDetails(movieId);
      setselectedMovie(results);
    };
    getDetails();
  }, [movieId]);

  return <div></div>;
}

export default MovieDetailPage;
