import styled from "styled-components";

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);;

  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalBox = styled.div`
  width: clamp(250px, 80%, 369px);
  height: 450px;
  padding: 15px;

  border-radius: 0.9375rem;

  background: var(--color-grey-1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledModalForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`

export const StyledModalTitle = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;

  position: relative;
  display: flex;
  justify-content: center;
`

export const ButtonAddContactContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`