import MyContainer from "@/atomics/atoms/MyContainer";
import MyAlert from "@/bases/MyAlert";
import accountService from "@/services/account";
import { TUTOR_PROFILE_STATUS } from "@/types/enum";
import TutorDetail from "./TutorDetail";

const DetailTutor = async ({ params }: { params: { slug: string } }) => {
  const tutorDetailRes = await accountService.tutorDetail(params.slug);
  const tutorDetail = tutorDetailRes?.data.data || {};
  const MESSAGES = {
    [TUTOR_PROFILE_STATUS.APPROVED]: (
      <MyAlert
        type="success"
        showIcon
        message="Các thông tin của hồ sơ này đã được phía trung tâm kiểm duyệt"
      />
    ),
    [TUTOR_PROFILE_STATUS.REJECTED]: (
      <MyAlert
        type="warning"
        showIcon
        message="Hồ sơ của gia sư này đang bị yêu cầu kiểm tra lại"
      />
    ),
    [TUTOR_PROFILE_STATUS.WAIT_FOR_APPROVE]: (
      <MyAlert
        type="info"
        showIcon
        message="Hồ sư của gia sư này đang đợi kiểm duyệt từ phía trung tâm"
      />
    ),
  };
  return (
    <MyContainer className="flex flex-col gap-3">
      {MESSAGES?.[tutorDetail?.profileStatus] &&
        MESSAGES?.[tutorDetail?.profileStatus]}
      <TutorDetail tutorDetail={tutorDetail} />
    </MyContainer>
  );
};

export default DetailTutor;
