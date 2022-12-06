import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 200px;
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
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const Title = styled.h3`
  color: black;
  font-size: 18px;
  margin: 0;
  width: 180px;
  text-align: center;
  font-weight: 600;
`;

export const Character = styled.h3`
  text-decoration: none;
  font-weight: 600;
`;

export const CharacterWrap = styled.span`
  text-decoration: underline;
  font-weight: 800;
`;
