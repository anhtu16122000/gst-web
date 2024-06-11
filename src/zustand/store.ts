import { TAccount } from "@/types/entity.type";
import { create } from "zustand";
type TMySelfState = {
  data: TAccount;
};
export const useMySelf = create<TMySelfState>()((set) => ({
  data: {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    registeredBy: "",
    // type: "",
    refreshToken: "",
    deletedAt: "",
    customer: "",
    addressOfAccount: [],
  },
}));
