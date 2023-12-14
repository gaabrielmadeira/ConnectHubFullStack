import styled, { keyframes } from "styled-components";
import { ImSpinner3 } from "react-icons/im";

export const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 20px;

  margin-top: 15px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledSpinnerIcon = styled(ImSpinner3 )`
  width: 25px;
  height: 25px;
  color: var(--color-primary);
  animation: ${spin} 1s linear infinite;
`;


