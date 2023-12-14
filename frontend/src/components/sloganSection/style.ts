import styled from "styled-components";

export const StyledSloganSection = styled.section`
  width: 60%;
  height: 100%;

  background: var(--color-primary);
  display: none;

  @media (min-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
  }
`

export const StyledSloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`