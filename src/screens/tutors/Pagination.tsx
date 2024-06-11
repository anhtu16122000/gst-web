"use client";

import MyPagination from "@/bases/MyPagination";
import { useQueryStates } from "nuqs";
import { searchOptions } from "./common";

const Pagination = ({ page, total }) => {
  const [queryStates, setQueryStates] = useQueryStates(
    { page: searchOptions.page },
    {
      shallow: false,
    },
  );
  return (
    <MyPagination
      current={page}
      total={total}
      onChange={(page) =>
        setQueryStates({
          page: page,
        })
      }
    />
  );
};

export default Pagination;
