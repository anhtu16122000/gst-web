import { TMeAccount } from "../account/account.type";
import {
  TDistrict,
  TProvince,
  TWard,
} from "../vietnamese-region/vietnamese-region.type";

export type TCreateAddressOfAccountReq = {
  address?: string;
  provinceCode?: string;
  districtCode?: string;
  wardCode?: string;
  phoneNumber?: string;
};

export type TCreateAddressOfAccountRes = {
  address?: string;
  phoneNumber?: string;
  createdBy?: TMeAccount;
  account?: TMeAccount;
  province?: { code?: string };
  district?: { code?: string };
  ward?: { code?: string };
  updatedBy?: TMeAccount;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
};

export interface TAddressOfAccountRes {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  address: string;
  phoneNumber: string;
  account: TMeAccount;
  province: TProvince;
  district: TDistrict;
  ward: TWard;
}
