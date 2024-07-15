import MyButtonAddressCreate from "@/atomics/atoms/MyButtonAddressCreate";
import MyFormContactOfAccount from "@/atomics/molecules/MyFormContactAccount";
import MyModal from "@/bases/MyModal";
import addressOfAccountService from "@/services/addressOfAccount";
import { myToast } from "@/utils/toastHandler";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ModalAddNewAddress = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (dataForm) => {
    setLoading(true);
    try {
      const res = await addressOfAccountService.create(dataForm);
      myToast.success(res.data.message?.[0]);
      form.resetFields();
      router.refresh();
      setVisible(false);
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
    setLoading(false);
  };

  return (
    <>
      <MyButtonAddressCreate
        myButtonHTML={{
          onClick: () => {
            setVisible(true);
          },
        }}
      />
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

export default ModalAddNewAddress;
