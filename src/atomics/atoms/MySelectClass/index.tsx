import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_STUDENT_GRADE } from "@/constants/common";
import { objectToArray } from "@/utils/arrayHandler";
import React from "react";

export type TMySelectClassProps = {} & TMySelectProps;

const MySelectClass: React.FC<TMySelectClassProps> = ({ ...rest }) => {
  return (
    <MySelect
      placeholder="Chọn lớp"
      options={objectToArray(OBJ_STUDENT_GRADE).map((grade) => {
        return {
          label: grade.label,
          value: grade.value,
        };
      })}
      {...rest}
    />
  );
};

export default MySelectClass;
