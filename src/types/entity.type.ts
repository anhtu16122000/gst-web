import {
  AccountType,
  GENDER,
  REQUIRED_GENDER,
  TEACHING_METHOD,
  TeachingClassType,
} from "@/constants/enum";
import { TSubjectClass } from "@/services/classes/classes.type";

import {
  TDistrict,
  TProvince,
  TWard,
} from "@/services/vietnamese-region/vietnamese-region.type";
import { TField } from "./common.type";
import { TUTOR_PROFILE_STATUS } from "./enum";

export type TCustomer = {
  id: string;
  code: string;
  note?: string;
};

export type TAccount = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  registeredBy: string;
  type?: AccountType;
  gender?: GENDER;
  refreshToken?: string;
  deletedAt?: string;
  customer?: TCustomer;
  addressOfAccount?: TAddressOfAccount[];
  tutor?: TTutor;
};

export type TTutor = TField<{
  id: string;
  DOB: string;
  GPA: number | null;
  gender?: GENDER;
  address: string;
  backStudentCardImage: string;
  code: string;
  createdAt: string;
  deletedAt: string | null;
  expectedSalary: number;
  fontStudentCardImage: string;
  majorCode: string;
  note: string;
  profileStatus: TUTOR_PROFILE_STATUS;
  phoneNumber: string;
  studentYear: number;
  teachingMethod: string;
  updatedAt: string;
  weeklySession: number | null;
  subjectTutors?: TSubjectClass[];
  account: TAccount;
  school?: THigherEducationSchool;
  teachingClassTypeTutors?: TeachingClassTypeTutorEntity[];
  district?: TDistrict;
  province?: TProvince;
  ward?: TWard;
}>;

export type TeachingClassTypeTutorEntity = TField<{
  teachingClassTypeCode: TeachingClassType;
}>;

export type TAddressOfAccount = TField<{
  address: string;
  province: TProvince;
  district: TDistrict;
  ward: TWard;
  phoneNumber: string;
}>;

export type TClass = TField<{
  id: string;
  describeNote: string;
  salary: number;
  sessionPerWeek: number;
  gradeOfStudent: number;
  requiredGender: REQUIRED_GENDER;
  teachingMethod: TEACHING_METHOD;
  addressOfAccount: TAddressOfAccount;
  subjectClass: TSubjectClass[];
  account: TAccount;
}>;

export type THigherEducationSchool = TField<{
  name: string;
  shortHandName?: string;
  image?: string;
}>;
