import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { CgHome } from 'react-icons/cg';
import { MdOutlineLocalMovies } from 'react-icons/md';

import { HeaderWrap, Navigation, NavWrap, Pages, Text } from './Header.styled';

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <BiCameraMovie size="5em" color="#483d8b" />
      </Link>
      <Navigation>
        <Text to="/">
          <NavWrap>
            <CgHome size="2em" color="#483d8b" />
            <Pages>Home</Pages>
          </NavWrap>
        </Text>
        <Text to="/movies">
          <NavWrap>
            <MdOutlineLocalMovies size="2em" color="#483d8b" />
            <Pages>Movies</Pages>
          </NavWrap>
        </Text>
      </Navigation>
    </HeaderWrap>
  );
}

export default Header;
