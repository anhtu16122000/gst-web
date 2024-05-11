"use client";
import MyInputNumberFormatter from "@/atomics/atoms/MyInputNumberFormatter";
import MySelectDistricts from "@/atomics/atoms/MySelectDistricts";
import MySelectProvinces from "@/atomics/atoms/MySelectProvinces";
import MySelectRequiredGender from "@/atomics/atoms/MySelectRequiredGender";
import MySelectSessionPerWeek from "@/atomics/atoms/MySelectSessionPerWeek";
import MySelectSubjects from "@/atomics/atoms/MySelectSubjects";
import MySelectTeachingMethod from "@/atomics/atoms/MySelectTeachingMethod";
import MySelectWards from "@/atomics/atoms/MySelectWards";
import MyUploadImage from "@/atomics/atoms/MyUploadImageSingle";
import MyButton from "@/bases/MyButton";
import MyDivider from "@/bases/MyDivider";
import MyForm from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import MyInput from "@/bases/MyInput";
import MyModal from "@/bases/MyModal";
import MyTextArea from "@/bases/MyTextArea";
import { RULE_REQUIRED } from "@/constants/common";
import { EditOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useWatch } from "antd/es/form/Form";
import { useState } from "react";

const ModalEdit = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const provinceCode = useWatch(["provinceCode"], form);
  const districtCode = useWatch(["districtCode"], form);

  const handleSubmit = async (dataForm) => {};

  return (
    <>
      <MyButton
        onClick={() => setVisible(true)}
        type="primary"
        icon={<EditOutlined />}
      >
        Chỉnh sửa hồ sơ
      </MyButton>
      <MyModal
        onCancel={() => setVisible(false)}
        width={800}
        title="Chỉnh sửa hồ sơ"
        open={visible}
      >
        <MyForm
          className="grid grid-cols-2 gap-x-3"
          form={form}
          onFinish={handleSubmit}
        >
          <MyFormItem
            name="avatar"
            className="col-span-2"
            rules={[RULE_REQUIRED]}
            label="Avatar"
            help="Ưu tiên ảnh chân dung, rõ mặt"
          >
            <MyUploadImage />
          </MyFormItem>
          <MyDivider className="col-span-2">Thông tin cơ bản</MyDivider>
          <MyFormItem name="salary" rules={[RULE_REQUIRED]} label="Họ và tên">
            <MyInputNumberFormatter />
          </MyFormItem>

          <MyFormItem
            name="sessionPerWeek"
            rules={[RULE_REQUIRED]}
            label="Ngày sinh"
          >
            <MySelectSessionPerWeek />
          </MyFormItem>
          <MyFormItem
            name="requiredGender"
            rules={[RULE_REQUIRED]}
            label="Giới tính"
          >
            <MySelectRequiredGender />
          </MyFormItem>
          <MyFormItem
            name="teachingMethod"
            rules={[RULE_REQUIRED]}
            label="Email"
          >
            <MySelectTeachingMethod />
          </MyFormItem>
          <MyFormItem
            label="Môn dạy"
            name="subjectCodes"
            rules={[RULE_REQUIRED]}
          >
            <MySelectSubjects allowClear />
          </MyFormItem>
          <MyFormItem
            className="col-span-1"
            name="address"
            rules={[RULE_REQUIRED]}
            label="Mức lương mong muốn"
          >
            <MyInputNumberFormatter />
          </MyFormItem>
          <MyFormItem
            className="col-span-2"
            name="address"
            rules={[RULE_REQUIRED]}
            label="Thư giới thiệu"
          >
            <MyTextArea rows={4} />
          </MyFormItem>
          <MyDivider className="col-span-2">Thông tin liên hệ</MyDivider>
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
          <MyFormItem className="col-span-2" name="address" label="Địa chỉ">
            <MyInput />
          </MyFormItem>
          <MyDivider className="col-span-2">Thông tin học vấn</MyDivider>
          <MyFormItem
            name="teachingMethod"
            rules={[RULE_REQUIRED]}
            label="Sinh viên năm"
          >
            <MySelectTeachingMethod />
          </MyFormItem>
          <MyFormItem
            name="teachingMethod"
            rules={[RULE_REQUIRED]}
            label="Sinh viên trường"
          >
            <MySelectTeachingMethod />
          </MyFormItem>
          <MyFormItem
            className="col-span-2"
            name="teachingMethod"
            rules={[RULE_REQUIRED]}
            label="Sinh viên ngành"
          >
            <MySelectTeachingMethod />
          </MyFormItem>
          <MyFormItem
            name="avatar"
            rules={[RULE_REQUIRED]}
            label="Mặt trước thẻ sinh viên"
          >
            <MyUploadImage />
          </MyFormItem>
          <MyFormItem
            name="avatar"
            rules={[RULE_REQUIRED]}
            label="Mặt sau thẻ sinh viên"
          >
            <MyUploadImage />
          </MyFormItem>
        </MyForm>
      </MyModal>
    </>
  );
};

export default ModalEdit;
