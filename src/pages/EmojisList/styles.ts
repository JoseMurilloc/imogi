import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90%;

  display: flex;
  flex-direction: column;
`;

export const EmojisContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 1rem 1rem 1rem 2rem;

  align-items: center;
  justify-content: space-between;

  overflow-y: scroll;
`;
