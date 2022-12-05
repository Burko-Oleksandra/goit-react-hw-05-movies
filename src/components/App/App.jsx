import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import MovieDetailPage from 'pages/MovieDetailPage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import CastPage from '../CastPage';
import ReviewesPage from '../ReviewesPage';
import Layout from '../../Layout';
import Header from '../Header/Header';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailPage />} />
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewesPage />} />
        </Routes>
      </Wrapper>
    </Layout>
  );
};
