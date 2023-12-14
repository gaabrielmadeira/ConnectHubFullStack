import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ClientContext } from "../../../providers/clientContext/clientContext";
import { StyledSecundaryButton } from "../../../styles/buttons";
import { StyledInputLogin } from "../../../styles/form";
import { StyledLabel } from "../../../styles/typography";
import { TLoginForm, LoginFormSchema } from "../loginFormSchema";
import { StyledLoginForm, StyledLoginFieldSet } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";

export const LoginForm = () => {
  const { clientLogin } = useContext(ClientContext);

  const { register, handleSubmit } = useForm<TLoginForm>({
    resolver: zodResolver(LoginFormSchema)
  })

  const submit: SubmitHandler<TLoginForm> = (formData) => {
    clientLogin(formData);
  };

  return(
    <StyledLoginForm onSubmit={handleSubmit(submit)}>

    <StyledLoginFieldSet>
      <StyledLabel htmlFor="email">Email:</StyledLabel>
      <StyledInputLogin
        type="email"
        id="email"
        placeholder="Digite seu email..."
        {...register("email")}
      />

      <StyledLabel htmlFor="password">Senha:</StyledLabel>
      <StyledInputLogin
        type="password"
        id="password"
        placeholder="Digite sua senha..."
        {...register("password")}
      />

      <StyledSecundaryButton type="submit">Login</StyledSecundaryButton>
    </StyledLoginFieldSet>
  </StyledLoginForm>
  )
}

