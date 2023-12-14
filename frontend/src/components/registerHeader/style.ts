import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledTechLogoHeader = styled.img`
  width: clamp(150px, 20vw, 350px);
  height: 70px;
  margin-top: 20px;

  @media(min-width: 550px){
   margin-left: 27%;
  }
`;


