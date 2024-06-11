import {
  REQUIRED_GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TeachingClassType,
} from "@/constants/enum";
import { TMyPagination } from "@/types/common.type";

export type TClassesCreate = {
  salary: number;
  sessionPerWeek: number;
  gradeOfStudent: number;
  teachingClassTypeCode: TeachingClassType;
  requiredGender: REQUIRED_GENDER; // Use a union type for gender
  teachingMethod: TEACHING_METHOD; // Union type for teaching method
  subjectCodes: SUBJECT[];
  addressOfAccountId: string;
};

export type TSubjectClass = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  subjectCode: SUBJECT; // Use the SUBJECT enum for subject code
};

export type TClassesFindAll = Partial<
  TMyPagination<{
    minSalary: number;
    maxSalary: number;
    teachingClassTypeCodes: TeachingClassType[];
    gender: REQUIRED_GENDER[];
    sessionPerWeeks: number[];
    teachingMethod: TEACHING_METHOD;
    subjectCodes: SUBJECT[];
    provinceCode: string;
    districtCodes: string[];
  }>
>;
