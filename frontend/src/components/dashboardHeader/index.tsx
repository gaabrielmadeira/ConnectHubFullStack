import { useContext } from "react"
import { ClientContext } from "../../providers/clientContext/clientContext"
import { Link } from "react-router-dom";
import conectHubLogo from "../../assets/conectHub.png";
import { StyledDahsboardHeader, StyledImageHeader } from "./style";
import { StyledSecundaryButton } from "../../styles/buttons";

export const DashboardHeader = () => {
  const { Logout } = useContext(ClientContext);

  return (
    <StyledDahsboardHeader>
      <StyledImageHeader  src={conectHubLogo} alt="Logo com o nome tech em amarelo" />
      <Link to={"/"}>
        <StyledSecundaryButton onClick={() => { Logout() }}>Logout</StyledSecundaryButton>
      </Link>
    </StyledDahsboardHeader>
  )
}