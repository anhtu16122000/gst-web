import { Alert } from "antd";
import { AlertProps } from "antd/lib";
import React from "react";

type TMyAlertProps = {} & AlertProps;

const MyAlert: React.FC<TMyAlertProps> = (props) => {
  return <Alert {...props} />;
};

export default MyAlert;
