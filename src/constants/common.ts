import { VIETNAMESE_PHONE_NUMBER_REGEX } from "@/utils/common";
import {
  AccountType,
  GENDER,
  REQUIRED_GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TeachingClassType,
} from "./enum";

const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API || "";
const BACKEND_VERSION = process.env.NEXT_PUBLIC_BACKEND_VERSION || "";
export const BACKEND_URL = `${BACKEND_API}/${BACKEND_VERSION}`;

export const RULE_REQUIRED = {
  required: true,
  message: "Thông tin này là bắt buộc",
};

export const RULE_PHONE_NUMBER = {
  pattern: VIETNAMESE_PHONE_NUMBER_REGEX,
  message: "Số điện thoại không hợp lệ",
};

export const OBJ_ACCOUNT_TYPE = {
  [AccountType.CUSTOMER]: {
    label: "Khách hàng",
    value: AccountType.CUSTOMER,
  },
  [AccountType.TUTOR]: {
    label: "Gia sư",
    value: AccountType.TUTOR,
  },
};

export const OBJ_REQUIRED_GENDER = {
  [REQUIRED_GENDER.MALE]: {
    label: "Nam",
    value: REQUIRED_GENDER.MALE,
  },
  [REQUIRED_GENDER.FEMALE]: {
    label: "Nữ",
    value: REQUIRED_GENDER.FEMALE,
  },
  [REQUIRED_GENDER.NOT_REQUIRED]: {
    label: "Không yêu cầu",
    value: REQUIRED_GENDER.NOT_REQUIRED,
  },
};

export const OBJ_SUBJECT = {
  [SUBJECT.MATH]: {
    label: "Toán",
    value: SUBJECT.MATH,
  },
  [SUBJECT.ENGLISH]: {
    label: "Tiếng Anh",
    value: SUBJECT.ENGLISH,
  },
  [SUBJECT.LITERATURE]: {
    label: "Văn học",
    value: SUBJECT.LITERATURE,
  },
  [SUBJECT.HISTORY]: {
    label: "Lịch sử",
    value: SUBJECT.HISTORY,
  },
  [SUBJECT.PHYSICS]: {
    label: "Vật lý",
    value: SUBJECT.PHYSICS,
  },
  [SUBJECT.CHEMISTRY]: {
    label: "Hóa học",
    value: SUBJECT.CHEMISTRY,
  },
};

export const OBJ_TEACHING_METHOD = {
  [TEACHING_METHOD.ONLINE]: {
    label: "Online",
    value: TEACHING_METHOD.ONLINE,
  },
  [TEACHING_METHOD.OFFLINE]: {
    label: "Offline",
    value: TEACHING_METHOD.OFFLINE,
  },
  [TEACHING_METHOD.ONLINE_AND_OFFLINE]: {
    label: "Online và Offline",
    value: TEACHING_METHOD.ONLINE_AND_OFFLINE,
  },
};

export const OBJ_SESSION_PER_WEEK = {
  [1]: {
    label: "1 buổi/tuần",
    value: 1,
  },
  [2]: {
    label: "2 buổi/tuần",
    value: 2,
  },
  [3]: {
    label: "3 buổi/tuần",
    value: 3,
  },
  [4]: {
    label: "4 buổi/tuần",
    value: 4,
  },
  [5]: {
    label: "5 buổi/tuần",
    value: 5,
  },
  [6]: {
    label: "6 buổi/tuần",
    value: 6,
  },
  [7]: {
    label: "7 buổi/tuần",
    value: 7,
  },
  [8]: {
    label: "8 buổi/tuần",
    value: 8,
  },
  [9]: {
    label: "9 buổi/tuần",
    value: 9,
  },
  [10]: {
    label: "8 buổi/tuần",
    value: 10,
  },
};
export const OBJ_STUDENT_GRADE = {
  [1]: {
    label: "Lớp 1",
    value: 1,
  },
  [2]: {
    label: "Lớp 2",
    value: 2,
  },
  [3]: {
    label: "Lớp 3",
    value: 3,
  },
  [4]: {
    label: "Lớp 4",
    value: 4,
  },
  [5]: {
    label: "Lớp 5",
    value: 5,
  },
  [6]: {
    label: "Lớp 6",
    value: 6,
  },
  [7]: {
    label: "Lớp 7",
    value: 7,
  },
  [8]: {
    label: "Lớp 8",
    value: 8,
  },
  [9]: {
    label: "Lớp 9",
    value: 9,
  },
  [10]: {
    label: "Lớp 10",
    value: 10,
  },
  [11]: {
    label: "Lớp 11",
    value: 11,
  },
  [12]: {
    label: "Lớp 12",
    value: 12,
  },
};

