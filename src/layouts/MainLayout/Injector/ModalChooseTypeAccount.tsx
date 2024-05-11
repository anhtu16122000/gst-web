import MyButton from "@/bases/MyButton";
import MyModal from "@/bases/MyModal";
import { AccountType } from "@/constants/enum";
import accountService from "@/services/account";
import { myToast } from "@/utils/toastHandler";
import { useQueryClient } from "@tanstack/react-query";
import classNames from "classnames";
import { useState } from "react";
import { FcBusinessman, FcReading } from "react-icons/fc";

const ModalChooseTypeAccount = ({ accountId = "", fullName = "" }) => {
  const queryClient = useQueryClient();
  const [accountType, setAccountType] = useState<AccountType | "">("");
  const [loading, setLoading] = useState(false);

  const changeTypeAccount = async () => {
    setLoading(true);
    try {
      const res = await accountService.edit(accountId, {
        type: accountType,
      });
      queryClient.invalidateQueries({
        queryKey: ["GET/account/me"],
      });
      myToast.success("Thông tin tài khoản đã được cập nhật");
    } catch (error: any) {
      myToast.error(error?.message[0]);
    }
    setLoading(false);
  };

  return (
    <>
      <MyModal
        footer={null}
        title={`${fullName} ơi, hãy cho chúng tôi biết bạn là ai ?`}
        open={true}
        closable={false}
      >
        <div className="flex flex-col gap-3">
          <div
            onClick={() => {
              setAccountType(AccountType.CUSTOMER);
            }}
            className={classNames(
              `text-lg  p-3 cursor-pointer rounded-lg text-zinc-800	 text-semi-bold items-center flex gap-2`,
              {
                "bg-blue-300": accountType === AccountType.CUSTOMER,
                "hover:bg-gray-200": accountType !== AccountType.CUSTOMER,
              },
            )}
          >
            <FcBusinessman size={34} />
            <span>Tôi là phụ huynh</span>
          </div>
          <div
            onClick={() => {
              setAccountType(AccountType.TUTOR);
            }}
            className={classNames(
              `text-lg  p-3 x cursor-pointer rounded-lg text-zinc-800	 text-semi-bold items-center flex gap-2`,
              {
                "bg-blue-300": accountType === AccountType.TUTOR,
                "hover:bg-gray-200	": accountType !== AccountType.TUTOR,
              },
            )}
          >
            <FcReading size={34} />
            <span>Tôi là gia sư</span>
          </div>
          <MyButton
            disabled={!Boolean(accountType)}
            onClick={changeTypeAccount}
            loading={loading}
            size="large"
            className="!h-[48px]"
          >
            Đồng ý
          </MyButton>
        </div>
      </MyModal>
    </>
  );
};

export default ModalChooseTypeAccount;
