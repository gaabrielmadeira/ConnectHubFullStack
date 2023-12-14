import { useContext } from "react"
import { ContactContext } from "../../../providers/contactContext/contactContext"
import { StyledCard, StyledIcons, StyledInfosContacts, StyledInfosDiv } from "./style";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { StyledTextTwo, StyledTextOne } from "../../../styles/typography";

export const ContactSectionCards = () => {
  const {
    contacts,
    openModalEdit,
    openModalConfirm
  } = useContext(ContactContext);

  return (

    <>
      {
        contacts.map((contact) => (
          <StyledCard key={contact.id}>
            <StyledInfosDiv>
              <StyledInfosContacts>
                <StyledTextTwo>Nome: </StyledTextTwo>
                <StyledTextOne>
                  {contact.name}
                </StyledTextOne>
              </StyledInfosContacts>
              <StyledInfosContacts>
                <StyledTextTwo>Email: </StyledTextTwo>
                <StyledTextOne>
                  {contact.email}
                </StyledTextOne>
              </StyledInfosContacts>
              <StyledInfosContacts>
                <StyledTextTwo>Telefones: </StyledTextTwo>
                <ul>
                  {contact.telephone.map((telephone, index) => (
                    <li key={index}>
                      <StyledTextOne>
                        {telephone}
                      </StyledTextOne>
                    </li>
                  ))}
                </ul>
              </StyledInfosContacts>
            </StyledInfosDiv>
            <StyledIcons>
              <button onClick={() => openModalConfirm(contact.id)}>
                <FaTrash style={{
                  color: "var(--color-primary)"
                }} />
              </button>

              <button onClick={() => openModalEdit(contact.id)}>
                <FaPencil style={{
                  color: "var(--color-primary)"
                }} />
              </button>
            </StyledIcons>

          </StyledCard>
        ))
      }
    </>

  )
}