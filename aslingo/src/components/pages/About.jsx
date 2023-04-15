import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;
`

const About = () => {
    return(
        <AboutSection id="about">
            <h1>About</h1>
            <p>At ASLingo, we are determined to provide the best ASL training possible. 
                Using our video capture system,<br></br>
                users will be able to receive feedback to 
                determine if they performed the correct sign.  </p>
        </AboutSection>
    )
}

export default About