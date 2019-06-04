import styled, { keyframes } from 'styled-components';

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const Pulse = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px auto;
  animation: ${scaleOut} 1s ease-in-out infinite;
  background-color: tomato;
  border-radius: 100%;
`;

export default Pulse;
