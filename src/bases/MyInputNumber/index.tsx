import { InputNumber, InputNumberProps } from "antd";
import React from "react";

export type TMyInputNumberProps = {} & InputNumberProps;

const MyInputNumber: React.FC<TMyInputNumberProps> = (props) => {
  return <InputNumber style={{ width: "100%" }} {...props} />;
};

export default MyInputNumber;
