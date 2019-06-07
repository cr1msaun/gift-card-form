import styled, { createGlobalStyle } from 'styled-components/macro';
import { Row } from 'styles/primitives';
export { Normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #E5E5E5;
    font-family: 'Work Sans', sans-serif;
  }
`;

export const Container = styled(Row)`
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`;

export const Helper = styled.div`
  width: 100%;
  max-width: 450px;
  min-height: 220px;
  margin: auto 0;
`;
