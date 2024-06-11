import MyAvatar from "@/atomics/atoms/MyAvatar";
import MyTag from "@/bases/MyTag";
import { OBJ_SUBJECT } from "@/constants/common";
import { TClass } from "@/types/entity.type";
import { getUrlImage } from "@/utils/imageHandler";
import numberHandler from "@/utils/numberHandler";
import moment from "moment";
import ReactHTMLParser from "react-html-parser";

export type TMyCardClassProps = {
  classProps: TClass;
  extendHandler?: ({ _class }: { _class: TClass }) => React.ReactElement;
};

const MyCardClass: React.FC<TMyCardClassProps> = (props) => {
  const { classProps, extendHandler } = props;
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
    createdBy,
  } = classProps;

  const subjectNames = subjectClass?.map(
    (subject) => OBJ_SUBJECT?.[subject?.subjectCode]?.label,
  );
  const { province, updatedAt, ward } = addressOfAccount;

  return (
    <div className="flex bg-white gap-4 relative group border  p-4 rounded-lg hover:border-blue-500">
      {typeof extendHandler === "function" &&
        extendHandler({ _class: classProps })}
      <div>
        <MyAvatar
          rounded="rounded-sm"
          size="4xl"
          src={getUrlImage(account?.avatar)}
          id={account?.id}
          lastName={account?.lastName}
        />
      </div>
      <div className="flex flex-col gap-3 justify-between">
        <div>
          <p className="text-lg">
            Lớp: {gradeOfStudent} - {teachingMethod} -{" "}
            {subjectNames.map((subject) => subject).join(", ")}
          </p>
          <p className="text-blue-700 text-base">
            Lương: {numberHandler.formatNumber(salary)}/ giờ
          </p>
          <p className="line-clamp-2 whitespace-pre-wrap text-base text-gray-900">
            {describeNote ? ReactHTMLParser(describeNote) : "Không có mô tả"}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <MyTag size="lg">{`${sessionPerWeek} Buổi /tuần`}</MyTag>
          <MyTag size="lg">
            {ward?.fullName}, {province?.fullName}
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
