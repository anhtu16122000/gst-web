"use client";

import MyContactOfAccount from "@/atomics/atoms/MyContactOfAccount";
import MyInputNumberFormatter from "@/atomics/atoms/MyInputNumberFormatter";
import MySelectClass from "@/atomics/atoms/MySelectClass";
import MySelectRequiredGender from "@/atomics/atoms/MySelectRequiredGender";
import MySelectSessionPerWeek from "@/atomics/atoms/MySelectSessionPerWeek";
import MySelectSubjects from "@/atomics/atoms/MySelectSubjects";
import MySelectTeachingMethod from "@/atomics/atoms/MySelectTeachingMethod";
import MyDivider from "@/bases/MyDivider";
import MyForm from "@/bases/MyForm";
import MyModal from "@/bases/MyModal";
import MyRadio from "@/bases/MyRadio";
import { RULE_REQUIRED } from "@/constants/common";
import addressOfAccountService from "@/services/addressOfAccount";
import classesService from "@/services/classes";
import { TClassesCreate } from "@/services/classes/classes.type";
import { myToast } from "@/utils/toastHandler";
import { useQuery } from "@tanstack/react-query";
import { Form, Radio } from "antd";
import { useState } from "react";
import ModalCreateContact from "./ModalCreateContact";

const ModalPostFindTutor = () => {
  const [form] = Form.useForm<TClassesCreate>();
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["GET/address-of-account/me"],
    staleTime: Infinity,
    queryFn: async () => addressOfAccountService.me(),
  });
  const handleSubmit = async (dataForm: TClassesCreate) => {
    setSubmitting(true);
    try {
      const res = await classesService.create(dataForm);
      myToast.success(res.data.message?.[0]);
      form.resetFields();
      setVisible(false);
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
    setSubmitting(false);
  };

  const accountContacts = data?.data.data;

  return (
    <div>
      <button
        onClick={() => setVisible(true)}
        className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6"
      >
        Đăng tìm gia sư ngay
      </button>
      <MyModal
        onOk={() => form.submit()}
        onCancel={() => setVisible(false)}
        width={900}
        title="Đăng thông tin lớp học"
        open={visible}
        okLoading={submitting}
      >
        <MyForm
          className="grid grid-cols-2 gap-x-3"
          form={form}
          onFinish={handleSubmit}
        >
          <MyDivider className="col-span-2">Thông tin lớp</MyDivider>
          <Form.Item
            label="Môn dạy"
            name="subjectCodes"
            rules={[RULE_REQUIRED]}
          >
            <MySelectSubjects allowClear />
          </Form.Item>
          <Form.Item name="salary" rules={[RULE_REQUIRED]} label="Mức lương">
            <MyInputNumberFormatter />
          </Form.Item>
          <Form.Item
            name="sessionPerWeek"
            rules={[RULE_REQUIRED]}
            label="Số buổi dạy trong tuần"
          >
            <MySelectSessionPerWeek />
          </Form.Item>
          <Form.Item
            name="gradeOfStudent"
            rules={[RULE_REQUIRED]}
            label="Bé học lớp"
          >
            <MySelectClass />
          </Form.Item>
          <Form.Item
            name="requiredGender"
            rules={[RULE_REQUIRED]}
            label="Yêu cầu (giới tính)"
          >
            <MySelectRequiredGender />
          </Form.Item>
          <Form.Item
            name="teachingMethod"
            rules={[RULE_REQUIRED]}
            label="Hình thức dạy"
          >
            <MySelectTeachingMethod />
          </Form.Item>
          <MyDivider className="col-span-2">Thông tin liên hệ</MyDivider>
          <Form.Item
            rules={[RULE_REQUIRED]}
            className="col-span-2 "
            label="Chọn hoặc tạo địa chỉ mới"
            name="addressOfAccountId"
          >
            <Radio.Group size="large">
              <div className="grid grid-cols-2 gap-y-2">
                {accountContacts?.map((contact) => {
                  const { address, phoneNumber, province, ward, district } =
                    contact;
                  return (
                    <MyRadio
                      name="addressOfAccountId"
                      key={contact.id}
                      value={contact.id}
                    >
                      <MyContactOfAccount
                        contactId={contact.id}
                        address={address}
                        phoneNumber={phoneNumber}
                        district={district}
                        ward={ward}
                        province={province}
                      />
                    </MyRadio>
                  );
                })}
              </div>
            </Radio.Group>
          </Form.Item>
          <ModalCreateContact />
        </MyForm>
      </MyModal>
    </div>
  );
};

export default ModalPostFindTutor;
