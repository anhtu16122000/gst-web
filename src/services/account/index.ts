import { AccountType } from "@/constants/enum";
import instance, { TApiResponse } from "..";
import { TMeAccount } from "./account.type";

const URL = "/account";

const accountService = {
  checkEmail: async (email: string) => {
    return instance.get<TApiResponse<any>>(`${URL}/check-email`, {
      params: { email },
    });
  },
  // POST/account/third-party-handler
  thirdPartyHandler: async (token: string) => {
    return instance.post<TApiResponse<any>>(`${URL}/third-party-handler`, {
      token: token,
    });
  },
  // POST/account/login
  async login({ username, password }: { username: string; password: string }) {
    return instance.post<
      TApiResponse<{
        accessToken: string;
      }>
    >(`${URL}/login`, {
      username,
      password,
    });
  },
  // GET/account/me
  async me() {
    return instance.get<TApiResponse<TMeAccount>>(`${URL}/me`);
  },
  // PUT/account/:id
  async edit(id: string, data: { avatar?: string; type: AccountType | "" }) {
    return instance.put<TApiResponse<TMeAccount>>(`${URL}/${id}`, data);
  },
  //POST/account/sign-up-otp
  async signUpDto(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return instance.post<TApiResponse<{ email: string }>>(
      `${URL}/sign-up-otp`,
      data,
    );
  },
  // POST/account/verify-opt
  verifyOTP(data: { otp: string; email: string }) {
    return instance.post<
      TApiResponse<{ account: TMeAccount; accessToken: string }>
    >(`${URL}/verify-opt`, data);
  },
};

export default accountService;
