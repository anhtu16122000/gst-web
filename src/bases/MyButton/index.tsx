import { Button } from "antd";
import { ButtonProps } from "antd/lib";
import React from "react";

type TMyButtonProps = {} & ButtonProps;

const MyButton: React.FC<TMyButtonProps> = (props) => {
  return <Button type="primary" size="large" {...props} />;
};

export default MyButton;
