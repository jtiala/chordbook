import * as React from "react";
import styled, { keyframes } from "styled-components";

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
  height: 40px;
  width: 40px;
  margin: 10px auto;
  background-color: tomato;
  border-radius: 100%;
  animation: ${scaleOut} 1s ease-in-out infinite;
`;

export default Pulse;
