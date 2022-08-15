import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  align-items: center;

  margin-top: 3.2rem;
  padding: 0 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 3.5rem;

  background-color: #252933;
  color: #fff;

  border-radius: 0.6rem;
  border: none;

  font-size: 1.2rem;
  font-weight: 600;

  &:focus {
    outline: none;
    border-color: #a026eb;
    box-shadow: 0 0 0.4rem #a026eb;
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  margin: 0 1rem;
`;

export const SearchIcon = styled(MdSearch)``;
