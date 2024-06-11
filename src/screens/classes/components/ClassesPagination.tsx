"use client";
import MyPagination from "@/bases/MyPagination";
import { useQueryStates } from "nuqs";
import { searchOptions } from "../commonClasses";

const ClassesPagination = ({ total }) => {
  const [queryStates, setQueryStates] = useQueryStates(searchOptions, {
    shallow: false,
  });
  return (
    <MyPagination
      current={queryStates.page}
      onChange={(page) => {
        setQueryStates({
          page: page,
        });
      }}
      total={total}
    />
  );
};

export default ClassesPagination;
