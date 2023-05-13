import React, { useState } from "react";
import styled from "styled-components";

// Components
import Landing from './pages/Landing';
import About from "./pages/About";
import Why from "./pages/Why";


export const Main = styled.main`

  margin: 100px auto;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;

`

const Layout = () => {
    return (
        <>
            <Landing />
            <About />
            <Why />
        </>

    )
}

export default Layout