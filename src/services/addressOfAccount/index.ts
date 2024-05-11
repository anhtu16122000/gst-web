import instance, { TApiResponse } from "..";
import {
  TAddressOfAccountRes,
  TCreateAddressOfAccountReq,
  TCreateAddressOfAccountRes,
} from "./addressOfAccount.type";

const URL = "/address-of-account";

const addressOfAccountService = {
  // POST/address-of-account
  async create(data: TCreateAddressOfAccountReq) {
    return instance.post<TApiResponse<TCreateAddressOfAccountRes>>(
      `${URL}`,
      data,
    );
  },
  // GET/address-of-account/me
  async me() {
    return instance.get<TApiResponse<TAddressOfAccountRes[]>>(`${URL}/me`);
  },
  // DELETE/address-of-account/me/:id
  async meDelete(id: string) {
    return instance.delete<TApiResponse<any>>(`${URL}/me/${id}`);
  },
  // PUT/address-of-account/me/:id
  async meUpdate(id: string, data: TCreateAddressOfAccountReq) {
    return instance.put<TApiResponse<TCreateAddressOfAccountRes>>(
      `${URL}/me/${id}`,
      data,
    );
  },
};

export default addressOfAccountService;
