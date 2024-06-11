import MyContainer from "@/atomics/atoms/MyContainer";
import accountService from "@/services/account";
import TutorDetail from "./TutorDetail";

const DetailTutor = async ({ params }: { params: { slug: string } }) => {
  const tutorDetailRes = await accountService.tutorDetail(params.slug);
  const tutorDetail = tutorDetailRes?.data.data || {};

  return (
    <MyContainer>
      <TutorDetail tutorDetail={tutorDetail} />
    </MyContainer>
  );
};

export default DetailTutor;
