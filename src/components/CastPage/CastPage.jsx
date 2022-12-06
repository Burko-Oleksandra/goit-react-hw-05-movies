import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';

import CastItem from './CastItem';
import { List } from './CastPage.styled';

function CastPage() {
  const [castResults, setCastResults] = useState([]);
  const [resultsId, setResultsId] = useState(undefined);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === null) return;
    const getCredits = async () => {
      const results = await getMovieCredits(movieId);
      setResultsId(results.id);
      setCastResults(results.cast);
    };
    getCredits();
  }, [movieId]);

  return (
    <>
      {resultsId !== undefined && (
        <List>
          {castResults.map(({ id, name, character, profile_path }) => {
            return (
              <CastItem
                key={id}
                actorName={name}
                character={character}
                actorPhoto={profile_path}
              />
            );
          })}
        </List>
      )}
    </>
  );
}

export default CastPage;
