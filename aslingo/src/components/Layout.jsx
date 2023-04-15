import React from "react";
import styled from "styled-components";

// Components
import Landing from './pages/Landing';
import About from "./pages/About";
import Why from "./pages/Why";

export const Main = styled.main`

  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 100px 50px;

`

const Layout = () => {
    return(
        <Main>
            <Landing/>
            <About/>
            <Why/>
        </Main>
    )
}

export default Layout