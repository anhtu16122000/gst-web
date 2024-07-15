import MyAvatar from "@/atomics/atoms/MyAvatar";
import MyTag from "@/bases/MyTag";
import { OBJ_REQUIRED_GENDER, OBJ_SUBJECT } from "@/constants/common";
import ClassEntity from "@/types/entities/class.type";
import { getUrlImage } from "@/utils/imageHandler";
import numberHandler from "@/utils/numberHandler";
import moment from "moment";
import ReactHTMLParser from "react-html-parser";
import CancelRegisterButton from "./CancelRegisterButton";
import RegisterButton from "./RegisterButton";

export type TMyCardClassProps = {
  classProps: ClassEntity;
  onRegister?: () => void;
  onCancelRegister?: () => void;
  options?: {
    showRegisterButton?: boolean;
    showCancelRegisterButton?: boolean;
  };
};

const MyCardClass: React.FC<TMyCardClassProps> = (props) => {
  const { classProps, onRegister, onCancelRegister, options = {} } = props;
  console.log("classProps", classProps);
  const { showRegisterButton = false, showCancelRegisterButton = false } =
    options;
  const {
    salary,
    sessionPerWeek,
    requiredGender,
    addressOfAccount,
    gradeOfStudent,
    teachingMethod,
    account,
    subjectClass,
    describeNote,
    registerClasses,
  } = classProps;

  const subjectNames = subjectClass?.map(
    (subject) => OBJ_SUBJECT?.[subject?.subjectCode]?.label,
  );
  const { province, updatedAt, district } = addressOfAccount;

  return (
    <div className="flex bg-white gap-4 relative group border  p-4 rounded-lg hover:border-blue-500">
      <div>
        <MyAvatar
          rounded="rounded-sm"
          size="4xl"
          src={getUrlImage(account?.avatar)}
          id={account?.id}
          lastName={account?.lastName}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 justify-between">
        <div>
          <div className="flex justify-between">
            <p className="text-lg">
              Lớp: {gradeOfStudent} - {teachingMethod} -{" "}
              {subjectNames.map((subject) => subject).join(", ")}
            </p>

            <div>
              {showRegisterButton && (
                <RegisterButton onClick={onCancelRegister} />
              )}
              {showCancelRegisterButton && (
                <CancelRegisterButton onClick={onRegister} />
              )}
            </div>
          </div>
          <p className="text-blue-700 text-base">
            Lương: {numberHandler.formatNumber(salary)}/ giờ
          </p>
          <p>
            Giới tính yêu cầu:{" "}
            <span>{OBJ_REQUIRED_GENDER?.[requiredGender]?.label}</span>
          </p>
          <p className="whitespace-pre-wrap text-md text-gray-600">
            {describeNote ? ReactHTMLParser(describeNote) : "Không có mô tả"}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <MyTag size="lg">{`${sessionPerWeek} Buổi /tuần`}</MyTag>
          <MyTag size="lg">
            {district?.fullName}, {province?.fullName}
          </MyTag>
          <MyTag size="lg">
            Cập nhật: {moment(updatedAt).locale("vi").fromNow()}
          </MyTag>
        </div>
      </div>
    </div>
  );
};

export default MyCardClass;
