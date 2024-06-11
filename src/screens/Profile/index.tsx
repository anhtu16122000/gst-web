"use client";

import MyContainer from "@/atomics/atoms/MyContainer";
import MyCardTutorDetail, {
  MyCardTutorDetailTab,
} from "@/atomics/organisms/MyCardTutorDetail";

import { parseAsStringEnum, useQueryState } from "nuqs";
import ModalEdit from "./ModalEdit";
import { useMySelf } from "@/zustand/store";

const Profile = () => {
  const { data } = useMySelf();
  const [tab, setTab] = useQueryState(
    "tab",
    parseAsStringEnum<MyCardTutorDetailTab>(
      Object.values(MyCardTutorDetailTab),
    ).withDefault(MyCardTutorDetailTab.INFO),
  );

  return (
    <MyContainer>
      <MyCardTutorDetail
        tutor={data}
        account={data}
        tab={tab}
        onClickEducationTab={(tab) => {
          setTab(tab);
        }}
        onClickInfoTab={(tab) => {
          setTab(tab);
        }}
        myCardProps={{
          extra: <ModalEdit account={data} />,
        }}
      />
    </MyContainer>
  );
};

export default Profile;
