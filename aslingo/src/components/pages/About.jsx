import React from "react";
import styled from "styled-components";

const AboutGrid = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0 150px 0 150px;
    flex-direction: column;
`

const AboutSection = styled.section`
    display: flex;
    align-items: center;
    height: 1000px;
    width: 100%
    position: absoulute;
    margin: 0 -150px 0 -150px;
    background-color: var(--main-blue);

    h1 {
        font-weight: 700;
        font-size: 80px;
        width: 50%;
        margin-bottom: 0;
        margin-left: 200px;
    }

`
const AboutHeader = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;


    p {
    font-weight: 600;
    line-height: 1.3;
    font-size: 35px;
    margin: 50px 50px 10px 0;
    color: white;
    max-width: 50%;
   }
`


const About = () => {
    return(
    <AboutSection id="about">
        <AboutGrid>
        <h1>About Us</h1>
            <AboutHeader>    
                <p >
                    At ASLingo, we are determined to provide the best American Sign Language, ASL, training possible. 
                    We are young, motivated software developers looking to make a difference in the world. We are passionate 
                    about promoting communication, inclusivity, and accessibility for deaf and hard of hearing individuals. 
                    Using our video capture system, users will receive feedback to determine if they performed the correct sign. 
                    In addition, the site keeps track of the users progress and ensures the user masters each sign before advancing.  
                </p>
        </AboutHeader>
        </AboutGrid>
            
    </AboutSection>
    )
}

export default About