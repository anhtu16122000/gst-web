import { Select, SelectProps } from "antd";
import React from "react";

export type TMySelectProps = {} & SelectProps;

const MySelect: React.FC<TMySelectProps> = (props) => {
  return (
    <Select
      size="large"
      allowClear
      showSearch
      optionFilterProp="label"
      {...props}
    />
  );
};

export default MySelect;
