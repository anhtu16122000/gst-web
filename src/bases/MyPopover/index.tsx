import { Popover, PopoverProps } from "antd";
import React from "react";

export type TMyPopoverProps = {} & PopoverProps;

const MyPopover: React.FC<TMyPopoverProps> = ({ children, ...rest }) => {
  return <Popover {...rest}>{children}</Popover>;
};

export default MyPopover;
