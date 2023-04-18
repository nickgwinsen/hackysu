import React from "react";
import styled from "styled-components";
import {InfoContent, InfoInner, InfoSection} from "./About";





const WhySection = styled.section`
    margin: 0 auto;
    padding: 100px 0;
    

`



const Why = () => {
    return(
    <WhySection id="why">
        <InfoInner>
            <h1 style={{color: 'black'}}>Why Learn ASL?</h1>
            <InfoContent>
                    <img src="../O_fill.png"/>
                <p style={{color: 'black'}} >
                We believe that it is important for everyone to learn sign language.
                        By learning sign language, individuals can build stronger relationships 
                        with deaf and hard of hearing family members, friends, or colleagues and 
                        participate more fully in a diverse and inclusive society. Additionally, 
                        learning sign language can be a valuable asset in various career fields, 
                        such as education, social work, interpreting, and healthcare. Overall, 
                        we believe that learning sign language is a valuable and enriching experience 
                        that has numerous practical and personal benefits.
                </p>
            </InfoContent>
        </InfoInner>
    </WhySection>
    )
}

export default Why