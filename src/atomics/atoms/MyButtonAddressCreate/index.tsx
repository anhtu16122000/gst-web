import MyButtonHTML, { TMyButtonHTMLProps } from "@/bases/MyButtonHTML";
import { PlusCircleTwoTone } from "@ant-design/icons";
import classNames from "classnames";

export type TMyButtonAddressCreateProps = {
  myButtonHTML?: TMyButtonHTMLProps;
};

const MyButtonAddressCreate: React.FC<TMyButtonAddressCreateProps> = (
  props,
) => {
  const { myButtonHTML = {} } = props || {};
  const { className: classNameMyButtonHTML, ...restMyButtonHTML } =
    myButtonHTML;

  return (
    <MyButtonHTML
      className={`flex border rounded-md min-h-20 p-2 justify-center items-center  group flex-col hover:bg-slate-100 ${classNames(
        classNameMyButtonHTML,
      )}`}
      {...restMyButtonHTML}
    >
      <PlusCircleTwoTone className="text-lg group-hover:scale-105 transition" />{" "}
      <p className="text-md !text-gray-700 group-hover:scale-105 transition">
        Thêm địa chỉ mới
      </p>
    </MyButtonHTML>
  );
};

export default MyButtonAddressCreate;
