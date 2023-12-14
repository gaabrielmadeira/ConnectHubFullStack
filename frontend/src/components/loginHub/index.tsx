import { Link } from "react-router-dom";
import { StyledSecundaryButton } from "../../styles/buttons";
import conectHubLogo from "../../assets/conectHub.png";
import { LoginForm } from "./loginForm";
import { StyledHubContainer } from "./style";
import { StyledTextOne } from "../../styles/typography";
import { useContext } from "react";
import { SpinnerSection } from "./spinnerSection";
import { ClientContext } from "../../providers/clientContext/clientContext";

export const LoginHub = () => {
  const {loading} = useContext(ClientContext)

  return (
    <StyledHubContainer>
      <img src={conectHubLogo} alt="Logo conectHub na cor amarela" />
      <LoginForm />
      <div>
        <StyledTextOne>Não possui cadastro?</StyledTextOne>
      </div>
      <Link to={"/register"} className="Link ">
        <StyledSecundaryButton>Cadastre-se aqui</StyledSecundaryButton>
      </Link>
      {loading ? <SpinnerSection /> : null}
    </StyledHubContainer>
  )
}