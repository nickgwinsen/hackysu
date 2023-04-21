import ReactConfetti from 'react-confetti';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Confetti = () => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  const FinishedSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 80px;
      font-weight: 700;
    }

    span {
      color: var(--main-blue);
    }
  `;

  return (
    <>
      <ReactConfetti width={windowDimension.width} height={windowDimension.height} />
      <FinishedSection>
        <h1>
          Congratulations! You have completed lesson one in{' '}
          <span>American Sign Language.</span>
        </h1>
      </FinishedSection>
    </>
  );
};

export default Confetti;