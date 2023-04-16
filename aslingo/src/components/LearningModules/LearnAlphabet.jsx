import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Letters } from '../../config/config';

const LearningModule = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;

    h1 {
        font-size: 60px;
        margin-top: 0;
    }

    span {
        color: var(--main-blue);
    }
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

const LearnAlphabet = () => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [capturedImage, setCapturedImage] = useState(null);
    const videoRef = useRef(null);
    let isSpaceKeyDown = false;



    const captureImage = () => {
        if (capturedImage !== null) {
            handleRetake()
        }
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const dataURL = canvas.toDataURL('image/jpeg');

        setCapturedImage(dataURL);
        
    };

    const handleKeyDown = (event) => {
        if (event.code === 'Space') {
            isSpaceKeyDown = true;
        }
    };

    const handleKeyUp = (event) => {
        if (event.code === 'Space' && isSpaceKeyDown) {
            isSpaceKeyDown = false;
            captureImage();
        }
    };



    const nextLetter = () => {
        setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % Letters.length);
      };

    const handleRetake = () => {
        setCapturedImage(null)
        const constraints = { audio: false, video: true };

        navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        const constraints = { audio: false, video: true };
        let stream = null;
      
        navigator.mediaDevices.getUserMedia(constraints)
          .then(s => {
            stream = s;
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          })
          .catch(error => {
            console.error(error);
          });
      
        return () => {
          if (stream) {
            stream.getTracks().forEach(track => {
              track.stop();
            });
          }
        };
      }, []);
      

    return(
        <LearningModule>
            <h1>
                Sign the letter <span>{Letters[currentLetterIndex].letter}</span>
            </h1>
                {!capturedImage &&
                videoRef ? (
                    <CameraView>
                        <Video ref={videoRef} />
                        <a onClick={captureImage}><FontAwesomeIcon icon={faCamera} size="xl"/></a>
                    </CameraView>
                ) : (
                    <CameraView>
                        <CapturedImage src={capturedImage}/>
                        <a onClick={handleRetake}>Retake</a>
                    </CameraView>
                )}
        </LearningModule>
    )
}

export default LearnAlphabet