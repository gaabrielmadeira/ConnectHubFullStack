import { styled, css } from "styled-components";

interface ItitleOneProps {
  titleStyle: "large" | "small"
}

export const titleOne = css<ItitleOneProps>`
  font-family: var(--font-secundary);
  font-weight: var(--font-weight-1);
  ${({ titleStyle }) => {
    switch (titleStyle) {
      case "large":
        return css`
          font-size: clamp(var(--font-size-5), 100%, var(--font-size-2));
          color: var(--color-white);
        `
      case "small":
        return css`
          font-size: clamp(var(--font-size-7), 100%, var(--font-size-4));
          color: var(--font-grey-3);
        `
    }
  }}
`;

export const StyledTitleOne = styled.h1<ItitleOneProps>`
  ${titleOne}
`

export const StyledSloganTitlte = styled.h2<ItitleOneProps>`
  ${titleOne}
`

export const StyledEmptyTitle = styled.h2<ItitleOneProps>`
  ${titleOne}
`

interface ItitleTwoProps {
  titleStyle: "regular" | "bold"
}

export const titleTwo = css<ItitleTwoProps>`
  font-size: clamp(var(--font-size-7), 3vw, var(--font-size-4));
  font-family: var(--font-primary);
   ${({ titleStyle }) => {
    switch (titleStyle) {
      case "regular":
        return css`
            color: var(--color-white);
            font-weight: var(--font-weight-3);
          `
      case "bold":
        return css`
            color: var(--color-primary);
            font-weight: var(--font-weight-1);
          `
    }
  }}
`;

export const StyledClientTitle = styled.h3<ItitleTwoProps>`
  ${titleTwo}
`

interface IstyledLabelProps {
  color?: "register"
}

export const StyledLabel = styled.label<IstyledLabelProps>`
  font-size: var(--font-size-8);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-4);
  ${({ color }) => {
    switch (color) {
      case "register":
        return css`
          color: var(--color-grey-3);
        `
      default:
        return css`
          color: var(--color-white);
        `
    }
  }
  }
`;

export const StyledMessageErrors = styled.p`
  font-size: var(--font-size-8);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-3);
  color: var(--color-error-alert);
`

export const StyledTextOne = styled.p`
font-size: clamp(var(--font-size-8), 2vw, var(--font-size-6));
font-family: var(--font-primary);
font-weight: var(--font-weight-3);
color: var(--color-white);
`;

export const StyledTextTwo = styled.p`
font-size: clamp(var(--font-size-7, 3vw, var(--font-size-5)));
font-family: var(--font-primary);
font-weight: var(--font-weight-2);
color: var(--color-primary);
`;