export const OBJ_TEACHING_CLASS_TYPE = {
  [TeachingClassType.Kindergarten]: {
    label: "Lớp lá",
    value: TeachingClassType.Kindergarten,
  },
  [TeachingClassType.Grade1]: {
    label: "Lớp 1",
    value: TeachingClassType.Grade1,
  },
  [TeachingClassType.Grade2]: {
    label: "Lớp 2",
    value: TeachingClassType.Grade2,
  },
  [TeachingClassType.Grade3]: {
    label: "Lớp 3",
    value: TeachingClassType.Grade3,
  },
  [TeachingClassType.Grade4]: {
    label: "Lớp 4",
    value: TeachingClassType.Grade4,
  },
  [TeachingClassType.Grade5]: {
    label: "Lớp 5",
    value: TeachingClassType.Grade5,
  },
  [TeachingClassType.Grade6]: {
    label: "Lớp 6",
    value: TeachingClassType.Grade6,
  },
  [TeachingClassType.Grade7]: {
    label: "Lớp 7",
    value: TeachingClassType.Grade7,
  },
  [TeachingClassType.Grade8]: {
    label: "Lớp 8",
    value: TeachingClassType.Grade8,
  },
  [TeachingClassType.Grade9]: {
    label: "Lớp 9",
    value: TeachingClassType.Grade9,
  },
  [TeachingClassType.Grade10]: {
    label: "Lớp 10",
    value: TeachingClassType.Grade10,
  },
  [TeachingClassType.Grade11]: {
    label: "Lớp 11",
    value: TeachingClassType.Grade11,
  },
  [TeachingClassType.Grade12]: {
    label: "Lớp 12",
    value: TeachingClassType.Grade12,
  },
  [TeachingClassType.CollegeEntranceExamPreparation]: {
    label: "Ôn thi đại học",
    value: TeachingClassType.CollegeEntranceExamPreparation,
  },
  [TeachingClassType.EnglishMediumInstruction]: {
    label: "Ôn thi tiếng anh",
    value: TeachingClassType.EnglishMediumInstruction,
  },
  [TeachingClassType.TeachingAutisticChildren]: {
    label: "Dạy trẻ tự kỷ",
    value: TeachingClassType.TeachingAutisticChildren,
  },
  [TeachingClassType.SpecializedHighSchoolExamPreparation]: {
    label: "Ôn thi trường chuyên",
    value: TeachingClassType.SpecializedHighSchoolExamPreparation,
  },
};

export const OBJ_GENDER = {
  [GENDER.MALE]: {
    label: "Nam",
    value: GENDER.MALE,
  },
  [GENDER.FEMALE]: {
    label: "Nữ",
    value: GENDER.FEMALE,
  },
  [GENDER.OTHER]: {
    label: "Khác",
    value: GENDER.OTHER,
  },
};

export const OBJ_TUTOR_STUDENT_YEAR = {
  1: {
    label: "Năm nhất",
    value: 1,
  },
  2: {
    label: "Năm hai",
    value: 2,
  },
  3: {
    label: "Năm ba",
    value: 3,
  },
  4: {
    label: "Năm bốn",
    value: 4,
  },
  5: {
    label: "Năm năm",
    value: 5,
  },
  6: {
    label: "Năm sáu",
    value: 6,
  },
  7: {
    label: "Năm bảy",
    value: 7,
  },
};

