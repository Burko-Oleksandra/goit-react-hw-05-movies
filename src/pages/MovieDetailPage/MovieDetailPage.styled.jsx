import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 28px;
  margin-top: 30px;
`;

export const Text = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 170px;
  text-decoration: none;
  color: #483d8b;
  box-shadow: 0 5px 5px -5px rgba(72, 61, 139, 0.6);
  margin-bottom: 20px;
`;
