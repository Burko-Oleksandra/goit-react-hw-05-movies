import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import NotificationWarning from 'components/NotificationWarning';
import { getSearchedMovies } from '../../services/api';
import { TitleSearch } from './MoviesPage.styled';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get('filter') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getSearchedMovies(filterParams);
      setMovies(results);
      if (!results.length) NotificationWarning();
    };
    if (filterParams) getMovies();
  }, [filterParams]);

  function changeFilter(value) {
    setSearchParams(value !== '' ? { filter: value } : {});
  }

  return (
    <>
      <SearchBar onChange={changeFilter} />
      {!filterParams && (
        <TitleSearch>
          Please enter the name of the movie in the searchbar
        </TitleSearch>
      )}
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
