import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 49px;
  margin-top: 15px;
  cursor: pointer;
  border: 2px solid #483d8b;
  background-color: #e6e6fa;
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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

export const Icon = styled.span`
  text-align: center;
  margin-top: 5px;
`;

export const Input = styled.input`
  margin-top: 15px;
  padding: 5px;
  padding-left: 10px;
  width: 250px;
  height: 35px;
  font-size: 18px;
  border: 2px solid #483d8b;
  background-color: #e6e6fa;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: none;
  box-shadow: inset rgba(72, 61, 139, 0.6) 0 -3px 8px,
    inset rgba(72, 61, 139, 0.7) 0 3px 8px,
    rgba(72, 61, 139, 0.8) 0 3px 8px -3px;

  &:hover,
  &:focus {
    box-shadow: inset 2px 2px 5px rgba(72, 61, 139, 0.5),
      1px 1px 5px rgba(72, 61, 139, 1);
  }

  &::placeholder {
    color: #483d8b;
    font-size: 12px;
  }
`;
