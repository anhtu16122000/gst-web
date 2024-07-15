"use client";

import MyButtonHTML from "@/bases/MyButtonHTML";
import { HeartTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";

const CancelRegisterButton = ({ onClick }) => {
  return (
    <Tooltip title="Chưa chọn lớp">
      <MyButtonHTML onClick={onClick}>
        <HeartTwoTone
          style={{
            fontSize: 30,
          }}
          twoToneColor="#dedede"
        />
      </MyButtonHTML>
    </Tooltip>
  );
};

export default CancelRegisterButton;
