"use client";
import MyFormTutorInfo from "@/atomics/molecules/MyFormTutorInfo";
import MyButton from "@/bases/MyButton";
import MyModal from "@/bases/MyModal";
import accountService from "@/services/account";
import { myToast } from "@/utils/toastHandler";
import { EditOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";

import { TAccount } from "@/types/entity.type";
import { Form } from "antd";
import { useLayoutEffect, useMemo, useState } from "react";

const ModalEdit = ({ account }: { account: TAccount }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const subjectClassCodeTutors = useMemo(
    () =>
      account?.tutor?.subjectTutors?.map(({ subjectCode }) => subjectCode) ||
      [],
    [account?.tutor?.subjectTutors],
  );
  const teachingClassTypeCodes = useMemo(
    () =>
      account?.tutor?.teachingClassTypeTutors?.map(
        ({ teachingClassTypeCode }) => teachingClassTypeCode,
      ) || [],
    [account?.tutor?.teachingClassTypeTutors],
  );

  const handleSubmit = async (dataForm) => {
    setLoading(true);
    const callApi = account.tutor?.id
      ? accountService.editTutor
      : accountService.createTutor;
    try {
      const res = await callApi({
        ...dataForm,
      });
      myToast.success(res.data.message?.[0]);
      // form.resetFields();
      queryClient.invalidateQueries({
        queryKey: ["GET/address-of-account/me"],
      });
      queryClient.invalidateQueries({
        queryKey: ["GET/account/me"],
      });
      setVisible(false);
      setLoading(false);
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
    setLoading(false);
  };

  useLayoutEffect(() => {
    form.setFieldsValue({
      ...account,
      ...(account?.tutor || {}),
      DOB: moment(account.tutor?.DOB),
      subjectCodes: subjectClassCodeTutors,
      teachingClassTypeCodes: teachingClassTypeCodes,
      provinceCode: account?.tutor?.province?.code,
      wardCode: account?.tutor?.ward?.code,
      districtCode: account?.tutor?.district?.code,
      schoolId: account?.tutor?.school?.id,
    });
  }, [visible, account, form, subjectClassCodeTutors, teachingClassTypeCodes]);

  return (
    <>
      <MyButton
        onClick={() => setVisible(true)}
        type="primary"
        icon={<EditOutlined />}
      >
        Cập nhật hồ sơ
      </MyButton>
      <MyModal
        onCancel={() => setVisible(false)}
        onOk={form.submit}
        width={800}
        title="Chỉnh sửa hồ sơ"
        open={visible}
        okLoading={loading}
      >
        <MyFormTutorInfo form={form} onFinish={handleSubmit} />
      </MyModal>
    </>
  );
};

export default ModalEdit;
