import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 20px;
    min-width: 320px;
    font-family: serif;
  }
  a, button { cursor: pointer; text-decoration: none; color: inherit; }
`;
