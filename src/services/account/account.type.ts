import {
  GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TeachingClassType,
} from "@/constants/enum";
import { TMyPagination } from "@/types/common.type";

export type TCreateAccount = Partial<{
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  gender?: GENDER;
  registeredBy: string;
}>;

export type TCreateTutor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: GENDER;
  subjectCodes: string;
  teachingClassTypeCodes: string;
  address: string;
  wardCode: string;
  districtCode: string;
  provinceCode: string;
  DOB: string;
  teachingMethod: TEACHING_METHOD;
  studentYear: number;
  studentMajor: string;
  fontStudentCardImage?: string;
  backStudentCardImage?: string;
  GPA?: number;
  schoolId?: string;
  expectedSalary?: number;
  weeklySession?: number;
  note: string;
};
export type TFindTutorsParams = TMyPagination<{
  minSalary?: number;
  maxSalary?: number;
  teachingClassTypeCodes?: TeachingClassType[];
  gender?: GENDER;
  schoolId?: string[];
  teachingMethod?: TEACHING_METHOD;
  subjectCodes?: SUBJECT[];
}>;

export type TEditCustomer = Partial<
  Omit<TCreateAccount, "username" | "password" | "registeredBy" | "email">
>;
