import { AccountType } from "@/constants/enum";

export type TCreateAccount = Partial<{
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  registeredBy: string;
}>;

export type TMeAccount = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  registeredBy: string;
  type?: AccountType;
  refreshToken?: string;
  deletedAt?: string;
  fullName?: string;
  customer?: string;
  tutor?: string;
};
