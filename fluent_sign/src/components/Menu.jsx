import { Helmet } from 'react-helmet';
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import useOnClickOutside from "../hooks/useOnClickOutside";
import {navLinks} from "../config/config";
import {smoothScroll} from "../hooks/smoothScroll";


const StyledMenu = styled.div`
    display: none;
    
    @media (max-width: 1100px) {
        display: block;
    }
`

const HamburgerButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
   
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 1px;
    background-color: white;
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: white;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({menuOpen}) =>
    menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({menuOpen}) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--main-blue);
    box-shadow: -10px 0px 30px -15px black;
    z-index: 9;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }
  
  
  nav {
    width: 100%;
    flex-direction: column;
    color: white;
    text-align: center;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 50px;

      @media (max-width: 600px) {
        margin: 0 auto 50px;
      }
    }

    a {
      font-size: 30px;
      color: white;
      text-decoration: none;
    }
  }

`;


const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
};

    const buttonRef = useRef(null);
    const navRef = useRef(null);

    const wrapperRef = useRef();
    useOnClickOutside(wrapperRef, () => setMenuOpen(false))

    useEffect(() => {
            if (menuOpen) {
                document.getElementById('main').classList.add('blur')
            } else {
                document.getElementById('main').classList.remove('blur')
            }
        }

    )

    return(
        <StyledMenu>
            <div ref={wrapperRef}>
                <HamburgerButton
                    onClick={toggleMenu}
                    menuOpen={menuOpen}
                    ref={buttonRef}
                    aria-label="Menu">
                    <div className="ham-box">
                        <div className="ham-box-inner" />
                    </div>
                </HamburgerButton>

                <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen}>
                    <nav ref={navRef}>
                        {navLinks && (
                            <ul>
                                {navLinks.map(({ url, name}, i) => (
                                    <li key={i}>
                                        <a href={url} onClick={(e) => {setMenuOpen(false); smoothScroll(e, url)}}>{name}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </nav>
                </StyledSidebar>
            </div>
        </StyledMenu>
    )
}

export default Menu