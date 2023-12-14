import { Link } from "react-router-dom";
import { StyledSecundaryButton } from "../../styles/buttons";
import conectHubLogo from "../../assets/conectHub.png";
import { StyledHeader, StyledTechLogoHeader } from "./style";

export const RegisterHeader = () => {
  return (
    <StyledHeader>
      <StyledTechLogoHeader src={conectHubLogo} alt="Logo da empresa tech" />
      <Link to={"/"}>
        <StyledSecundaryButton>Login</StyledSecundaryButton>
      </Link>
    </StyledHeader>
  )
}