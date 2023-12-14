import styled from "styled-components";

export const StyledCard = styled.li`
  border-bottom: 1px solid  var(--color-primary);
  width: 100%;
  height: 150px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;


  @media (min-width: 950px) {
    width: 30%;
  }
`;

export const StyledInfosDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const StyledInfosContacts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`