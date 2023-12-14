import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { IContactCreate, IContactUpdate, IContacts, IcontactContextProps } from "./@types";
import { api } from "../../services/api";
import { ClientContext } from "../clientContext/clientContext";
import { toast } from "react-toastify";

interface IContactContext {
  openModal: () => void;
  closeModal: () => void;
  openModalEdit: (contactId: string) => void;
  closeModalEdit: () => void;
  openModalConfirm: (contactId: string) => void;
  closeModalConfirm: () => void;
  createContact: (formData: IContactCreate) => void;
  destroyContact: () => void;
  updateContact: (formData: IContactUpdate) => void;
  setContacts: Dispatch<SetStateAction<IContacts[]>>;
  contacts: IContacts[] | []
  openAddModal: boolean;
  openEditModal: boolean;
  openConfirmModal: boolean;
}

export const ContactContext = createContext({} as IContactContext)

export const ContactProvider = ({ children }: IcontactContextProps) => {
  const { clientToken, setLoading } = useContext(ClientContext);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [contacts, setContacts] = useState<IContacts[]>([]);

  const openModal = () => {
    setOpenAddModal(true)
  };

  const closeModal = () => {
    setOpenAddModal(false);
  };

  const openModalEdit = (contactId: string) => {
    setOpenEditModal(true)
    localStorage.setItem("@CONTACTID", contactId)
  }

  const closeModalEdit = () => {
    setOpenEditModal(false)
  }

  const openModalConfirm = (contactId: string) => {
    setOpenConfirmModal(true)
    localStorage.setItem("@CONTACTID", contactId)
  }

  const closeModalConfirm = () => {
    setOpenConfirmModal(false)
  }

  const createContact = async (formData: IContactCreate) => {
    setLoading(true)
    try {
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${clientToken}`,
        }
      })
      toast.success("Contato criado com sucesso", {
        theme: "dark",
      });
      setContacts((prevContact) => [...prevContact, data])
    } catch (error) {
      toast.error("Algo deu errado", {
        theme: "dark",
      });
    } finally {
      setLoading(false)
    }
  }

  const destroyContact = async () => {
    const contactId = localStorage.getItem("@CONTACTID")
    try {
      await api.delete(`contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${clientToken}`
        }
      })
      setContacts((prevContacts) => {
        return prevContacts.filter(contact => contact.id != contactId)
      })
      toast.success("Contato deletado com sucesso", {
        theme: "dark"
      });
    } catch (error) {
      console.log(error)
    } finally{
      closeModalConfirm()
    }
  }

  const updateContact = async (formData: IContactUpdate) => {
    const contactId = localStorage.getItem("@CONTACTID")
    try {
      const { data } = await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${clientToken}`
        }
      })

      setContacts((contacts) => {
        return contacts.map((contact) => {
          if (contact.id === contactId) {
            return { ...contact, ...data };
          }
          return contact;
        });
      });

      toast.success("Contato atualizado", {
        theme: "dark"
      })
    } catch (error) {
      toast.error("Erro ao atualizar o contato", {
        theme: "dark"
      });
    }
  }

  return (
    <ContactContext.Provider value={{
      openAddModal,
      openModal,
      closeModal,
      createContact,
      setContacts,
      contacts,
      destroyContact,
      openModalEdit,
      closeModalEdit,
      openEditModal,
      updateContact,
      openModalConfirm,
      closeModalConfirm,
      openConfirmModal
    }}>
      {children}
    </ContactContext.Provider>
  );
};