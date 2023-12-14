import { RegisterForm } from "../../components/registerForm";
import { RegisterHeader } from "../../components/registerHeader";
import { StyledContainer } from "../../styles/container";
import { StyledMain } from "./style";

export const RegisterPage = () => {
  return (
    <StyledContainer>
      <RegisterHeader/>
      <StyledMain>
        <RegisterForm />
      </StyledMain>
    </StyledContainer>
  )
};