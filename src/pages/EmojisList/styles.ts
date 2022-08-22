import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90%;

  display: flex;
  flex-direction: column;
`;

export const EmojisContainer = styled.div`
  overflow-y: scroll;

  ul {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;

    list-style: none;

    padding: 1rem 1rem 1rem 2rem;

    align-items: center;
    justify-content: space-between;
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 10rem;
  width: 70%;
  text-align: center;

  span {
    font-size: 1.4rem;
    color: #fff;
  }
`;
