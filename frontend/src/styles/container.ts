import styled, { css } from "styled-components";

interface IContainerProps {
  page?: "login"
}

export const StyledContainer = styled.div<IContainerProps>`
  ${({page}) => {
    switch (page){
      case "login":
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          @media (min-width: 950px) {
            flex-direction: row;
            justify-content: space-evenly;
            gap: 30px;
          }
        `
    }
  }}
  max-width: 1200px;
  height: 100vh;

  margin-right: auto;
  margin-left: auto;
  padding: 0.625rem;
`