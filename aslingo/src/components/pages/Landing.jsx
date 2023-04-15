import React, { useState, useEffect } from "react";
import styled from 'styled-components';


import {CSSTransition, Transition, TransitionGroup} from 'react-transition-group';
import { Link } from "react-router-dom";

const LandingSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;

`

const LandingGrid = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 3fr 2fr;

`

const LandingHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 50px;

    h2 {
        font-weight: 700;
        font-size: 80px;
        margin: 50px 50px 10px 0;
    }

    span {
        font-weight: 600;
        font-size: 70px;
        color: var(--main-blue);
    }
`

const ImageDiv = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    img {
        height: 500px;
    }
    
    
`

const ButtonDiv = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        background-color: var(--main-blue);
        font-size: 32px;
        color: white;
        padding: 10px; 
        border-radius: 5px;
        cursor: pointer; 
        height: 80px;
        text-decoration: none;
        letter-spacing: 0.1em;
        width: 400px;
        text-align: center;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 4px 4px 0 rgba(0,0,0,0.8);
        transition: all 0.2s ease-in;

        &:hover {
            background-color: var(--main-blue-darker);
        }
    }

`



const Landing = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    const timeout = 1000;
    const fadeClass = 'fade';
    const fadeUpClass = 'fadeup';

    
    return(
        <LandingSection>
           
            <LandingHeader>
                <TransitionGroup component={null}>
                    {isMounted && (
                    
                        <CSSTransition classNames={fadeUpClass} timeout={timeout}>
                            <div>
                                <h2>Welcome to ASLingo</h2>
                                <span style={{ transitionDelay: "100ms" }}>Where you can learn ASL!</span>
                            </div>
                        </CSSTransition>
                       
                    )}
                </TransitionGroup>
            </LandingHeader>
            <LandingGrid>
                <ImageDiv>
                    <TransitionGroup component={null}>        
                            {isMounted && (
                                <CSSTransition classNames={fadeUpClass} timeout={timeout}>
                                    <img src="../hand_fill.png" alt="hand filled" style={{ transitionDelay: "200ms" }} />
                                </CSSTransition>
                            )}
                    </TransitionGroup>
                </ImageDiv>
                <ButtonDiv>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames={fadeUpClass} timeout={timeout}>
                                <Link to="/learn" style={{ transitionDelay: "300ms" }}>Start Learning!</Link>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </ButtonDiv>
            </LandingGrid>
        </LandingSection>     
    )
}

export default Landing