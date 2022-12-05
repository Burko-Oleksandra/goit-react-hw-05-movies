import styled from '@emotion/styled';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  /* border-bottom: 5px solid #483d8b; */
  box-shadow: inset rgba(72, 61, 139, 0.6) 0 -3px 8px,
    inset rgba(72, 61, 139, 0.7) 0 3px 8px,
    rgba(72, 61, 139, 0.8) 0 3px 8px -3px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 15px;
  padding: 15px;
  text-decoration: none;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  text-decoration: none;
`;

export const Pages = styled.p`
  font-size: 36px;
  color: #483d8b;
  margin: 0;
`;
