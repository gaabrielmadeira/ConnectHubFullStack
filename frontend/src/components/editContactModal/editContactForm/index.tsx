import { zodResolver } from "@hookform/resolvers/zod";
import { EditContactSchema, TEditContactForm } from "./editContactSchema";
import { useContext } from "react";
import { ClientContext } from "../../../providers/clientContext/clientContext";
import { ContactContext } from "../../../providers/contactContext/contactContext";
import { StyledPrimaryButton } from "../../../styles/buttons";
import { StyledInput, StyledInputMask } from "../../../styles/form";
import { StyledModalForm, ButtonAddContactContainer } from "../../../styles/modal";
import { StyledLabel, StyledMessageErrors } from "../../../styles/typography";
import { useForm } from "react-hook-form";
import { IContactUpdate } from "../../../providers/contactContext/@types";


export const EditContactFormModal = () => {
  const { loading } = useContext(ClientContext);
  const { updateContact } = useContext(ContactContext);
  const { closeModalEdit } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TEditContactForm>({
    resolver: zodResolver(EditContactSchema),
  });

  const submit = async (formData: TEditContactForm) => {
    const nonEmptyFields: TEditContactForm = Object.fromEntries(
      Object.entries(formData).filter(([_key, value]) => value != undefined && value != "")
    )

    const telephones = [formData.telephone1, formData.telephone2].filter(tel => tel !== "");

    const newData: IContactUpdate = {
      ...(nonEmptyFields.name && { name: nonEmptyFields.name }),
      ...(nonEmptyFields.email && { email: nonEmptyFields.email }),
      ...(telephones.length > 0 && { telephone: telephones }),
    };

    await updateContact(newData)
    reset()
    closeModalEdit()
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
          {loading ? "Atualizando..." : "Confirmar"}
        </StyledPrimaryButton>
      </ButtonAddContactContainer>
    </StyledModalForm>
  )
};
