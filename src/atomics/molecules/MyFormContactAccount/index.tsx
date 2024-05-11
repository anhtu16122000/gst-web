import MySelectDistricts from "@/atomics/atoms/MySelectDistricts";
import MySelectProvinces from "@/atomics/atoms/MySelectProvinces";
import MySelectWards from "@/atomics/atoms/MySelectWards";
import MyForm from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import MyInput from "@/bases/MyInput";
import { RULE_REQUIRED } from "@/constants/common";
import { useWatch } from "antd/es/form/Form";

const MyFormContactOfAccount = ({
  form,
  onFinish,
}: {
  form: any;
  onFinish: (values: any) => void;
}) => {
  const provinceCode = useWatch(["provinceCode"], form);
  const districtCode = useWatch(["districtCode"], form);

  return (
    <MyForm form={form} onFinish={onFinish}>
      <MyFormItem
        label="Số điện thoại"
        rules={[RULE_REQUIRED]}
        name="phoneNumber"
      >
        <MyInput />
      </MyFormItem>
      <MyFormItem
        label="Tỉnh/Thành phố"
        rules={[RULE_REQUIRED]}
        name="provinceCode"
      >
        <MySelectProvinces
          onChange={() => {
            form.setFieldsValue({
              districtCode: null,
              wardCode: null,
            });
          }}
        />
      </MyFormItem>
      <MyFormItem
        label="Quận/Huyện"
        rules={[RULE_REQUIRED]}
        name="districtCode"
      >
        <MySelectDistricts
          provinceCode={provinceCode}
          onChange={() => {
            form.setFieldValue("wardCode", null);
          }}
        />
      </MyFormItem>
      <MyFormItem label="Phường/Xã" rules={[RULE_REQUIRED]} name="wardCode">
        <MySelectWards districtCode={districtCode} />
      </MyFormItem>
      <MyFormItem name="address" label="Địa chỉ">
        <MyInput />
      </MyFormItem>
    </MyForm>
  );
};

export default MyFormContactOfAccount;
