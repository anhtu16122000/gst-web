"use client";

import MyButton from "@/bases/MyButton";
import MyModal from "@/bases/MyModal";

import MyFormClass from "@/atomics/molecules/MyFormClass";
import { MyCardCustomerDetailTab } from "@/atomics/organisms/MyCardCustomerDetail";

import classesService from "@/services/classes";
import { TAccount } from "@/types/entity.type";
import { myToast } from "@/utils/toastHandler";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ModalAddClass = ({ setTab }: { account: TAccount; setTab }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (dataForm) => {
    setLoading(true);
    try {
      const res = await classesService.create(dataForm);
      myToast.success(res.data.message?.[0]);
      setVisible(false);
      form.resetFields();
      router.refresh();
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
    setLoading(false);
  };

  return (
    <>
      <MyButton
        onClick={() => {
          setVisible(true);
          setTab(MyCardCustomerDetailTab.CLASSES);
        }}
        type="primary"
        ghost
      >
        Đăng tìm gia sư
      </MyButton>
      <MyModal
        onCancel={() => setVisible(false)}
        onOk={form.submit}
        width={650}
        title="Đăng tìm gia sư"
        open={visible}
        okLoading={loading}
      >
        <MyFormClass id="create-class" form={form} onFinish={handleSubmit} />
      </MyModal>
    </>
  );
};

export default ModalAddClass;
