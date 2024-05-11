"use server";

import MyContainer from "@/atomics/atoms/MyContainer";
import MyCardClass from "@/atomics/molecules/MyCardClass";
import MySwiperMultiple from "@/atomics/organisms/MySwiperMultiple";
import classesService from "@/services/classes";
import { FaUserGraduate } from "react-icons/fa6";

const ClassSection = async () => {
  const resClasses = await classesService.getAll({ page: 1, limit: 100 });
  const classes = resClasses?.data?.data?.classes || [];
  console.log("classes", classes);

  return (
    <MyContainer>
      <div className="border-b mb-5 flex  justify-between text-sm">
        <div className="text-blue-600 gap-3 flex items-center pb-2 pr-2 border-b-2 border-blue-600 uppercase">
          <FaUserGraduate size={20} />
          <a className="font-semibold inline-block">Danh sách lớp học</a>
        </div>
        <a>Xem tất cả</a>
      </div>
      <MySwiperMultiple
        SlideItems={
          classes?.map((_class) => {
            const { id } = _class;
            return <MyCardClass key={id} classProps={_class} />;
          }) || []
        }
      />
      {/* {classes?.map((_class) => {
        const { id } = _class;
        return <MyCardClass key={id} />;
      }) || []} */}
    </MyContainer>
  );
};

export default ClassSection;
