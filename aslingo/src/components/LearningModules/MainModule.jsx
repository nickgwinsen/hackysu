import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

// Components
import LearnAlphabet from "./LearnAlphabet";
import AlphabetChart from "./AlphabetChart";



const ModuleSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 1000px;
    justify-content: center;
    align-items: center;
    
`

const ModuleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
`

const LearningModuleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
`

const PathBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 250px;
    width: 250px;
    border: 2px solid var(--main-gray);
    border-radius: 20px;
    margin: 0 20px 0 20px;
    padding: 20px;
    cursor: pointer;
    transition: var(--transition);
    background-color: #289DFF;
    color: white;

    p {
        font-size: 30px;
        font-weight: 700;
    }

    &:hover {
        background-color: var(--main-light-gray);
        color: black;
    }

`
const Button1Div styled.div`
`

const ButtonDiv = styled.div`
    margin: 0 0 0 -150px;
    display: flex;
    align-items: flex-start;
    justify-content: start;

    a {
        padding: 8px 20px;
        border: 1px solid var(--main-blue);
        border-radius: 5px;
        color: var(--main-blue);
        cursor: pointer;
        transition: var(--transition);

        &:hover {
            background-color: var(--main-blue);
            color: white;
        } 
    }

`

const BottomDiv = styled.div`
    display: flex;
    justify-content: end;
    width: 1000px;

    a {
        padding: 8px 30px;
        border: 1px solid var(--main-blue);
        border-radius: 5px;
        color: var(--main-blue);
        cursor: pointer;
        transition: var(--transition);

        &:hover {
            background-color: var(--main-blue);
            color: white;
        }
    }
`

const MainModule = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [active, setActive] = useState(false)

    const loadIsLearningFromLocalStorage = () => {
        const storedValue = localStorage.getItem('isLearning');
        return storedValue === 'true'; // Convert the stored string value to a boolean
      };

    const [isLearning, setIsLearning] = useState(loadIsLearningFromLocalStorage);

    const handleClick = () => {
        setIsLearning(true);
        localStorage.setItem('isLearning', 'true'); // Store the value as a string
        }

        const handleChartClick = () => {
            setActive(true)
        }

        const handleChartBackButton = () => {
            setIsLearning(false);
            localStorage.setItem('isLearning', 'false'); // Store the value as a string
            }

    
    const handleBackButton = () => {
        setIsLearning(false);
        localStorage.setItem('isLearning', 'false'); // Store the value as a string
        }

    return( 
        <ModuleSection>
                {!isLearning && !active && (
                <ModuleBox>
                        <ButtonDiv>
                     <Link to="/"><FontAwesomeIcon icon={faLeftLong} size="2xl" /></Link>
                        </ButtonDiv>
                    <PathBox onClick={handleClick}>
                    <p>Learn the alphabet in ASL!</p>
                    </PathBox>
                    <PathBox onClick={handleChartClick}>
                    <p>ASL Alphabet Chart</p>
                    </PathBox>
                </ModuleBox>
                )}
               {isLearning && (
                <LearningModuleBox>
                <ButtonDiv>
                    <a onClick={handleBackButton}><FontAwesomeIcon icon={faLeftLong} size="2xl" /></a>
                </ButtonDiv>
                 <LearnAlphabet/>
            </LearningModuleBox>
               )}
                {active && (
                    <AlphabetChart/>
                )}
                <BottomDiv>
                {isLearning &&
                !isChecked && (
                    <a>Check</a>
                    ) 
                }
                {isLearning &&
                isChecked && (
                    <a>Continue</a>
                    ) 
                }
                </BottomDiv>    
        </ModuleSection>
    )
}

export default MainModule