export const OBJ_TUTOR_MAJOR = {
  PEDAGOGY_MATHEMATICS: {
    label: "Sư Phạm Toán học",
    value: "PEDAGOGY_MATHEMATICS",
  },
  PEDAGOGY_PHYSICS: {
    label: "Sư Phạm Vật Lý",
    value: "PEDAGOGY_PHYSICS",
  },
  PEDAGOGY_CHEMISTRY: {
    label: "Sư Phạm Hóa Học",
    value: "PEDAGOGY_CHEMISTRY",
  },
  PEDAGOGY_ENGLISH: {
    label: "Sư Phạm Tiếng Anh",
    value: "PEDAGOGY_ENGLISH",
  },
  PEDAGOGY_COMPUTER_SCIENCE: {
    label: "Sư Phạm Tin Học",
    value: "PEDAGOGY_COMPUTER_SCIENCE",
  },
  PEDAGOGY_LITERATURE: {
    label: "Sư Phạm Ngữ Văn",
    value: "PEDAGOGY_LITERATURE",
  },
  PEDAGOGY_HISTORY: {
    label: "Sư Phạm Lịch Sử",
    value: "PEDAGOGY_HISTORY",
  },
  PEDAGOGY_GEOGRAPHY: {
    label: "Sư Phạm Địa Lý",
    value: "PEDAGOGY_GEOGRAPHY",
  },
  PEDAGOGY_BIOLOGY: {
    label: "Sư Phạm Sinh Học",
    value: "PEDAGOGY_BIOLOGY",
  },
  PEDAGOGY_MUSIC: {
    label: "Sư Phạm Âm Nhạc",
    value: "PEDAGOGY_MUSIC",
  },
  EARLY_CHILDHOOD_EDUCATION: {
    label: "Giáo Dục Mầm Non",
    value: "EARLY_CHILDHOOD_EDUCATION",
  },
  PEDAGOGY_EARLY_CHILDHOOD: {
    label: "Sư Phạm Mầm Non",
    value: "PEDAGOGY_EARLY_CHILDHOOD",
  },
  ELEMENTARY_EDUCATION: {
    label: "Giáo Dục Tiểu Học",
    value: "ELEMENTARY_EDUCATION",
  },
  PEDAGOGY_ELEMENTARY: {
    label: "Sư Phạm Tiểu Học",
    value: "PEDAGOGY_ELEMENTARY",
  },
  SPECIAL_EDUCATION: {
    label: "Giáo Dục Đặc Biệt",
    value: "SPECIAL_EDUCATION",
  },
  ENGLISH_LANGUAGE: {
    label: "Ngôn Ngữ Anh",
    value: "ENGLISH_LANGUAGE",
  },
  BUSINESS_ENGLISH: {
    label: "Tiếng Anh Thương Mại",
    value: "BUSINESS_ENGLISH",
  },
  JAPANESE_LANGUAGE: {
    label: "Ngôn Ngữ Nhật",
    value: "JAPANESE_LANGUAGE",
  },
  JAPANESE_STUDIES: {
    label: "Nhật Bản Học",
    value: "JAPANESE_STUDIES",
  },
  PEDAGOGY_CHINESE_LANGUAGE: {
    label: "Sư Phạm Tiếng Trung Quốc",
    value: "PEDAGOGY_CHINESE_LANGUAGE",
  },
  CHINESE_LANGUAGE: {
    label: "Ngôn Ngữ Trung Quốc",
    value: "CHINESE_LANGUAGE",
  },
  MATH_COMPUTER_SCIENCE: {
    label: "Toán - Tin",
    value: "MATH_COMPUTER_SCIENCE",
  },
  INFORMATION_TECHNOLOGY: {
    label: "Công Nghệ Thông Tin",
    value: "INFORMATION_TECHNOLOGY",
  },
  ACCOUNTING: {
    label: "Kế Toán",
    value: "ACCOUNTING",
  },
  AUDIT: {
    label: "Kiểm Toán",
    value: "AUDIT",
  },
  ACCOUNTING_AUDIT: {
    label: "Kế Toán - Kiểm Toán",
    value: "ACCOUNTING_AUDIT",
  },
  FINANCE_BANKING: {
    label: "Tài Chính Ngân Hàng",
    value: "FINANCE_BANKING",
  },
  BUSINESS_MANAGEMENT: {
    label: "Quản Trị Kinh Doanh",
    value: "BUSINESS_MANAGEMENT",
  },
  KOREAN_LANGUAGE: {
    label: "Ngôn Ngữ Hàn Quốc",
    value: "KOREAN_LANGUAGE",
  },
  RUSSIAN_LANGUAGE: {
    label: "Ngôn Ngữ Nga",
    value: "RUSSIAN_LANGUAGE",
  },
  PEDAGOGY_RUSSIAN_LANGUAGE: {
    label: "Sư Phạm Tiếng Nga",
    value: "PEDAGOGY_RUSSIAN_LANGUAGE",
  },
  FRENCH_LANGUAGE: {
    label: "Ngôn Ngữ Pháp",
    value: "FRENCH_LANGUAGE",
  },
  PEDAGOGY_FRENCH_LANGUAGE: {
    label: "Sư Phạm Tiếng Pháp",
    value: "PEDAGOGY_FRENCH_LANGUAGE",
  },
  FOREIGN_LANGUAGES: {
    label: "Ngoại Ngữ",
    value: "FOREIGN_LANGUAGES",
  },
};
