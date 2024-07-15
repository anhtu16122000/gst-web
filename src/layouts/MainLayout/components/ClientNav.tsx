"use client";

import { AccountType } from "@/constants/enum";
import { useMySelf } from "@/zustand/store";
import { MenuItem } from "../Header";

const ClientNav = ({ pathname }) => {
  const typeAccount = useMySelf((state) => state.data.type);

  if (typeAccount == AccountType.CUSTOMER) {
    return (
      <MenuItem
        link={`/information/?tab=CLASSES`}
        text="Bài đã đăng"
        theLast
        isActive={"/posted" === pathname}
      />
    );
  }

  return <></>;
};

export default ClientNav;
