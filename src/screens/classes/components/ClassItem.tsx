"use client";

import MyCardClass from "@/atomics/molecules/MyCardClass";
import { AccountType } from "@/constants/enum";
import registerClassesService from "@/services/registerClass";
import ClassEntity from "@/types/entities/class.type";
import { myToast } from "@/utils/toastHandler";
import { useMySelf } from "@/zustand/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const ClassItem = ({
  _class,
  listRegisterAccountId,
}: {
  _class: ClassEntity;
  listRegisterAccountId;
}) => {
  const { registerClasses = [] } = _class;
  const accountType = useMySelf((state) => state.data.type);
  const accountId = useMySelf((state) => state.data.id);
  const registerClassId = registerClasses.find(
    (item) => item?.account?.id === accountId,
  )?.id;
  const isTutor = accountType === AccountType.TUTOR;
  const router = useRouter();

  const register = useMutation({
    mutationFn: () => registerClassesService.register(_class.id),
    onSuccess: (data) => {
      myToast.success(data?.data?.message?.[0]);
      router.refresh();
    },
    onError: (error: any) => {
      myToast.error(error?.message?.[0]);
    },
  });
  const unRegister = useMutation({
    mutationFn: (registerClassId: string) =>
      registerClassesService.unregister(registerClassId),
    onSuccess: (data) => {
      myToast.success(data?.data?.message?.[0]);
      router.refresh();
    },
    onError: (error: any) => {
      myToast.error(error?.message?.[0]);
    },
  });

  return (
    <MyCardClass
      classProps={_class}
      options={{
        showRegisterButton:
          isTutor && listRegisterAccountId.includes(accountId),
        showCancelRegisterButton:
          isTutor && !listRegisterAccountId.includes(accountId),
      }}
      onCancelRegister={() => unRegister.mutate(registerClassId as string)}
      onRegister={() => register.mutate()}
    />
  );
};

export default ClassItem;
