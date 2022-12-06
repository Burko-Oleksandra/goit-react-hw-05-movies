import styled from '@emotion/styled';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 460px;
  padding: 20px;
  border: 2px solid #483d8b;
  border-radius: 8px;
  box-shadow: inset rgba(72, 61, 139, 0.6) 0 -3px 8px,
    inset rgba(72, 61, 139, 0.7) 0 3px 8px,
    rgba(72, 61, 139, 0.8) 0 3px 8px -3px;

  &:hover,
  &:focus {
    box-shadow: inset 2px 2px 5px rgba(72, 61, 139, 0.5),
      1px 1px 5px rgba(72, 61, 139, 1);
  }
`;

export const ImageWrap = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Image = styled.img`
  border: 2px solid #483d8b;
  border-radius: 8px;
`;

export const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Name = styled.h3`
  display: block;
  font-size: 28px;
  font-weight: 700;
`;

export const Text = styled.p`
  text-align: justify;
  gap: 10px;
  margin: 0;
  margin-top: 15px;
  font-size: 16px;
`;

export const InfoRew = styled.span`
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
`;

export const NoRew = styled.p`
  font-size: 36px;
  font-weight: 700;
`;
