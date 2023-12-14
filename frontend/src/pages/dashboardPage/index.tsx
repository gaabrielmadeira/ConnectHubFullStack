import { useContext } from "react";
import { AdddContactsSection } from "../../components/addContactsSection";
import { ContactSection } from "../../components/contactsSection";
import { InfoClientSection } from "../../components/infoClientSection";
import { ContactContext } from "../../providers/contactContext/contactContext";
import { AddContactModal } from "../../components/addContactModal";
import { StyledContainer } from "../../styles/container";
import { DashboardHeader } from "../../components/dashboardHeader";
import { EditContactModal } from "../../components/editContactModal";
import { ConfirmModal } from "../../components/confirmModal";

export const DashBoardPage = () => {
  const { openAddModal, openEditModal, openConfirmModal } = useContext(ContactContext);

  return (
    <StyledContainer>
      <DashboardHeader />
      <main>
        <InfoClientSection />
        <AdddContactsSection />
        <ContactSection />
        {openAddModal ? <AddContactModal /> : null}
        {openEditModal ? <EditContactModal /> : null}
        {openConfirmModal ? <ConfirmModal /> : null}
      </main>
    </StyledContainer>
  )
};