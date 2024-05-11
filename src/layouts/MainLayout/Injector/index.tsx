"use client";
import useMySelf from "@/hooks/useMySeft";
import ModalChooseTypeAccount from "./ModalChooseTypeAccount";

const Injector = () => {
  const { data, isAuthenticated, isLoading } = useMySelf();
  const fullName = `${data?.firstName || ""} ${data?.lastName || ""}`;
  return (
    <>
      {isAuthenticated && !isLoading && !Boolean(data?.type) && (
        <ModalChooseTypeAccount accountId={data?.id} fullName={fullName} />
      )}
    </>
  );
};

export default Injector;
