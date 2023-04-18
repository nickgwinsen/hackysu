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
        font-size: 14px;
        color: black;
        border-right: 1px solid black;
        padding-right: 20px;
      }

      a {
        color: black;
        cursor: pointer;
        padding-left: 20px;
        text-decoration: none;
        transition: var(--transition);

        &:hover { 
            color: var(--main-blue)
        }
      }
     
      @media (max-width: 450px) {
        p {
            font-size: 12px;
        }
      }
      

    `


    return (
        <Footer>
            <p>Copyright &copy; FluentSign. {year} All rights reserved</p>
            <a href="https://github.com/nickgwinsen/hackysu.git" target="_blank"><FontAwesomeIcon icon={faGithub} size="xl" /></a>
        </Footer>
    )
}

export default Footer