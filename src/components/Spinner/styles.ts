import styled, { keyframes } from 'styled-components/macro';

const offset = 187;
const duration = '1.4s';

const rotator = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: ${offset};
  }

  50% {
    stroke-dashoffset: ${offset / 4};
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: ${offset};
    transform: rotate(450deg);
  }
`;

export const Wrapper = styled.svg`
  animation: ${rotator} ${duration} linear infinite;
  fill: none;
  vertical-align: middle;
`;

export const Circle = styled.circle`
  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} ${duration} ease-in-out infinite;
`;
