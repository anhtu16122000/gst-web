"use server";
import MyContainer from "@/atomics/atoms/MyContainer";
import MyCardTutor from "@/atomics/molecules/MyCardTutor";
import MyDivider from "@/bases/MyDivider";
import accountService from "@/services/account";
import { Pagination } from "antd";
import FilterSection from "./FilterSection";
import { searchParamsCache } from "./common";

const getTutors = async (query) => {
  return await accountService.findTutors(query);
};

export default async function Tutors({ params, searchParams }) {
  const query = searchParamsCache.parse(searchParams);

  const tutorsRes = await getTutors(query);

  const tutors = tutorsRes?.data.data?.tutors || [];
  const totalTutors = tutorsRes.data.data?.total || 0;

  return (
    <MyContainer className="flex flex-col gap-3">
      <p className="text-xl">Danh sách gia sư</p>
      <div className="grid grid-cols-8 gap-3">
        <FilterSection />
        <div className="col-span-6">
          {tutors.map((tutor, index) => (
            <div key={tutor.id}>
              <MyCardTutor account={tutor} />
              {index !== tutors.length - 1 && (
                <MyDivider style={{ margin: "14px 0px" }} />
              )}
            </div>
          )) || <div>Không có dữ liệu</div>}
          <div className="flex mt-2 justify-end">
            <Pagination current={query.page} total={totalTutors} />
          </div>
        </div>
      </div>
    </MyContainer>
  );
}
