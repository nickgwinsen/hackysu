import React from "react";
import styled from "styled-components";

const ModuleSection = styled.section`
    display: flex;
    height: 1000px;
    justify-content: center;
    
`

const ModuleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const PathBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 250px;
    width: 250px;
    border: 2px solid var(--main-gray);
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    transition: var(--transition);

    p {
        font-size: 30px;
        font-weight: 700;
    }

    &:hover {
        background-color: var(--main-light-gray)
    }

`

const MainModule = () => {

    const handleClick = () => {

    }
    return( 
        <ModuleSection>
            <ModuleBox>
                <PathBox onClick={handleClick}>
                    <p>Learn the alphabet in ASL!</p>
                </PathBox>
            </ModuleBox>
        </ModuleSection>
    )
}

export default MainModule