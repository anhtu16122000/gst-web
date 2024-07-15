import {
  OBJ_GENDER,
  OBJ_SUBJECT,
  OBJ_TEACHING_METHOD,
} from "@/constants/common";
import { TTutor } from "@/types/entity.type";
import moment from "moment";

type TMyTutorInfoProps = {
  email: string;
  tutor?: TTutor;
  options?: {
    showPhoneNumber?: boolean;
    showAddress?: boolean;
  };
};

const MyTutorInfo: React.FC<TMyTutorInfoProps> = ({
  tutor,
  email,
  options = {},
}) => {
  const { showPhoneNumber = true, showAddress = true } = options;
  const fullAddress = `${showAddress ? `${tutor?.address}, ` : ""} ${
    tutor?.ward?.fullName
  }, 
  ${tutor?.district?.fullName}, ${tutor?.province?.fullName}`;

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 flex flex-col">
        <div className="text-gray-600 ">Giới thiệu</div>
        <div className="text-lg font-semibold ">
          {tutor?.note || "Không có"}
        </div>
      </div>
      <div className="flex flex-col">
        <dt className="text-gray-600">Ngày sinh</dt>
        <dd className="text-lg font-semibold">
          {tutor?.DOB ? moment(tutor.DOB).format("DD/MM/YYYY") : "Không có"}
        </dd>
      </div>
      <div className="flex flex-col">
        <dt className="text-gray-600 ">Email</dt>
        <dd className="text-lg font-semibold">{email || "Không có"}</dd>
      </div>
      {showPhoneNumber && (
        <div className="flex flex-col">
          <dt className="text-gray-600 ">Số điện thoại</dt>
          <dd className="text-lg font-semibold">
            {tutor?.phoneNumber || "Không có"}
          </dd>
        </div>
      )}
      <div className="flex flex-col ">
        <dt className="text-gray-600 ">Giới tính</dt>
        <dd className="text-lg font-semibold">
          {tutor?.gender ? OBJ_GENDER[tutor.gender].label : "Không có"}
        </dd>
      </div>
      <div className="flex flex-col">
        <dt className="text-gray-600 ">Phương thức giảng dạy</dt>
        <dd className="text-lg font-semibold">
          {tutor?.teachingMethod
            ? OBJ_TEACHING_METHOD[tutor?.teachingMethod].label
            : "Không có"}
        </dd>
      </div>
      <div className="flex flex-col">
        <dt className="text-gray-600 ">Môn dạy</dt>
        <dd className="text-lg font-semibold">
          {Boolean(tutor?.subjectTutors?.length)
            ? tutor?.subjectTutors
                ?.map(({ subjectCode }) => OBJ_SUBJECT[subjectCode].label)
                .join(", ")
            : "Không có"}
        </dd>
      </div>
      <div className="flex col-span-2 flex-col ">
        <dt className="text-gray-600 mt-3">Địa chỉ</dt>
        <dd className="text-lg font-semibold">
          <span>{fullAddress}</span>
        </dd>
      </div>
    </div>
  );
};

export default MyTutorInfo;
