"use client";

import MyContainer from "@/atomics/atoms/MyContainer";
import MyCardCustomerDetail, {
  MyCardCustomerDetailTab,
} from "@/atomics/organisms/MyCardCustomerDetail";
import { TClass } from "@/types/entity.type";
import { useMySelf } from "@/zustand/store";
import { parseAsStringEnum, useQueryState } from "nuqs";
import ModalEdit from "./ModalEdit";
import TabClasses from "./TabClasses";
import TabInfo from "./TabInfo";
import ModalAddClass from "./components/ModalAddClass";

const Information = ({ classes }: { classes: TClass[] }) => {
  const { data } = useMySelf();
  const [tab, setTab] = useQueryState(
    "tab",
    parseAsStringEnum<MyCardCustomerDetailTab>(
      Object.values(MyCardCustomerDetailTab),
    ).withDefault(MyCardCustomerDetailTab.INFO),
  );

  return (
    <MyContainer>
      <MyCardCustomerDetail
        customer={data}
        account={data}
        tab={tab}
        onClickClassesTab={(tab) => {
          setTab(tab);
        }}
        onClickInfoTab={(tab) => {
          setTab(tab);
        }}
        myCardProps={{
          extra: (
            <div className="flex gap-2">
              <ModalAddClass setTab={setTab} account={data} />
              <ModalEdit account={data} />
            </div>
          ),
        }}
        TabClasses={<TabClasses classes={classes} />}
        TabInfo={<TabInfo account={data} customer={data} />}
      />
    </MyContainer>
  );
};

export default Information;
