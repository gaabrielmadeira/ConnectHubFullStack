import styled from "styled-components";
import InputMask from 'react-input-mask';

export const StyledInput = styled.input`
  background: none;
  width: 100%;
  height: 35px;
  border: none;
  color: var(--color-primary);
`;

export const StyledInputMask = styled(InputMask)`
  ${StyledInput}
`;

export const StyledInputLogin = styled.input`
  background: var(--color-grey-1);
  
  width: 100%;
  height: 40px;
  padding: 10px;
  
  color: var(--color-primary);
`