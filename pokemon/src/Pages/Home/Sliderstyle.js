import styled, { keyframes } from "styled-components";

const carousel = keyframes`
0%, 17.5% {
      transform: translateZ(-35vw) rotateY(0);
    }
27.5%, 45% {
      transform: translateZ(-35vw) rotateY(-120deg);
    }
    55%, 72.5% {
      transform: translateZ(-35vw) rotateY(-240deg);
    }
    82.5%,
    100% {
      transform: translateZ(-35vw) rotateY(-360deg);
    }
`;

const HomeContainer = styled("section")`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TestContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40vw;
  max-width: 480px;
  max-height: 350px;
  perspective: 1000px;
  transform-origin: center;
`;
const TestContent = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: translateZ(-30vw) rotateY(0);
  animation: ${carousel} 10s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;

  &.step-animation {
    animation: ${carousel} 8s infinite steps(1) forwards;
  }
`;
const TestItem = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 60vw;
  height: 40vw;
  max-width: 380px;
  max-height: 250px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transform-origin: center;

  &:nth-child(1) {
    background: #fdd94f;
    transform: rotateY(0) translateZ(35vw);
  }

  &:nth-child(2) {
    background: #f87949;
    transform: rotateY(120deg) translateZ(35vw);
  }

  &:nth-child(3) {
    background: #fbab48;
    transform: rotateY(240deg) translateZ(35vw);
  }
`;

export { HomeContainer, TestContainer, TestContent, TestItem };
