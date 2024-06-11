import MyDivider from "@/bases/MyDivider";
import { TClass } from "@/types/entity.type";
import { BiHide } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import MyButtonAction from "../MyButtonAction";
import MyPopoverThreeDot, {
  TMyPopoverThreeDotProps,
} from "../MyPopoverThreeDot";

export type TMyPopoverThreeDotCardClass = {
  classProps: TClass;
  onClickEdit?: (_class: TClass) => void;
  onClickHide?: (_class: TClass) => void;
  onClickDelete?: (_class: TClass) => void;
} & Omit<TMyPopoverThreeDotProps, "content">;

const MyPopoverThreeDotCardClass: React.FC<TMyPopoverThreeDotCardClass> = (
  props,
) => {
  const { onClickEdit, onClickDelete, onClickHide, classProps, ...rest } =
    props;

  const content = ({ setOpen }) => (
    <div className="flex flex-col gap-1">
      <MyButtonAction
        Icon={<FiEdit size={16} className="text-amber-500	" />}
        label="Chỉnh sửa"
        onClick={() => {
          setOpen(false);
          if (typeof onClickEdit === "function") onClickEdit(classProps);
        }}
      />
      <MyDivider />
      <MyButtonAction
        Icon={<BiHide size={18} className="text-violet-500" />}
        label="Ẩn"
        onClick={() => {
          setOpen(false);
          if (typeof onClickHide === "function") onClickHide(classProps);
        }}
      />
      <MyDivider />
      <MyButtonAction
        Icon={<MdDelete size={18} className="text-rose-500" />}
        label="Xoá"
        onClick={() => {
          setOpen(false);
          if (typeof onClickDelete === "function") onClickDelete(classProps);
        }}
      />
    </div>
  );

  return (
    <MyPopoverThreeDot className="top-2 right-2" content={content} {...rest} />
  );
};

export default MyPopoverThreeDotCardClass;
