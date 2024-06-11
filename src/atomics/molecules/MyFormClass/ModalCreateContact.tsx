import MyButton from "@/bases/MyButton";
import MyModal from "@/bases/MyModal";
import addressOfAccountService from "@/services/addressOfAccount";
import { myToast } from "@/utils/toastHandler";
import { useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useState } from "react";
import MyFormContactOfAccount from "../MyFormContactAccount";

const ModalCreateContact = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const onFinish = async (dataForm) => {
    setLoading(true);
    try {
      const res = await addressOfAccountService.create(dataForm);
      myToast.success(res.data.message?.[0]);
      form.resetFields();
      queryClient.invalidateQueries({
        queryKey: ["GET/address-of-account/me"],
      });
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
    setLoading(false);
  };

  return (
    <>
      <MyButton onClick={() => setVisible(true)} type="primary">
        Tạo địa chỉ mới
      </MyButton>
      <MyModal
        title="Tạo địa chỉ mới"
        onCancel={() => setVisible(false)}
        open={visible}
        okLoading={loading}
        onOk={form.submit}
      >
        <MyFormContactOfAccount form={form} onFinish={onFinish} />
      </MyModal>
    </>
  );
};
export default ModalCreateContact;
