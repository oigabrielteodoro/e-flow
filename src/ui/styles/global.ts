import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Graphik";
    src: url("/fonts/Graphik/GraphikRegular.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Graphik";
    src: url("/fonts/Graphik/GraphikMedium.otf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Graphik";
    src: url("/fonts/Graphik/GraphikSemibold.otf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Graphik";
    src: url("/fonts/Graphik/GraphikBold.otf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    scroll-behavior: smooth;
    overflow: hidden;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: 'Graphik', 'Rubik', sans-serif;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }


`
