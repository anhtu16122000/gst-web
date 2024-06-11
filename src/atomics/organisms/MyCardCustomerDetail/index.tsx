import MyAvatar from "@/atomics/atoms/MyAvatar";
import MyButtonHTML from "@/bases/MyButtonHTML";
import MyCard, { TMyCardProps } from "@/bases/MyCard";
import MyDivider from "@/bases/MyDivider";
import { TAccount } from "@/types/entity.type";
import { getUrlImage } from "@/utils/imageHandler";
import classNames from "classnames";
import { FaChevronRight } from "react-icons/fa6";

export enum MyCardCustomerDetailTab {
  INFO = "INFO",
  CLASSES = "CLASSES",
}

export type TMyCardCustomerDetailProps = {
  account: TAccount;
  tab: MyCardCustomerDetailTab;
  onClickInfoTab: (tab: MyCardCustomerDetailTab) => void;
  onClickClassesTab: (tab: MyCardCustomerDetailTab) => void;
  customer: any;
  myCardProps?: TMyCardProps;
  TabInfo: React.ReactNode;
  TabClasses: React.ReactNode;
};

const MyCardCustomerDetail: React.FC<TMyCardCustomerDetailProps> = (props) => {
  const {
    customer,
    account,
    tab,
    TabInfo,
    TabClasses,
    onClickClassesTab,
    onClickInfoTab,
    myCardProps = {},
  } = props;

  return (
    <MyCard
      title={
        <div className="flex p-5 items-center gap-3">
          <MyAvatar
            size="2xl"
            src={getUrlImage(account?.avatar)}
            id={customer.id}
            lastName={account.lastName}
          />
          <div>
            <p>{`${account.firstName} ${account.lastName}`}</p>
            <p className="text-slate-800 font-light">{account?.email}</p>
          </div>
        </div>
      }
      {...myCardProps}
    >
      <div className="grid grid-cols-7 gap-3">
        <div className="col-span-2">
          <MyCard>
            <MyButtonHTML
              className={classNames(
                "flex w-full justify-between items-center text-lg p-3 rounded-lg cursor-pointer",
                tab === MyCardCustomerDetailTab.INFO
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200",
              )}
              onClick={() => onClickInfoTab(MyCardCustomerDetailTab.INFO)}
            >
              <p> Thông tin cá nhân</p>
              {tab === MyCardCustomerDetailTab.INFO && <FaChevronRight />}
            </MyButtonHTML>
            <MyDivider style={{ margin: "10px 0px" }} />
            <MyButtonHTML
              className={classNames(
                "flex w-full justify-between items-center text-lg p-3 rounded-lg cursor-pointer",
                tab === MyCardCustomerDetailTab.CLASSES
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200",
              )}
              onClick={() => onClickClassesTab(MyCardCustomerDetailTab.CLASSES)}
            >
              <p>Các lớp đã đăng</p>
              {tab === MyCardCustomerDetailTab.CLASSES && <FaChevronRight />}
            </MyButtonHTML>
          </MyCard>
        </div>
        <div className="col-span-5">
          <MyCard>
            {
              <>
                {tab === MyCardCustomerDetailTab.INFO && TabInfo}
                {tab === MyCardCustomerDetailTab.CLASSES && TabClasses}
              </>
            }
          </MyCard>
        </div>
      </div>
    </MyCard>
  );
};

export default MyCardCustomerDetail;
