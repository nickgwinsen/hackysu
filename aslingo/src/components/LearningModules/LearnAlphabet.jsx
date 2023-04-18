import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Letters } from '../../config/config';
import Webcam from "react-webcam";
import { toast } from 'react-toastify';


import VideoPlayer from "./VideoPlayer";
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
    const [capturedImage, setCapturedImage] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [finished, setFinished] = useState(false);
    const videoRef = useRef(null);

    const handleCheck = async () => {
        const response = await fetch(capturedImage);
        const blob = await response.blob();
      
        const formData = new FormData();
        formData.append('file', blob);
      
        try {
          const response = await fetch('http://localhost:8000/image', {
            method: 'POST',
            body: formData,
          });
          const result = await response.json();
          console.log(result);

          if (result["status"] === "failure") {
            toast.error('Please use a hand!', { autoClose: 2000 });
            handleRetake()
          } else if (result["predicted_letter"] === Letters[currentLetterIndex].letter) {
            handleSuccess(result["predicted_letter"])
          } else if (result["predicted_letter"] !== Letters[currentLetterIndex].letter) {
            toast.error('Incorrect! Please try again.', { autoClose: 2000 })
            handleRetake()
          }

        } catch (error) {
          toast.error('Please only use one hand!', { autoClose: 2000 });
          handleRetake()
        }
      };

      const handleSuccess = (result) => {
        setSuccess(true)
        toast.success('Correct! Good Job!', { autoClose: 2000 });
      }

    const handleContinue = () => {
      console.log(currentLetterIndex)
      console.log(Letters.length - 1)
        if (currentLetterIndex !== Letters.length - 1 ) {
            nextLetter()
            setCapturedImage(null)
            setIsChecked(false)
            setSuccess(false)
            handleRetake()
        } else {
            setFinished(true)
            localStorage.setItem('isLearning', 'false');
        }
    }

    const nextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % Letters.length);
      };

    const handleRetake = () => {
        setCapturedImage(null)
        setSuccess(false)
        setIsChecked(false)
    }



    const videoConstraints = {
        width: 960,
        height: 540,
        facingMode: "user"
    };

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc)
            setCapturedImage(imageSrc)
        },
        [webcamRef]
    );

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
                {!capturedImage &&
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
                        <a onClick={capture}><FontAwesomeIcon icon={faCamera} size="xl"/></a>
                    </CameraView>
                )} 
                {capturedImage &&
                !finished && (
                    <CameraView>
                        <CapturedImage src={capturedImage}/>
                        {!success && (
                            <a onClick={handleRetake}>Retake</a>
                        )}
                    </CameraView>
                )}
                    <BottomDiv>
                        {!isChecked &&
                        capturedImage &&
                        !finished &&
                        !success && (
                            <a onClick={handleCheck}>Check</a>
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