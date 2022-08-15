import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DraggableTaskBar = styled.div`
  height: 3.2rem;

  -webkit-app-region: drag;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;
