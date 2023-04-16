import React from "react";
import styled from "styled-components";

const FinishedSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 80px;
        font-weight: 700;

    }

    span {
        color: var(--main-blue);
    }
`

const FinishedLearning = () => {
    return(
        <FinishedSection>
            <h1>Congratulations! You have learned the <span>American Sign Language</span> Alphabet!</h1>
        </FinishedSection>
    )
}

export default FinishedLearning