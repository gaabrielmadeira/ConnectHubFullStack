import { useContext, useRef, useEffect } from "react";
import { ContactContext } from "../../providers/contactContext/contactContext";
import { StyledButtonModal } from "../../styles/buttons";
import { StyledModalBox, StyledModalTitle, StyledOverlay } from "../../styles/modal";
import { StyledClientTitle } from "../../styles/typography";
import { IoCloseSharp } from "react-icons/io5";
import { EditContactFormModal } from "./editContactForm";

export const EditContactModal = () => {
  const { closeModalEdit } = useContext(ContactContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModalEdit();
      }
    };

    const handleOutClick = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (!modalRef.current?.contains(targetNode)) {
        closeModalEdit()
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
          <StyledClientTitle titleStyle="bold">Editar contato</StyledClientTitle>
          <StyledButtonModal onClick={closeModalEdit}> <IoCloseSharp style={{
            color: "var(--color-primary)",
            widht: "15px",
            height: "15px"
          }} />
          </StyledButtonModal>
        </StyledModalTitle>
        <EditContactFormModal />
      </StyledModalBox>
    </StyledOverlay>
  )
}