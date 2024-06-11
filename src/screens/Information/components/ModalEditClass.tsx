import MyFormClass from "@/atomics/molecules/MyFormClass";
import MyModal from "@/bases/MyModal";
import classesService from "@/services/classes";
import { TClassesCreate } from "@/services/classes/classes.type";
import { TClass } from "@/types/entity.type";
import { myToast } from "@/utils/toastHandler";
import { useMutation } from "@tanstack/react-query";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type TModalEditClassProps = {
  data: TClass;
  open;
  setOpen;
};

const ModalEditClass: React.FC<TModalEditClassProps> = (props) => {
  const { open, data, setOpen } = props;
  const { subjectClass = [], addressOfAccount, id } = data || {};

  const router = useRouter();
  const [form] = Form.useForm();

  const mutateClass = useMutation({
    mutationFn: (data: Partial<TClassesCreate>) =>
      classesService.editMe(id, data),
    onSuccess: () => {
      router.refresh();
      setOpen(false);
    },
    onError: (error: any) => {
      myToast.error(error?.message?.[0]);
    },
  });

  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        ...data,
        subjectCodes: subjectClass.map((subject) => subject.subjectCode),
        addressOfAccountId: addressOfAccount.id,
      });
    }
  }, [open, data, form, subjectClass, addressOfAccount]);

  const onFinish = (values) => {
    mutateClass.mutateAsync(values);
  };

  return (
    <MyModal
      key={data.id}
      width={800}
      title="Chỉnh sửa bài đăng"
      open={open}
      onOk={form.submit}
      okLoading={mutateClass.isPending}
      onCancel={() => setOpen(false)}
    >
      <MyFormClass onFinish={onFinish} form={form} />
    </MyModal>
  );
};

export default ModalEditClass;
