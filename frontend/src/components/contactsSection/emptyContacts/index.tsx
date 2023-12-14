import { useContext } from "react"
import { ContactContext } from "../../../providers/contactContext/contactContext"
import { StyledEmptySection, StyledWarningDiv } from "./style";
import { StyledEmptyTitle } from "../../../styles/typography";
import { StyledSecundaryButton } from "../../../styles/buttons";
import { BiSolidError } from "react-icons/bi";

export const EmptyContactSection = () => {
  const { openModal } = useContext(ContactContext);

  return (
    <StyledEmptySection>
      <StyledWarningDiv>
        <StyledEmptyTitle titleStyle="large">
          Você não possui contatos
        </StyledEmptyTitle>
        <BiSolidError style={{
          color: "var(--color-primary)",
          widht: "20px",
          height: "20px"
        }} />
      </StyledWarningDiv>
      <StyledSecundaryButton onClick={openModal}>Cadastrar contato</StyledSecundaryButton>
    </StyledEmptySection>
  )
}