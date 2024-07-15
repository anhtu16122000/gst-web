import MyContactOfAccount from "@/atomics/atoms/MyContactOfAccount";
import { OBJ_GENDER } from "@/constants/common";
import { TAccount } from "@/types/entity.type";
import ModalAddNewAddress from "./ModalAddNewAddress";

type TMyCustomerInfoProps = {
  account: TAccount;
  options?: {
    showCreateNewAddress: boolean;
  };
};

const MyCustomerInfo: React.FC<TMyCustomerInfoProps> = (props) => {
  const { account, options } = props;
  const { avatar, email, addressOfAccount = [], customer } = account || {};
  const { showCreateNewAddress = false } = options || {};

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 flex flex-col">
        <div className="text-gray-600 ">Giới thiệu</div>
        <div className="text-lg font-semibold ">
          {customer?.note || "Không có"}
        </div>
      </div>
      <div className="flex flex-col">
        <dt className="text-gray-600">Giới tính</dt>
        <dd className="text-lg font-semibold">
          {account?.gender ? OBJ_GENDER?.[account?.gender]?.label : "Không có"}
        </dd>
      </div>
      <div className="flex flex-col">
        <dt className="text-gray-600 ">Email</dt>
        <dd className="text-lg font-semibold">{email || "Không có"}</dd>
      </div>
      {addressOfAccount.map((item) => {
        const { address, id, province, district, ward, phoneNumber } =
          item || {};
        return (
          <MyContactOfAccount
            className="border p-2"
            key={id}
            address={address}
            contactId={id}
            district={district}
            phoneNumber={phoneNumber}
            province={province}
            ward={ward}
          />
        );
      })}
      {showCreateNewAddress && <ModalAddNewAddress />}
    </div>
  );
};

export default MyCustomerInfo;
