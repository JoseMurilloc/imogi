import styled from 'styled-components';

interface IEmojisContainerProps {
  formattedToRenderOneLine: boolean;
}

export const Container = styled.div`
  width: 100%;
  min-height: 90%;

  display: flex;
  flex-direction: column;
`;

export const EmojisContainer = styled.div<IEmojisContainerProps>`
  overflow-y: scroll;

  ul {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;

    list-style: none;

    padding: 1rem 1rem 1rem 2rem;

    align-items: center;
    justify-content: ${({ formattedToRenderOneLine }) =>
      formattedToRenderOneLine ? 'flex-start' : 'space-between'};
  }
`;
