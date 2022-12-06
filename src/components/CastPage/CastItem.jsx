import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Title,
  TitleWrap,
  CharacterWrap,
  Character,
} from './CastItem.styled';

function CastItem({ actorName, character, actorPhoto }) {
  return (
    <Item>
      {!actorPhoto && (
        <img
          src={`https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png`}
          alt={actorName}
          width="200"
          height="300"
        />
      )}
      {actorPhoto && (
        <img
          src={`https://image.tmdb.org/t/p/original${actorPhoto}`}
          alt={actorName}
          width="200"
        />
      )}
      <TitleWrap>
        <Title>{actorName}</Title>
        <Character>
          <CharacterWrap>Character:</CharacterWrap> {character}
        </Character>
      </TitleWrap>
    </Item>
  );
}

export default CastItem;

CastItem.propTypes = {
  actorName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  actorPhoto: PropTypes.string,
};
