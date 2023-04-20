import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Letters } from '../../config/config';
import Webcam from "react-webcam";
import { toast } from 'react-toastify';

import FinishedLearning from "./FinishedLearning";

const LearningModule = styled.div`
    display: flex; 

`

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
`

const ModuleBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    height: 100%;
`

const CameraView = styled.div`
    height: 540px;
    width: 960px;
    background-color: var(--main-blue);
    border-radius: 2rem;
    border: 2px solid var(--main-blue);
    position: relative;

    a {
        background-color: rgba(255,255,255,0.8);
        position: absolute;
        border-radius: 5px;
        cursor: pointer;
        bottom: 0;
        right: 0;
        margin: 0 40px 40px 0;
        padding: 8px 20px;
        transition: var(--transition);

        &:hover {
            background-color: var(--main-gray);
        }
    }
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

const CapturedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
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
        margin-top: 20px;

        &:hover {
            background-color: var(--main-blue);
            color: white;
        }
    }

`

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;


    h1 {
      font-size: 60px;
      margin-top: 0;
  }

  img {
    height: 100px;
    margin: 0 0 20px 20px;
  }

  span {
      color: var(--main-blue);
  }
`


const LearnAlphabet = () => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [image, setImage] = useState(null)
    const [isChecked, setIsChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [finished, setFinished] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (intervalId !== null) {
          clearInterval(intervalId);
        }
        const newIntervalId = setInterval(captureAndCheck, 5000);
        setIntervalId(newIntervalId);
        return () => clearInterval(newIntervalId);
      }, [currentLetterIndex]);

    const captureAndCheck = async () => {
        if (!webcamRef.current) {
            return;
          }

        const imageSrc = webcamRef.current.getScreenshot();
        const response = await fetch(imageSrc);
        
        
        const blob = await response.blob();
        const formData = new FormData();
        formData.append('file', blob);
        console.log(Letters[currentLetterIndex].letter)
    
        try {      
            const response = await fetch('http://localhost:8000/api/v1/process/image', {
            method: 'POST',
            body: formData,
            });
            const result = await response.json();
    
            console.log(result);
    
            if (result["data"]["status"] === "failure") {
                //toast.error('Please use a hand!', { autoClose: 2000 });
            } else if (result["data"]["predicted_letter"] === Letters[currentLetterIndex].letter) {
                setImage(imageSrc)
                handleSuccess()
            } else if (result["data"]["predicted_letter"] !== Letters[currentLetterIndex].letter) {
               // toast.error(`Incorrect! You signed the letter '${result["data"]["predicted_letter"]}' Please try again.`, { autoClose: 2000 })
            }
    
        } catch (error) {
           // toast.error('Please only use one hand!', { autoClose: 2000 });
        }
        };

      const handleSuccess = () => {
        setSuccess(true)
        clearInterval(intervalId);
        setIntervalId(null)
        toast.success('Correct! Good Job!', { autoClose: 2000 });
      }

    const handleContinue = () => {
        if (currentLetterIndex !== Letters.length - 1 ) {
            setIsChecked(false)
            setSuccess(false)
            setImage(null)
            nextLetter()
            console.log(currentLetterIndex)
            handleRetake()
        } else {
            setFinished(true)
            clearInterval(intervalId);
            setIntervalId(null)
            localStorage.setItem('isLearning', 'false');
        }
    }

    const nextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1));
        clearInterval(intervalId);
        setIntervalId(null)
      };

    const handleRetake = () => {
        setSuccess(false)
        setIsChecked(false)
        setImage(null)
        clearInterval(intervalId);
        setIntervalId(null)
    }


    const videoConstraints = {
        width: 960,
        height: 540,
        facingMode: "user"
    };

    const webcamRef = React.useRef(null);

    // const capture = React.useCallback(
    //     () => {
    //         const imageSrc = webcamRef.current.getScreenshot();
    //         setCapturedImage(imageSrc)
    //     },
    //     [webcamRef]
    // );

    return(
        <LearningModule>
          {!finished && (
            <ImageWrapper>
            </ImageWrapper>
          )}
           <ModuleBox>
            {!finished && (
              <HeaderDiv> 
                <h1>
              Sign the letter <span>{Letters[currentLetterIndex].letter}</span>
                </h1>
                <img src={Letters[currentLetterIndex].url} alt={`${Letters[currentLetterIndex].letter} Letter in sign language`} />

              </HeaderDiv>
               
            )}
                {!image &&
                !finished && (
                    <CameraView>
                        <Webcam
                            audio={false}
                            height={540}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={960}
                            videoConstraints={videoConstraints}
                            style={{borderRadius: 'inherit'}}
                        />
                        {/* <a onClick={capture}><FontAwesomeIcon icon={faCamera} size="xl"/></a> */}
                    </CameraView>
                )} 
                {image &&
                !finished && (
                    <CameraView>
                        <CapturedImage src={image}/>
                        {!success && (
                            <a onClick={handleRetake}>Retake</a>
                        )}
                    </CameraView>
                )}
                    <BottomDiv>
                        {!isChecked &&
                        image &&
                        !finished &&
                        !success && (
                            <a>Check</a>
                        )}
                        {success &&
                        !finished && (
                            <a onClick={handleContinue}>Continue</a>
                        )}
                        {finished && (
                            <FinishedLearning/>
                        )}
                    </BottomDiv> 
                   </ModuleBox>   
        </LearningModule>
    )
}

export default LearnAlphabet