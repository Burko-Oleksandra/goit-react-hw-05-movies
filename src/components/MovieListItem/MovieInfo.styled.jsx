import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  border: 2px solid #483d8b;
  background-color: #e6e6fa;
  border-radius: 8px;
  outline: none;
  box-shadow: inset rgba(72, 61, 139, 0.6) 0 -3px 8px,
    inset rgba(72, 61, 139, 0.7) 0 3px 8px,
    rgba(72, 61, 139, 0.8) 0 3px 8px -3px;

  &:hover,
  &:focus {
    box-shadow: inset 2px 2px 5px rgba(72, 61, 139, 0.5),
      1px 1px 5px rgba(72, 61, 139, 1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

export const Image = styled.img`
  display: block;
  border-radius: 8px;
  border: 2px solid #483d8b;
`;

export const Title = styled.h2`
  font-size: 56px;
  margin: 0;
  margin-bottom: 50px;
  font-weight: 900;
`;

export const Overview = styled.p`
  font-size: 30px;
  margin: 0;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Descr = styled.span`
  font-size: 18px;
  text-decoration: underline;
  font-weight: 500;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 20px;
`;
