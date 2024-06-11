import MySelect, { TMySelectProps } from "@/bases/MySelect";
import { OBJ_TUTOR_MAJOR } from "@/constants/common";

type TMySelectTutorMajorProps = {} & TMySelectProps;

const MySelectTutorMajor: React.FC<TMySelectTutorMajorProps> = (props) => {
  return (
    <MySelect
      options={Object.keys(OBJ_TUTOR_MAJOR).map((key) => {
        return {
          label: OBJ_TUTOR_MAJOR[key].label,
          value: OBJ_TUTOR_MAJOR[key].value,
        };
      })}
      {...props}
    />
  );
};

export default MySelectTutorMajor;
