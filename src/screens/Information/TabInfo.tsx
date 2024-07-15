import MyCustomerInfo from "@/atomics/molecules/MyCustomerInfo";
import { TAccount } from "@/types/entity.type";

type TTabInfoProps = {
  customer: any;
  account: TAccount;
};

const TabInfo: React.FC<TTabInfoProps> = (props) => {
  const { account, customer } = props;
  return (
    <MyCustomerInfo
      options={{
        showCreateNewAddress: true,
      }}
      account={account}
    />
  );
};

export default TabInfo;
