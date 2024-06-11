import MyButtonHTML from "@/bases/MyButtonHTML";
import addressOfAccountService from "@/services/addressOfAccount";
import {
  TDistrict,
  TProvince,
  TWard,
} from "@/services/vietnamese-region/vietnamese-region.type";
import { confirmDelete } from "@/utils/confirm";
import { myToast } from "@/utils/toastHandler";
import { useQueryClient } from "@tanstack/react-query";
import { HTMLAttributes } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import MyPopoverThreeDot from "../MyPopoverThreeDot";
import ModalEditContactOfAccount from "./ModalEditContactOfAccount";

type TMyContactOfAccountProps = {
  contactId: string;
  address: string;
  phoneNumber: string;
  district: Partial<TDistrict>;
  ward: Partial<TWard>;
  province: Partial<TProvince>;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

const MyContactOfAccount: React.FC<TMyContactOfAccountProps> = (props) => {
  const {
    className = "",
    contactId,
    phoneNumber,
    address,
    ward,
    district,
    province,
  } = props;

  const queryClient = useQueryClient();

  const handleDelete = async (id) => {
    try {
      const res = await addressOfAccountService.meDelete(id);
      myToast.success(res?.data?.message?.[0]);
      queryClient.invalidateQueries({
        queryKey: ["GET/address-of-account/me"],
      });
    } catch (error: any) {
      myToast.error(error?.message[0]);
    }
  };

  const content = ({ setOpen }) => (
    <div className="flex flex-col gap-1">
      <ModalEditContactOfAccount
        setOpen={setOpen}
        currentData={{
          address: address,
          phoneNumber: phoneNumber,
          contactId: contactId,
          districtCode: district.code as string,
          wardCode: ward.code as string,
          provinceCode: province.code as string,
        }}
      />
      <MyButtonHTML
        onClick={() =>
          confirmDelete({
            onOk: () => handleDelete(contactId),
          })
        }
        className="flex items-center p-2 hover:bg-slate-100 cursor-pointer rounded-lg gap-1"
      >
        <MdDelete size={18} className="text-rose-500	" /> <span>Xoá</span>
      </MyButtonHTML>
    </div>
  );

  return (
    <div
      className={`bg-[#fff] w-full h-full group  relative p-3 rounded-lg ${className}`}
    >
      <MyPopoverThreeDot className="top-2 right-2" content={content} />
      <div className="flex gap-2 items-center">
        <FaPhone fontSize={13} /> <span>{phoneNumber}</span>
      </div>
      <div className="flex gap-2 items-start ">
        <FaLocationDot fontSize={16} className="mt-1" />{" "}
        <span>
          {address}, {province.fullName}, {district.fullName},{" "}
          {province.fullName}
        </span>
      </div>
    </div>
  );
};

export default MyContactOfAccount;
