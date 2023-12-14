import { useContext, useEffect, useRef } from "react";
import { ContactContext } from "../../providers/contactContext/contactContext";
import { StyledModalBox, StyledModalTitle, StyledOverlay } from "../../styles/modal";
import { StyledClientTitle } from "../../styles/typography";
import { IoCloseSharp } from "react-icons/io5";
import { StyledButtonModal } from "../../styles/buttons";
import { AddContactFormModal } from "./addContactForm";

export const AddContactModal = () => {
  const { closeModal } = useContext(ContactContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleOutClick = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (!modalRef.current?.contains(targetNode)) {
        closeModal()
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <StyledOverlay role="dialog">
      <StyledModalBox ref={modalRef}>
        <StyledModalTitle>
          <StyledClientTitle titleStyle="bold">Cadastro de contato</StyledClientTitle>
          <StyledButtonModal onClick={closeModal}> <IoCloseSharp style={{
            color: "var(--color-primary)",
            widht: "15px",
            height: "15px"
          }} /> </StyledButtonModal>
        </StyledModalTitle>
        <AddContactFormModal />
      </StyledModalBox>
    </StyledOverlay>
  )
}