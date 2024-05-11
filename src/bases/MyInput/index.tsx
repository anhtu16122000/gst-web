import { Input, InputProps } from "antd";
import React from "react";

type TMyInputProps = {} & InputProps;

const MyInput: React.FC<TMyInputProps> = (props) => {
  return <Input {...props} />;
};

export default MyInput;
