import { api } from "../../services/api";
import { IRegister, IRegisterData, Iclient, IclientProviderProps } from "./@types"
import { TLoginForm } from "../../components/loginHub/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

interface IclientContext {
  clientLogin: (formData: TLoginForm) => void;
  clientRegister: (formData: IRegisterData) => void;
  Logout: () => void;
  client: Iclient | null;
  clientToken: string | null;
  loading: boolean;
  setToken: Dispatch<SetStateAction<string | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const ClientContext = createContext({} as IclientContext);


export const ClientProvider = ({ children }: IclientProviderProps) => {
  const [client, setClient] = useState<Iclient | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [clientToken, setToken] = useState<string | null>(localStorage.getItem("@TOKEN"));
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("@CLIENTID");
    const AutoLogin = async () => {
      try {
        const { data } = await api.get(`/clients/${id}/contacts`, {
          headers: {
            Authorization: `Bearer ${clientToken}`,
          }
        });
        setClient(data);
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@CLIENTID");
      }
    };

    if (clientToken && id) {
      AutoLogin();
    }
  }, []);

  const clientLogin = async (formData: TLoginForm) => {
      setLoading(true)
    try {
      const { data } = await api.post("/login", formData);
      const user = data.user;
      const token = data.token
      const clientId = data.user.id;
      setClient(user);
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@CLIENTID", clientId)
      toast.success("Login realizado com sucesso", {
        theme: "dark",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha inválidos", {
        theme: "dark",
      });
      console.log(error)
    } finally{
      setLoading(false)
    }
  };

  const clientRegister = async (formData: IRegisterData) => {
    setLoading(true)
    try {
      await api.post<IRegister>("/clients", formData);
      toast.success("Cadastro realizado com sucesso", {
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      toast.error("algo deu errado", {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const Logout = () => {
    setClient(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@CLIENTID");
    localStorage.removeItem("@CONTACTID");
    setToken(null);
  };

  return (
    <ClientContext.Provider
      value={{
        clientLogin,
        clientRegister,
        client,
        clientToken,
        Logout,
        setToken,
        loading,
        setLoading
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};