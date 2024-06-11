"use client";

import { useMySelf } from "@/zustand/store";
import ModalChooseTypeAccount from "./ModalChooseTypeAccount";

const Injector = () => {
  const { data } = useMySelf();
  const fullName = `${data?.firstName || ""} ${data?.lastName || ""}`;
  return (
    <>
      {data.id && !Boolean(data?.type) && (
        <ModalChooseTypeAccount accountId={data?.id} fullName={fullName} />
      )}
    </>
  );
};

export default Injector;
