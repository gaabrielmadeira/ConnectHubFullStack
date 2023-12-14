import { useContext } from "react"
import { StyledPrimaryButton } from "../../styles/buttons"
import { StyledOverlay } from "../../styles/modal"
import { StyledTextTwo } from "../../styles/typography"
import { StyledContainerYesOrNot, StyledModalBoxConfirm } from "./style"
import { ContactContext } from "../../providers/contactContext/contactContext"


export const ConfirmModal = () => {
  const { closeModalConfirm, destroyContact } = useContext(ContactContext);

  return (
    <StyledOverlay role="dialog">
      <StyledModalBoxConfirm>
        <StyledTextTwo>Tem certeza que deseja excluir este contato?</StyledTextTwo>
        <StyledContainerYesOrNot>
          <StyledPrimaryButton buttonStyle="yes" onClick={destroyContact}>Sim</StyledPrimaryButton>
          <StyledPrimaryButton buttonStyle="no" onClick={closeModalConfirm}>Não</StyledPrimaryButton>
        </StyledContainerYesOrNot>
      </StyledModalBoxConfirm>
    </StyledOverlay>
  )
}