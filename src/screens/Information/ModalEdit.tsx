"use client";

import MyButton from "@/bases/MyButton";
import MyModal from "@/bases/MyModal";
import { EditOutlined } from "@ant-design/icons";

import MyFormCustomerInfo from "@/atomics/molecules/MyFormCustomerInfo";
import accountService from "@/services/account";
import { TAccount } from "@/types/entity.type";
import { myToast } from "@/utils/toastHandler";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ModalEdit = ({ account }: { account: TAccount }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (dataForm) => {
    setLoading(true);
    try {
      const res = await accountService.editCustomer(dataForm);
      myToast.success(res.data.message?.[0]);
      setVisible(false);
      router.refresh();
    } catch (error: any) {
      myToast.error(error?.message[0]);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (visible) {
      form.setFieldsValue(account);
    }
  }, [visible]);

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
        width={650}
        title="Cập nhật hồ sơ"
        open={visible}
        okLoading={loading}
      >
        <MyFormCustomerInfo form={form} onFinish={handleSubmit} />
      </MyModal>
    </>
  );
};

export default ModalEdit;
