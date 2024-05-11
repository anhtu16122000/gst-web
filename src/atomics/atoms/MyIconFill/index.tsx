import React from "react";

export type TMyIconFillProps = {
  Icon: React.ReactNode;
  className?: string;
};

const MyIconFill: React.FC<TMyIconFillProps> = (props) => {
  const { Icon, className = "" } = props;
  return (
    <div
      className={`p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer w-fit rounded-full border border-gray-400 ${className}`}
    >
      {Icon}
    </div>
  );
};

export default MyIconFill;
