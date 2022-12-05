import React, { useState, useEffect } from 'react';

import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
// import NotificationWarning from 'components/NotificationWarning';
import { getSearchedMovies } from '../../services/api';
import { TitleSearch } from './MoviesPage.styled';

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getSearchedMovies(searchQuery);
      setMovies(results);
    };
    if (searchQuery) getMovies();
    // if (!movies) NotificationWarning();
  }, [searchQuery]);

  function handleFormSubmit(searchQuery) {
    setSearchQuery(searchQuery);
  }

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {!!movies.length && (
        <>
          <TitleSearch>Your search results</TitleSearch>
          <MovieList movies={movies} />
        </>
      )}
    </>
  );
}

export default MoviesPage;
