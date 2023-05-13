import React, { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import Particles from "react-tsparticles";
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";
import GalaxyBackground from "../../config/GalaxyBackround";
import { ThemeContext } from "../../Contexts/ThemeContext";




const LandingSection = styled.section`
    margin: 0 auto;
    
    
    `
const InnerLight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;

    
`
const InnerDark = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;

    border: 2px solid black;
	border-radius: 10px;
	background-color: rgb(24, 24, 24);

    
`

const LandingGrid = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 2fr 2fr;
    
    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
    }


`

const LandingHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    

    h2 {
        font-weight: 700;
        font-size: 120px;
        margin: 100px 0 10px 0;
    }

    span {
        font-weight: 600;
        font-size: 70px;
        color: var(--main-blue);
    }
    
    @media (max-width: 1400px) {
        h2 {
            font-size: 80px;
        }
        
        span {
            font-size: 50px;
        }
    }
    
     @media (max-width: 450px) {
        margin-bottom: 100px;
        
        h2 {
            font-size: 50px;
        }
        
        span {
            font-size: 20px;
        }
    }
    
`

const ImageDiv = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    img {
        width: 500px;
    }
    
    @media (max-width: 1400px) {
        img {
            width: 300px;
        }
    }
    
    @media (max-width: 1080px) {
        img {
            width: 300px;
        }
    }
    
     @media (max-width: 450px) {
        margin-bottom: 100px;
        img {
            width: 200px;
        }
    }
    
    
    
    
`

const ButtonDiv = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        background-color: var(--main-blue);
        font-size: 40px;
        color: white;
       
        border-radius: 5px;
        cursor: pointer; 
        height: 100px;
        text-decoration: none;
        letter-spacing: 0.1em;
        width: 600px;
        text-align: center;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 4px 4px 0 rgba(0,0,0,0.8);
        transition: var(--transition);

        &:hover {
            background-color: var(--main-blue-darker);
        }
    }
    
    @media (max-width: 1400px) {
        a {
            width: 400px;
            font-size: 32px;
        }
    }
    
    @media (max-width: 1080px) {
        a {
            width: 300px;
            font-size: 24px;
        }
    }

`



const Landing = () => {
    const [isMounted, setIsMounted] = useState(false)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    const handeClick = () => {
        setIsMounted(false)
    }

    const timeout = 1000;
    const fadeClass = 'fade';
    const fadeUpClass = 'fadeup';


    return (
        <LandingSection id="home">
            <GalaxyBackground />
            {theme === 'light' ?
                <InnerLight>
                    <LandingHeader>
                        <TransitionGroup component={null}>
                            {isMounted && (
                                <CSSTransition classNames={fadeUpClass} timeout={timeout}>
                                    <div>
                                        <h2>Welcome to FluentSign</h2>
                                        <span style={{ transitionDelay: "100ms" }}>Where you can learn American Sign Language!</span>
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
                                        <img src="../hand_fill.png" alt="hand filled" />
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </ImageDiv>
                        <ButtonDiv>
                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={fadeUpClass} timeout={timeout}>
                                        <Link to="/learn" onClick={handeClick}>Start Learning!</Link>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </ButtonDiv>
                    </LandingGrid>
                </InnerLight>
                :
                <InnerDark>
                    <LandingHeader>
                        <TransitionGroup component={null}>
                            {isMounted && (
                                <CSSTransition classNames={fadeUpClass} timeout={timeout}>
                                    <div>
                                        <h2>Welcome to FluentSign</h2>
                                        <span style={{ transitionDelay: "100ms" }}>Where you can learn American Sign Language!</span>
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
                                        <img src="../hand_fill.png" alt="hand filled" />
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </ImageDiv>
                        <ButtonDiv>
                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={fadeUpClass} timeout={timeout}>
                                        <Link to="/learn" onClick={handeClick}>Start Learning!</Link>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </ButtonDiv>
                    </LandingGrid>
                </InnerDark>
            }
        </LandingSection>

    )
}

export default Landing