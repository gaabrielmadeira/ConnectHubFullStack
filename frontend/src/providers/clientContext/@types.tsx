export interface IclientProviderProps {
  children: React.ReactNode;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  telephone: string[]
}

export interface IRegister {
  id: string;
  name: string;
  email: string;
  telephone: string[];
  createdAt: string;
}

export interface Iclient {
  id: string;
  name: string;
  email: string;
  telephone: string[];
}

