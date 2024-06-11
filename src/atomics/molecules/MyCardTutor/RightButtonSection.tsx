"use client";

import MyButtonHTML from "@/bases/MyButtonHTML";
import { HeartTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";

const RightButtonSection = () => {
  return (
    <Tooltip title="Chọn gia sư">
      <MyButtonHTML>
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

export default RightButtonSection;
