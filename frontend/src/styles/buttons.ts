import styled, { css } from "styled-components";

interface IStyledPrimaryButtonProps {
  buttonStyle?: "yes" | "no"
}

export const StyledPrimaryButton = styled.button<IStyledPrimaryButtonProps>`
  width: clamp(9.375rem, 20vw, 31.25rem);
  height: 45px;
  background: var(--color-grey-3);
  color: var(--color-primary);
  border-radius: 0.625rem;
  padding: 0.1875rem;
  font-family: var(--font-secundary);
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-6);
  line-height: 1.628rem;

  &:hover{
    background-color: var(--color-grey-2);
  }

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "yes":
        return css`
          color: var(--color-white);
          background: var(--color-grey-2);
          flex-grow: 1;
        `
      case "no":
        return css`
          color: var(--color-white);
          background: var(--color-error-alert);
          flex-grow: 1;
          &:hover{
            background-color: var(--color-error-alert);
          }
        `
      default:
        return css`
          color: var(--color-white);
        `
    }
  }
  }
`;

export const StyledSecundaryButton = styled.button`
  color: var(--color-primary);
  font-family: var(--font-secundary);
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-6);
`;

export const StyledButtonModal = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;