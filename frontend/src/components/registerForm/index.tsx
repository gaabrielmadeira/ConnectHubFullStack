import { zodResolver } from "@hookform/resolvers/zod";
import { ClientContext } from "../../providers/clientContext/clientContext";
import { RegisterSchema, TRegisterForm } from "./registerSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { StyledFieldSet, StyledRegisterForm } from "./style";
import { StyledPrimaryButton } from "../../styles/buttons";
import { StyledLabel, StyledMessageErrors, StyledTitleOne } from "../../styles/typography";
import { StyledInput, StyledInputMask } from "../../styles/form";
import { IRegisterData } from "../../providers/clientContext/@types";


export const RegisterForm = () => {
  const { clientRegister, loading } = useContext(ClientContext);
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<TRegisterForm>({
    resolver: zodResolver(RegisterSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const submit: SubmitHandler<TRegisterForm> = (formData: TRegisterForm) => {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirm, telephone1, telephone2, ...dataRemaining } = formData;
    const telephones = [telephone1, telephone2];

    const dataToSend: IRegisterData = {
      ...dataRemaining,
      telephone: telephones
    }

    clientRegister(dataToSend);
    reset()
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submit)}>
      <StyledTitleOne titleStyle="small">Cadastro de clientes</StyledTitleOne>
      <StyledFieldSet>
        <StyledLabel color="register" htmlFor="name">Nome:</StyledLabel>
        <StyledInput type="text" disabled={loading} id="name" placeholder="Digite seu nome..." {...register("name")} />
        {errors.name && (
          <StyledMessageErrors>
            {errors.name.message}
          </StyledMessageErrors>
        )}

        <StyledLabel color="register" htmlFor="email">Email:</StyledLabel>
        <StyledInput type="email" disabled={loading} id="email" placeholder="Digite seu email..." {...register("email")} />
        {errors.email && (
          <StyledMessageErrors>
            {errors.email.message}
          </StyledMessageErrors>
        )}

        <StyledLabel color="register" htmlFor="password">Senha:</StyledLabel>
        <StyledInput type="password" disabled={loading} id="password" placeholder="Digite sua senha.." {...register("password")} />
        {errors.password && (
          <StyledMessageErrors>
            {errors.password.message}
          </StyledMessageErrors>
        )}

        <StyledLabel color="register" htmlFor="confirm">Confirmação de senha:</StyledLabel>
        <StyledInput type="password" disabled={loading} id="confirm" placeholder="Digite sua senha novamente..." {...register("confirm")} />
        {errors.confirm && (
          <StyledMessageErrors>
            {errors.confirm.message}
          </StyledMessageErrors>
        )}

        <StyledLabel color="register" htmlFor="telephone1">Telefone:</StyledLabel>
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

        <StyledLabel color="register" htmlFor="telephone2">Telefone:</StyledLabel>
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
      </StyledFieldSet>
      <StyledPrimaryButton type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </StyledPrimaryButton>
    </StyledRegisterForm>
  )
}