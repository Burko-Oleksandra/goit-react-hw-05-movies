import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  height: 550px;
  flex-direction: column;
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

export const TitleWrap = styled.div`
  margin-top: 15px;
  padding: 10px;
`;

export const Title = styled.h4`
  color: black;
  font-size: 24px;
  margin: 0;
  width: 230px;
  text-align: center;
`;

export const ImageWrap = styled.div``;
