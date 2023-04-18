import { createGlobalStyle } from "styled-components";
import Variables from "./variables";
import { TransitionStyles } from "./TransitionStyles";

const GlobalStyle = createGlobalStyle`
${Variables}
${TransitionStyles}

header {
    filter: none !important;
}

html {
    height: 100%;
  }

body {
    min-height: 100%;
    width: 100%;
    line-height: 1.3;
    overflow-x: hidden;
    font-size: 20px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    
    @media (max-width: 480px) {
      font-size: 36;
    }
}

.blur {
    overflow: hidden;
    filter: blur(5px);
    transition: var(--transition);
}
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #272727;
}

::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    border: 3px solid #272727;
    border-radius: 10px;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px;
    font-weight: 600;
    color: black;
    line-height: 1.1;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

li {
    display: list-item;
}

`

export default GlobalStyle