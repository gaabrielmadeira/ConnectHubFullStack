import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  width: clamp(14.375rem, 30vw, 43.75rem);
  height: 580px;
  margin-top: 40px;
  border-radius: 0.625rem;
  background: var(--color-grey-1);
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledFieldSet = styled.fieldset`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
