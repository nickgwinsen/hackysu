import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {CSSTransition, Transition, TransitionGroup} from 'react-transition-group';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { navLinks } from '../config/config';



const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    position: fixed;
    justify-content: center;
    background-color: var(--main-blue);
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
    color: white;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const HeaderDiv = styled.div`
    display: flex;
    height: 80px;
    width: 80%;
    align-items: center;
    padding: 4px;
    justify-content: center;

    

`

const HeaderLogo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: center;
    }

    img {
        margin: 0 10px 0 20px;
        height: 60px;
    }

    h1 {
        color: white;
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
`


const Header = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    const smoothScroll = (e, target) => {
        e.preventDefault();
        localStorage.setItem('isLearning', 'false');

        if (target === "#home") {
            const offsetTop = 0;
        
            window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
            });
        } else {
            const targetElement = document.querySelector(target);
            const rect = targetElement.getBoundingClientRect();
            const offsetTop = rect.top + window.pageYOffset - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
      };
    }

    const handleHome = () => {
        localStorage.setItem('isLearning', 'false');
    }

    const timeout = 2000;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome? 'fadedown' : '';

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


    return(
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
            </HeaderDiv>
        </HeaderWrapper>
        )
}

Header.propTypes = {
    isHome: PropTypes.bool
}

export default Header