import { REQUIRED_GENDER, SUBJECT, TEACHING_METHOD } from "@/constants/enum";
import { Address } from "cluster";
import { TMeAccount } from "../account/account.type";

export type TClassesCreate = {
  salary: number;
  sessionPerWeek: number;
  gradeOfStudent: number;
  requiredGender: REQUIRED_GENDER; // Use a union type for gender
  teachingMethod: TEACHING_METHOD; // Union type for teaching method
  subjectCodes: SUBJECT[];
  addressOfAccountId: string;
};

export type SubjectClass = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  subjectCode: SUBJECT; // Use the SUBJECT enum for subject code
};

export type TClass = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  salary: number;
  sessionPerWeek: number;
  gradeOfStudent: number;
  requiredGender: REQUIRED_GENDER;
  teachingMethod: TEACHING_METHOD;
  addressOfAccount: Address;
  subjectClass: SubjectClass[];
  createdBy: TMeAccount;
};
