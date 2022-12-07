import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import Header from '../Header/Header';
import { Wrapper } from './App.styled';

const Layout = lazy(() => import('../../Layout/Layout'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailPage = lazy(() =>
  import('../../pages/MovieDetailPage/MovieDetailPage.jsx')
);
const CastPage = lazy(() => import('../CastPage/CastPage.jsx'));
const ReviewesPage = lazy(() => import('../ReviewesPage/ReviewesPage.jsx'));

export const App = () => {
  return (
    <Suspense>
      <Layout>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewesPage />} />
            </Route>
          </Routes>
        </Wrapper>
      </Layout>
    </Suspense>
  );
};
