"use client";

import MyCardTutorDetail, {
  MyCardTutorDetailTab,
} from "@/atomics/organisms/MyCardTutorDetail";
import { parseAsStringEnum, useQueryState } from "nuqs";

const TutorDetail = ({ tutorDetail }) => {
  const [tab, setTab] = useQueryState(
    "tab",
    parseAsStringEnum<MyCardTutorDetailTab>(
      Object.values(MyCardTutorDetailTab),
    ).withDefault(MyCardTutorDetailTab.INFO),
  );
  return (
    <MyCardTutorDetail
      account={tutorDetail.account}
      tutor={tutorDetail}
      tab={tab}
      onClickEducationTab={(tab) => {
        setTab(tab);
      }}
      onClickInfoTab={(tab) => {
        setTab(tab);
      }}
    />
  );
};

export default TutorDetail;
