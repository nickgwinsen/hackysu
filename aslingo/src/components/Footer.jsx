import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()


    const Footer = styled.footer`
      height: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      p {
        font-size: 20px;
        color: black;
        margin-right: 40px;
      }

      a {
        color: black;
        cursor: pointer;
        text-decoration: none;
        transition: var(--transition);

        &:hover { 
            color: var(--main-blue)
        }
      }

    `


    return (
        <Footer>
            <p>ASLingo {year}</p>
            <a href="https://github.com/nickgwinsen/hackysu.git" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
        </Footer>
    )
}

export default Footer