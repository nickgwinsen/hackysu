import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import {particlesConfig} from "../../config/particles-config";










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
        <>
        <Particles options={particlesConfig} />
        <FinishedSection>
            <h1>Congratulations! You have completed lesson one in <span>American Sign Language.</span></h1>
        </FinishedSection> </>
    )
}

export default FinishedLearning