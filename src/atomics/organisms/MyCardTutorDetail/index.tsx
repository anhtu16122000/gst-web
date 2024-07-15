import MyAvatar from "@/atomics/atoms/MyAvatar";
import MyTutorEducation from "@/atomics/molecules/MyTutorEducation";
import MyTutorInfo from "@/atomics/molecules/MyTutorInfo";
import MyButtonHTML from "@/bases/MyButtonHTML";
import MyCard, { TMyCardProps } from "@/bases/MyCard";
import MyDivider from "@/bases/MyDivider";
import { TAccount, TTutor } from "@/types/entity.type";
import { getUrlImage } from "@/utils/imageHandler";
import classNames from "classnames";
import { FaChevronRight } from "react-icons/fa6";

export enum MyCardTutorDetailTab {
  INFO = "INFO",
  EDUCATION = "EDUCATION",
}

export type TMyCardTutorDetailProps = {
  account: TAccount;
  tab: MyCardTutorDetailTab;
  onClickInfoTab: (tab: MyCardTutorDetailTab) => void;
  onClickEducationTab: (tab: MyCardTutorDetailTab) => void;
  tutor?: TTutor;
  myCardProps?: TMyCardProps;
};

const MyCardTutorDetail: React.FC<TMyCardTutorDetailProps> = (props) => {
  const {
    tutor,
    account,
    tab,
    onClickEducationTab,
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
            id={account.id}
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
                tab === "INFO" ? "bg-blue-500 text-white" : "hover:bg-gray-200",
              )}
              onClick={() => onClickInfoTab(MyCardTutorDetailTab.INFO)}
            >
              <p> Thông tin cá nhân</p>
              {tab === "INFO" && <FaChevronRight />}
            </MyButtonHTML>
            <MyDivider style={{ margin: "10px 0px" }} />
            <button
              className={classNames(
                "flex w-full justify-between items-center text-lg p-3 rounded-lg cursor-pointer",
                tab === "EDUCATION"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200",
              )}
              onClick={() =>
                onClickEducationTab(MyCardTutorDetailTab.EDUCATION)
              }
            >
              <p>Học vấn/ bằng cấp</p>
              {tab === "EDUCATION" && <FaChevronRight />}
            </button>
          </MyCard>
        </div>
        <div className="col-span-5">
          <MyCard>
            {
              <>
                {tab === "INFO" && (
                  <MyTutorInfo email={account?.email} tutor={account?.tutor} />
                )}
                {tab === "EDUCATION" && (
                  <MyTutorEducation
                    fullName={`${account.firstName} ${account.lastName}`}
                    tutor={tutor}
                  />
                )}
              </>
            }
          </MyCard>
        </div>
      </div>
    </MyCard>
  );
};

export default MyCardTutorDetail;
