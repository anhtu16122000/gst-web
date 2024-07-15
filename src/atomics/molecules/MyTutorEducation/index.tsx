import MyImageWidthAuto from "@/atomics/atoms/MyImageWidthAuto";
import { OBJ_TUTOR_MAJOR, OBJ_TUTOR_STUDENT_YEAR } from "@/constants/common";
import { TTutor } from "@/types/entity.type";
import { getUrlImage } from "@/utils/imageHandler";

type TMyTutorEducationProps = {
  fullName: string;
  tutor?: TTutor;
};

const MyTutorEducation: React.FC<TMyTutorEducationProps> = (props) => {
  const { tutor, fullName } = props;

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col">
        <dt className="text-gray-600">Sinh viên năm</dt>
        <dd className="text-lg font-semibold">
          {tutor?.studentYear
            ? OBJ_TUTOR_STUDENT_YEAR[tutor?.studentYear]?.label
            : "Không có"}
        </dd>
      </div>
      <div className="flex col-span-2 flex-col">
        <dt className="text-gray-600 ">Sinh viên trường</dt>
        <dd className="text-lg font-semibold">
          {tutor?.school?.name ? `${tutor?.school?.name}` : "Không có"}
        </dd>
      </div>
      <div className="flex flex-col">
        <dt className="text-gray-600 ">Sinh viên ngành</dt>
        <dd className="text-lg font-semibold">
          {tutor?.majorCode
            ? OBJ_TUTOR_MAJOR?.[tutor?.majorCode]?.label
            : "Không có"}
        </dd>
      </div>
      <div className="flex col-span-2 flex-col ">
        <dt className="text-gray-600">Mặt trước thẻ sinh viên</dt>
        <dd className="text-lg font-semibold">
          <MyImageWidthAuto
            height={400}
            myImageProps={{
              viewDetail: true,
              src: getUrlImage(tutor?.fontStudentCardImage) as string,
              alt: `${fullName} mặt trước thẻ sinh viên`,
              objectFit: "contain",
            }}
          />
        </dd>
      </div>
      <div className="flex col-span-2 flex-col ">
        <dt className="text-gray-600">Mặt sau thẻ sinh viên</dt>
        <dd className="text-lg font-semibold">
          <MyImageWidthAuto
            height={400}
            myImageProps={{
              viewDetail: true,
              src: getUrlImage(tutor?.backStudentCardImage) as string,
              alt: `${fullName} mặt sau thẻ sinh viên`,
              objectFit: "contain",
            }}
          />
        </dd>
      </div>
    </div>
  );
};

export default MyTutorEducation;
