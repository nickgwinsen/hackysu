import React from "react";
import styled from "styled-components";
import Confetti from "../../config/Confetti";

const FinishedSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 80px;
        font-weight: 700;
        z-index: 150;
    }

    span {
        color: var(--main-blue);
    }
    
`








const FinishedLearning = () => {
    return(
     
         <Confetti>
            <FinishedSection>
            <h1>Congratulations! You have completed lesson one in <span>American Sign Language.</span></h1>
        </FinishedSection>
        
        </Confetti>
        
    
    )
}

export default FinishedLearning
