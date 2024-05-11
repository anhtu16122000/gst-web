import React from "react";
import MyIconFill, { TMyIconFillProps } from "../MyIconFill";

type TMyIconWithDescriptionProps = {
  className?: string;
  myIconFillProps: TMyIconFillProps;
  Title?: React.ReactNode;
  Description: React.ReactNode;
};

const MyIconWithDescription: React.FC<TMyIconWithDescriptionProps> = (
  props,
) => {
  const { myIconFillProps, className = "", Title, Description } = props;

  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <MyIconFill {...myIconFillProps} />
      <div>
        {Title && <p className="text-xs text-gray-600">{Title}</p>}
        <p className="text-sm text-gray-800">{Description}</p>
      </div>
    </div>
  );
};

export default MyIconWithDescription;
