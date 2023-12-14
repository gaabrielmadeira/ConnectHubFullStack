import { useEffect, useContext } from "react";
import { ClientContext } from "../../providers/clientContext/clientContext";
import { api } from "../../services/api";
import { ContactContext } from "../../providers/contactContext/contactContext";
import { jwtDecode } from "jwt-decode";
import { StyledList } from "./style";
import { ContactSectionCards } from "./contactSectionCards";
import { EmptyContactSection } from "./emptyContacts";


export const ContactSection = () => {
  const { clientToken } = useContext(ClientContext);
  const { setContacts, contacts } = useContext(ContactContext);

  useEffect(() => {
    const getContacts = async () => {
      const decodedToken = jwtDecode(clientToken!);
      const clientId = decodedToken.sub;
      try {
        const { data } = await api.get(`/clients/${clientId}/contacts`, {
          headers: {
            Authorization: `Bearer ${clientToken}`,
          },
        });
        const contactsData = data.contacts;
        setContacts(contactsData)
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
      (contacts.length === 0) ? <EmptyContactSection /> :
        <StyledList>
          <ContactSectionCards />
        </StyledList>
  );
};
