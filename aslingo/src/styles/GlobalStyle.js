import { createGlobalStyle } from "styled-components";
import Variables from "./variables";
import { TransitionStyles } from "./TransitionStyles";

const GlobalStyle = createGlobalStyle`
${Variables}
${TransitionStyles}
`

export default GlobalStyle