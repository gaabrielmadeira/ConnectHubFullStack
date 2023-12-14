import { useContext } from "react";
import { FaPlusCircle } from 'react-icons/fa';
import { ContactContext } from "../../providers/contactContext/contactContext";
import { StyledAddContactSection, StyledButtonAddContact } from "./styles";
import { StyledClientTitle } from "../../styles/typography";


export const AdddContactsSection = () => {
  const { openModal } = useContext(ContactContext);

  return (
    <StyledAddContactSection>
      <StyledClientTitle titleStyle="bold">Contatos:</StyledClientTitle>
      <StyledButtonAddContact>
        <StyledClientTitle titleStyle="bold">Adicionar contato</StyledClientTitle>
        <button onClick={openModal}><FaPlusCircle style={{
          color: "var(--color-primary)",
          width: "15px",
          height: "15px"
          }}/></button>
      </StyledButtonAddContact>
    </StyledAddContactSection>
  )
}