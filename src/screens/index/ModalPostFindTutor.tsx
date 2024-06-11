"use client";

import MyFormClass from "@/atomics/molecules/MyFormClass";
import MyModal from "@/bases/MyModal";
import classesService from "@/services/classes";
import { TClassesCreate } from "@/services/classes/classes.type";
import { myToast } from "@/utils/toastHandler";
import { Form } from "antd";
import { useState } from "react";

const ModalPostFindTutor = () => {
  const [form] = Form.useForm<TClassesCreate>();
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
        <MyFormClass form={form} onFinish={handleSubmit} />
      </MyModal>
    </div>
  );
};

export default ModalPostFindTutor;
