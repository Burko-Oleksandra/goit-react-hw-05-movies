import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { CgHome } from 'react-icons/cg';
import { MdOutlineLocalMovies } from 'react-icons/md';

import { HeaderWrap, Navigation, NavWrap, Pages } from './Header.styled';

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <BiCameraMovie size="5em" color="#483d8b" />
      </Link>
      <Navigation>
        <Link to="/">
          <NavWrap>
            <CgHome size="2em" color="#483d8b" />
            <Pages>Home</Pages>
          </NavWrap>
        </Link>
        <Link to="/movies">
          <NavWrap>
            <MdOutlineLocalMovies size="2em" color="#483d8b" />
            <Pages>Movies</Pages>
          </NavWrap>
        </Link>
      </Navigation>
    </HeaderWrap>
  );
}

export default Header;
