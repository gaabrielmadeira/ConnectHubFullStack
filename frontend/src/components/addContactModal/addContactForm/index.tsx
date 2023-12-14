import { useContext } from "react";
import { ClientContext } from "../../../providers/clientContext/clientContext";
import { StyledInput, StyledInputMask } from "../../../styles/form";
import { ButtonAddContactContainer, StyledModalForm } from "../../../styles/modal";
import { StyledLabel, StyledMessageErrors } from "../../../styles/typography";
import { useForm } from "react-hook-form";
import { AddContactsSchema, TAddContactForm } from "./addContactsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactContext } from "../../../providers/contactContext/contactContext";
import { StyledPrimaryButton } from "../../../styles/buttons";
import { IContactCreate } from "../../../providers/contactContext/@types";

export const AddContactFormModal = () => {
  const { loading } = useContext(ClientContext);
  const { createContact } = useContext(ContactContext);
  const { closeModal } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddContactForm>({
    resolver: zodResolver(AddContactsSchema),
  });

  const submit = async (formData: TAddContactForm) => {
    const {telephone1, telephone2, ...newObject} = formData;
    const telephones = [telephone1, telephone2]

    const dataToSend: IContactCreate = {
      ...newObject,
      telephone: telephones
    }

    createContact(dataToSend)
    reset()
    closeModal()
  }

  return (
    <StyledModalForm onSubmit={handleSubmit(submit)}>

      <StyledLabel htmlFor="name">Nome:</StyledLabel>
      <StyledInput type="text" disabled={loading} id="name" placeholder="Digite seu nome..." {...register("name")} />
      {errors.name && (
        <StyledMessageErrors>
          {errors.name.message}
        </StyledMessageErrors>
      )}

      <StyledLabel htmlFor="email">Email:</StyledLabel>
      <StyledInput type="email" disabled={loading} id="email" placeholder="Digite seu email..." {...register("email")} />
      {errors.email && (
        <StyledMessageErrors>
          {errors.email.message}
        </StyledMessageErrors>
      )}

      <StyledLabel htmlFor="telephone1">Telefone:</StyledLabel>
      <StyledInputMask
        mask="(99) 9999-99999"
        maskChar="_"
        type="tel"
        id="telephone1"
        placeholder="(99) 9999-99999"
        disabled={loading}
        {...register("telephone1")}
      />
      {errors.telephone1 && (
        <StyledMessageErrors>
          {errors.telephone1.message}
        </StyledMessageErrors>
      )}

      <StyledLabel htmlFor="telephone2">Telefone:</StyledLabel>
      <StyledInputMask
        mask="(99) 9999-99999"
        maskChar="_"
        type="tel"
        id="telephone2"
        placeholder="(99) 9999-99999"
        disabled={loading}
        {...register("telephone2")}
      />
      {errors.telephone2 && (
        <StyledMessageErrors>
          {errors.telephone2.message}
        </StyledMessageErrors>
      )}
      <ButtonAddContactContainer>
        <StyledPrimaryButton type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </StyledPrimaryButton>
      </ButtonAddContactContainer>
    </StyledModalForm>
  )
};