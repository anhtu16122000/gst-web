import MyDivider from "@/bases/MyDivider";
import MyImage from "@/bases/MyImage";
import MyPopover from "@/bases/MyPopover";
import { TMeAccount } from "@/services/account/account.type";
import { handleShallowLogout } from "@/utils/common";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";

import { IoChevronDown } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";

const AccountInfo = ({ account }: { account: TMeAccount }) => {
  const { avatar, email, fullName } = account;
  const router = useRouter();
  console.log("avatar", avatar);
  const logout = () => {
    router.push("/login");
    handleShallowLogout();
  };

  const content = (
    <div className="flex flex-col gap-2">
      <div className="px-3 py-2">
        <p className="text-lg text-blue-600">{fullName}</p>
        <p className="text-md text-gray-600">{email}</p>
      </div>
      <MyDivider />
      <div className="flex flex-col gap-3">
        <div
          onClick={() => {
            router.push("/profile");
          }}
          className="flex cursor-pointer gap-2 px-3 py-2 bg-gray-50 rounded-lg items-center"
        >
          <CgProfile size={22} className="text-blue-600" />{" "}
          <p className="text-lg font-light text-gray-800">Thông tin cá nhân</p>
        </div>
        <div
          onClick={logout}
          className="flex cursor-pointer gap-1 px-3 py-2 bg-gray-50 rounded-lg items-center"
        >
          <RiLogoutBoxRLine size={21} className="text-blue-600" />{" "}
          <p className="ml-1.5 text-lg font-light text-red-600">Đăng xuất</p>
        </div>
      </div>
    </div>
  );

  return (
    <MyPopover className="group" content={content}>
      <div className="bg-slate-100 px-2.5 py-2  rounded-3xl p-ripple flex cursor-pointer gap-2 items-center">
        <MyImage
          className="rounded-full"
          // src={account?.avatar}
          alt={`ảnh đại hiện của ${account?.fullName}`}
          width={32}
          height={32}
        />
        <div>
          <div>{account?.fullName}</div>
        </div>
        <IoChevronDown className="group-hover:rotate-[-180deg] transition	 text-blue-600" />
      </div>
    </MyPopover>
  );
};

export default AccountInfo;
