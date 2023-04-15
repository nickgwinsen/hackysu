import React from "react";
import  styled from 'styled-components';

const ButtonDiv = styled.div`

    a {
        background-color: #282c34;
        font-size: 20px;
        padding: 10px 60px; 
        border-radius: 5px;
        margin: 0px 10px;
        cursor: pointer;
    }
    
`

const Landing = () => {
    
    return(
        <div>
            <ButtonDiv>
                <a>Start Learning!</a>
            </ButtonDiv>
        </div>
    )
}

export default Landing