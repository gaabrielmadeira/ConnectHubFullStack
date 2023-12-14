export interface IcontactContextProps {
  children: React.ReactNode;
}

export interface IContactCreate {
  name: string;
  email: string;
  telephone: string[]
}

export interface IContacts {
  id: string;
  name: string;
  email: string;
  telephone: string[],
  createdAt: string
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  telephone?: (string | undefined)[];
}