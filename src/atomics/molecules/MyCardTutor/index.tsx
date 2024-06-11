"use client";
import MyAvatar from "@/atomics/atoms/MyAvatar";
import MyButtonHTML from "@/bases/MyButtonHTML";
import MyLink from "@/bases/MyLink";
import { OBJ_SUBJECT, OBJ_TEACHING_CLASS_TYPE } from "@/constants/common";
import { TAccount } from "@/types/entity.type";
import { getUrlImage } from "@/utils/imageHandler";
import numberHandler from "@/utils/numberHandler";
import { CheckCircleTwoTone } from "@ant-design/icons";
import HTMLReactParser from "html-react-parser";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import RightButtonSection from "./RightButtonSection";

type TMyCardTutorProps = {
  account: TAccount;
};

const MyCardTutor: React.FC<TMyCardTutorProps> = ({ account }) => {
  const { firstName, lastName, id, tutor, avatar } = account || {};
  const {
    teachingClassTypeTutors,
    subjectTutors,
    district,
    province,
    school,
    note,
    expectedSalary,
  } = tutor || {};
  const fullName = `${firstName} ${lastName}`;
  const objSubjects =
    subjectTutors?.map((item) => OBJ_SUBJECT[item.subjectCode]) || [];
  const objClassTutors =
    teachingClassTypeTutors?.map(
      (item) => OBJ_TEACHING_CLASS_TYPE?.[item.teachingClassTypeCode],
    ) || [];

  return (
    <div className="p-4 border flex bg-white rounded-lg flex-col gap-3 hover:border-blue-500">
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-2  items-center">
          <div>
            <MyAvatar
              size="2xl"
              src={getUrlImage(avatar)}
              id={id}
              lastName={`Ảnh đại diện ${fullName}`}
            />
          </div>
          <div>
            <MyLink
              href={`/tutors/${tutor?.id}`}
              DisplayComponent={
                <p className="font-medium  hover:underline cursor-pointer">
                  {fullName}
                </p>
              }
            />
            <div className="flex text-gray-600 gap-0.5 items-center">
              <FaLocationDot className="" size={15} />
              <span className=" font-normal">
                {district?.fullName}, {province?.fullName}
              </span>
            </div>
            <div className="text-blue-600 flex gap-0.5 items-center">
              <IoSchool />
              <p className="text-md">{school?.name}</p>
            </div>
          </div>
        </div>
        <div>
          <RightButtonSection />
        </div>
      </div>
      <div className="flex gap-10">
        <div>
          <div className="flex items-center gap-1">
            <span>Lương: </span>
            <p>
              {expectedSalary
                ? `${numberHandler.formatNumber(expectedSalary)} / Tháng`
                : "Không có"}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          {objClassTutors?.map(({ label, value }) => {
            return (
              <div
                key={value}
                className="flex gap-0.5 items-center text-gray-700"
              >
                <MdCheck /> {label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2">
        {objSubjects.map(({ label, value }) => {
          return (
            <MyButtonHTML
              key={value}
              className="rounded-full px-4 py-1 border border-gray-300 		 bg-gray-50"
            >
              {label}
            </MyButtonHTML>
          );
        })}
      </div>
      <div>{note ? HTMLReactParser(note) : "Không có"}</div>
      <div className="text-sm  text-green-600 flex gap-0.5 ">
        <CheckCircleTwoTone twoToneColor="#2ab93d" />
        <span>Hồ sơ đạt chuẩn</span>
      </div>
    </div>
  );
};

export default MyCardTutor;
