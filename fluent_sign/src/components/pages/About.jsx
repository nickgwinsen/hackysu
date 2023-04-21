import React from "react";
import styled from "styled-components";


export const InfoSection = styled.section`
    margin: 0 auto;
    padding: 100px 0;
    background-color: var(--main-blue);
    padding-bottom: 200px;
    
    @media (max-width: 800px) {
        padding-bottom: 450px;
    }

    @media (max-width: 560px) {
        padding-bottom: 500px;
    }

    @media (max-width: 450px) {
        padding-bottom: 250px;
    }

    @media (max-width: 320px) {
        padding-bottom: 400px;
    }

    @media (max-width: 300px) {
        padding-bottom: 500px;
    }
`

export const InfoInner = styled.div`
      height: 100vh;
      padding: 0 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
        h1 {
        font-weight: 700;
        font-size: 120px;
        align-self: center;
        margin-bottom: 50px;
    }
    
    @media (max-width: 2500px) {
        h1 {
        font-size: 80px;
        }
    }
    
    @media (max-width: 768px) {
        padding: 0 20px;

        h1 {
        font-size: 60px;
        }
    }
    
    
    
    
    
    
      
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-around;
    align-items: center;
    margin-top: 200px;


    p {
    font-weight: 600;
    line-height: 1.3;
    font-size: 50px;
    color: white;
    max-width: 60%;
   }
   
   img{
    width: 400px;
}

    @media (max-width: 2500px) {
            p {
                font-size: 40px;
            }
            img{
                width: 400px;
             }
    
        }
        
        @media (max-width: 1800px) {
         p {
                font-size: 35px;
            }
            img{
                width: 300px;
             }
    }
    
    @media (max-width: 1280px) {
        margin-top: 100px;
    
         p {
                font-size: 28px;
            }
            img{
                width: 200px;
             }
    }
    
    @media (max-width: 800px) {
        flex-direction: column;
        margin-top: 50px;
    }
    
    @media (max-width: 768px) {
        p {
        font-size: 24px;
          
      }
    }
    
    @media (max-width: 450px) {
        p {
        font-size: 20px;
          max-width: 100%;
      }
    }
`


const About = () => {
    return(
    <InfoSection id="about">
        <InfoInner>
                <h1>About Us</h1>
                <InfoContent>
                    <p >
                        At FluentSign, we are determined to provide the best American Sign Language, ASL, training possible.
                        We are young, motivated software developers looking to make a difference in the world. We are passionate
                        about promoting communication, inclusivity, and accessibility for deaf and hard of hearing individuals.
                        Using our video capture system, users will receive feedback to determine if they performed the correct sign.
                    </p>
                        <img src="../../../ILY.png" alt="I love you sign"/>
                </InfoContent>
        </InfoInner>
    </InfoSection>
    )
}

export default About