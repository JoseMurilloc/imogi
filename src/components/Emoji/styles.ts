import styled from 'styled-components';

export const Container = styled.input`
  width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  border-radius: 0.3rem;

  transition: background-color 400ms;

  font-size: 2.4rem;

  &:hover {
    background-color: #4a5159;
  }
`;
