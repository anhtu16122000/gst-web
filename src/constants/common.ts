import { AccountType, REQUIRED_GENDER, SUBJECT, TEACHING_METHOD } from "./enum";

export const RULE_REQUIRED = {
  required: true,
  message: "Thông tin này là bắt buộc",
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
    label: "8 buổi/tuần",
    value: 8,
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
