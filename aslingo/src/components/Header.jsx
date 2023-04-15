import React from 'react';
import styled from 'styled-components';



const HeaderWrapper = styled.header`
    margin-top: 5px;
    display: flex;
    width: 100%;
    position: fixed;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`




const Header = () => {



    return(
        <HeaderWrapper>
        </HeaderWrapper>
        )
}

export default Header