import MyPopover, { TMyPopoverProps } from "@/bases/MyPopover";
import React, { HTMLAttributes } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type TMyPopoverThreeDotProps = {
  content: React.ReactElement;
  myPopoverProps?: Omit<TMyPopoverProps, "children">;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

const MyPopoverThreeDot: React.FC<TMyPopoverThreeDotProps> = (props) => {
  const { content, myPopoverProps, className = "" } = props;

  return (
    <MyPopover content={content} placement="rightBottom" {...myPopoverProps}>
      <div
        className={`w-fit p-0.5 absolute top-1 right-1  rounded-full group-hover:bg-slate-100 ${className}`}
      >
        <BsThreeDotsVertical size={17} />
      </div>
    </MyPopover>
  );
};

export default MyPopoverThreeDot;
