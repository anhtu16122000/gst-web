import { TSubjectClass } from "@/services/classes/classes.type";
import { MyEntity } from "../common.type";
import { REQUIRED_GENDER, TEACHING_METHOD } from "../enum";
import AccountEntity from "./account.type";
import AddressOfAccountEntity from "./AddressOfAccount.type";
import RegisterClassEntity from "./RegisterClass.type";

type ClassEntity = MyEntity<{
  id: string;
  describeNote: string;
  salary: number;
  sessionPerWeek: number;
  gradeOfStudent: number;
  requiredGender: REQUIRED_GENDER;
  teachingMethod: TEACHING_METHOD;
  addressOfAccount: AddressOfAccountEntity;
  subjectClass: TSubjectClass[];
  account: AccountEntity;
  registerClasses: RegisterClassEntity[];
}>;

export default ClassEntity;
