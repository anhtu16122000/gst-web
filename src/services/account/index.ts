import { AccountType } from "@/constants/enum";
import { TApiResponse } from "@/types/common.type";
import { TAccount, TTutor } from "@/types/entity.type";
import instance from "..";
import { TCreateTutor, TEditCustomer, TFindTutorsParams } from "./account.type";

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
    return instance.get<TApiResponse<TAccount>>(`${URL}/me`);
  },
  // PUT/account/:id
  async edit(id: string, data: { avatar?: string; type: AccountType | "" }) {
    return instance.put<TApiResponse<TAccount>>(`${URL}/${id}`, data);
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
      TApiResponse<{ account: TAccount; accessToken: string }>
    >(`${URL}/verify-opt`, data);
  },
  // POST/account/tutor
  createTutor(data: TCreateTutor) {
    return instance.post<TApiResponse<TAccount>>(`${URL}/tutor`, data);
  },
  //POST/account/find-tutors
  findTutors(params: TFindTutorsParams) {
    return instance.post<
      TApiResponse<{
        tutors: TAccount[];
        total: number;
      }>
    >(`${URL}/find-tutors`, params);
  },
  // GET/account/tutor-detail:id
  tutorDetail(id: string) {
    return instance.get<TApiResponse<TTutor>>(`${URL}/tutor-detail/${id}`);
  },
  // PUT/account/tutor
  editTutor(data: Partial<TCreateTutor>) {
    return instance.put<TApiResponse<TTutor>>(`${URL}/tutor`, data);
  },
  // PUT/account/customer/me
  editCustomer(data: TEditCustomer) {
    return instance.put<TApiResponse<TAccount>>(`${URL}/customer/me`, data);
  },
};

export default accountService;
