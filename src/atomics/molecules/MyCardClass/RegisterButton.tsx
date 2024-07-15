"use client";

import MyButtonHTML from "@/bases/MyButtonHTML";
import { HeartTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";

const RegisterButton = ({ onClick }) => {
  return (
    <Tooltip title="Đã chọn lớp">
      <MyButtonHTML onClick={onClick}>
        <HeartTwoTone
          style={{
            fontSize: 30,
          }}
          twoToneColor="#eb2f96"
        />
      </MyButtonHTML>
    </Tooltip>
  );
};

export default RegisterButton;
