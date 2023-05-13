import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { navLinks } from '../config/config';
import { smoothScroll } from "../hooks/smoothScroll";
import Menu from "./Menu";
import { ThemeContext } from '../Contexts/ThemeContext';



const HeaderWrapper = styled.header`
    display: flex;
    position: fixed;
    background-color: var(--main-blue);
    top: 0;
    color: white;  
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    transition: var(--transition);
    width: 100%;
    height: 100px;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    
   
`

const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;

    
    @media (max-width: 768px) {
        margin: 0 20px;
    }

    

`

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;


    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    img {
        margin: 0 10px 0 0;
        width: 60px;
    }

    h1 {
        color: white;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        h1 {
            font-size: 30px;
        }
        
        img { 
            width: 50px;
        }
    }
    
    @media (max-width: 450px) {
         h1 {
            font-size: 26px;
        }
        
        img { 
            width: 40px;
        }
    }

`
const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;



    ul {
        display: flex;
    }

    li {
        list-style-type: none;
        margin-right: 100px;

    }

    a {
        display: flex;
        font-size: 20px;
        color:  var(--main-white);
        cursor: pointer; 
        text-align: center;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: var(--transition);

        &:hover {
            color: var(--main-light-gray);
        }
    }
    
    @media (max-width: 1024px) {
        a {
        font-size: 18px;
        }
        
    }
    
    @media (max-width: 768px) {
        display: none;
    }
`


const Header = ({ isHome }) => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    const [isMounted, setIsMounted] = useState(!isHome)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }, [])


    const handleHome = () => {
        localStorage.setItem('isLearning', 'false');
    }

    const timeout = 2000;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    const logo = (
        <HeaderLogo>
            {isHome ? (
                <a href="#home" onClick={(e) => smoothScroll(e, '#home')}><img src="../hand_no_fill_white.png" alt="hand_no_Fill" />
                    <h1>FluentSign</h1></a>
            ) : (
                <Link to="/" onClick={handleHome}><img src="../hand_no_fill_white.png" alt="hand_no_Fill" />
                    <h1>FluentSign</h1></Link>
            )}
        </HeaderLogo>
    )


    return (
        <HeaderWrapper>
            <HeaderDiv>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            {logo}
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <HeaderLinks>
                    <ul>
                        <TransitionGroup component={null}>
                            {isHome &&
                                isMounted &&
                                navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                                            <a href={url} onClick={(e) => smoothScroll(e, url)}>{name}</a>
                                        </li>
                                    </CSSTransition>
                                ))}
                        </TransitionGroup>
                    </ul>
                </HeaderLinks>
                <TransitionGroup component={null}>
                    {isHome &&
                        isMounted && (
                            <CSSTransition classNames={fadeDownClass} timeout={300}>
                                <Menu style={{ transitionDelay: `${isHome ? 100 : 0}ms` }} />
                            </CSSTransition>
                        )}
                </TransitionGroup>
                <button onClick={() => { toggleTheme() }}>{theme}</button>
            </HeaderDiv>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    isHome: PropTypes.bool
}

export default Header