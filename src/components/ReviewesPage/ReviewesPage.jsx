import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dateFormat, { masks } from 'dateformat';
import { getMovieReviews } from '../../services/api';
import {
  List,
  Item,
  Image,
  ImageWrap,
  InfoRew,
  Text,
  Name,
  NoRew,
  ReviewWrap,
} from './ReviewesPage.styled';

masks.hammerTime = 'dd mmmm yyyy';

function ReviewesPage() {
  const [rewiewResult, setRewiewResult] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      const results = await getMovieReviews(movieId);
      setRewiewResult(results.results);
    };
    getReviews();
  }, [movieId]);

  if (!rewiewResult) return;

  return (
    <>
      {rewiewResult.length > 0 ? (
        <List>
          {rewiewResult.map(
            ({ id, author, content, author_details, created_at }) => {
              return (
                <Item key={id}>
                  <ImageWrap>
                    {!author_details.avatar_path && (
                      <Image
                        src={`https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png`}
                        alt={author}
                        width="100"
                        height="100"
                      />
                    )}
                    {author_details.avatar_path && (
                      <Image
                        src={`https://image.tmdb.org/t/p/original${author_details.avatar_path}`}
                        alt={author}
                        width="100"
                        height="100"
                      />
                    )}
                    <Name>{author}</Name>
                  </ImageWrap>
                  <ReviewWrap>
                    <Text>
                      <InfoRew>Review:</InfoRew> {content}
                    </Text>
                    <Text>
                      <InfoRew>Rating:</InfoRew> {author_details.rating}
                    </Text>
                    <Text>
                      <InfoRew>Created:</InfoRew>{' '}
                      {dateFormat(`${created_at}`, 'hammerTime')}
                    </Text>
                  </ReviewWrap>
                </Item>
              );
            }
          )}
        </List>
      ) : (
        <div>
          <NoRew>We don't have any reviews for this movie.</NoRew>
        </div>
      )}
    </>
  );
}

export default ReviewesPage;
