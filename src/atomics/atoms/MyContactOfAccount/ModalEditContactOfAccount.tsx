import MyFormContactOfAccount from "@/atomics/molecules/MyFormContactAccount";
import MyModal from "@/bases/MyModal";
import addressOfAccountService from "@/services/addressOfAccount";
import { myToast } from "@/utils/toastHandler";
import { useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

type TModalEditContactOfAccountProps = {
  currentData: {
    contactId: string;
    address: string;
    phoneNumber: string;
    districtCode: string;
    wardCode: string;
    provinceCode: string;
  };
};

const ModalEditContactOfAccount: React.FC<TModalEditContactOfAccountProps> = (
  props,
) => {
  const { currentData } = props;

  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const onFinish = async (dataForm) => {
    setLoading(true);
    try {
      const res = await addressOfAccountService.meUpdate(
        currentData?.contactId,
        dataForm,
      );
      myToast.success(res.data.message?.[0]);
      form.resetFields();
      setVisible(false);
      queryClient.invalidateQueries({
        queryKey: ["GET/address-of-account/me"],
      });
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(currentData as any);
    }
  }, [visible, currentData, form]);

  return (
    <>
      <div
        onClick={() => setVisible(true)}
        className="flex items-center p-2 hover:bg-slate-100 cursor-pointer rounded-lg gap-1"
      >
        <FiEdit size={16} className="text-amber-500	" /> <span>Chỉnh sửa</span>
      </div>
      <MyModal
        title="Chỉnh sửa địa chỉ"
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

export default ModalEditContactOfAccount;
