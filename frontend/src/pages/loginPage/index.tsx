import { LoginHub } from "../../components/loginHub";
import { SloganSection } from "../../components/sloganSection";
import { StyledContainer } from "../../styles/container";

export const LoginPage = () => {
  return (
    <StyledContainer page="login">
      <SloganSection />
      <main>
        <LoginHub />
      </main>
    </StyledContainer>
  )
};