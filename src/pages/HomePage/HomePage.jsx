import React, { useState, useEffect } from 'react';
import { getTrending } from '../../services/api';

import MovieList from 'components/MovieList/MovieList';
import { Title, Wrapper } from './HomePage.styled';

function HomePage() {
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { results } = await getTrending();
      setSelectedMovies(results);
    };
    getTrendingMovies();
  }, []);

  return (
    <Wrapper>
      <Title>Tranding today</Title>
      <MovieList movies={selectedMovies} />
    </Wrapper>
  );
}

export default HomePage;
