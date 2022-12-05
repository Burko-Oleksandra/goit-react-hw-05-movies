import axios from 'axios';

const KEY = process.env.REACT_APP_KEY;

export const getTrending = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  return data;
};

export const getSearchedMovies = async searchQuery => {
  const { data } =
    await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${KEY}&language=en-US&page=1&include_adult=false
`);
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data;
};
