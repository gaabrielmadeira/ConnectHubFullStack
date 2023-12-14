import styled from "styled-components";

export const StyledModalBoxConfirm = styled.div`
  width: clamp(300px, 50%, 450px);
  height: 250px;
  padding: 30px;

  border-radius: 0.9375rem;

  background: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledContainerYesOrNot = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`
