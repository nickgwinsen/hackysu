import React from 'react';
import styled from 'styled-components';



const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    position: fixed;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
    color: white;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const HeaderDiv = styled.div`
    display: flex;
    background-color: #289DFF;
    height: 80px;
    width: 100%;
    align-items: center;
    padding: 4px;
    
    justify-content: center;

    

`

const HeaderLogo = styled.div`

display flex;
img {
 height: 50px;


}
h1 {
    color: white;
}

`




const Header = () => {



    return(
        <HeaderWrapper> 
            <HeaderDiv>
                <HeaderLogo>
                 <img src="../../publi" alt="Hand_no_Fill" />
                <h1>ASLingo</h1>
                </HeaderLogo>
            </HeaderDiv>
        </HeaderWrapper>
        )
}

export default Header