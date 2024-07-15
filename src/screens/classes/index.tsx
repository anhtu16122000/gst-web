import MyContainer from "@/atomics/atoms/MyContainer";
import MyDivider from "@/bases/MyDivider";
import MyEmpty from "@/bases/MyEmpty";
import classesService from "@/services/classes";
import { searchParamsCached } from "./commonClasses";
import ClassesPagination from "./components/ClassesPagination";
import ClassItem from "./components/ClassItem";
import FilterSectionClasses from "./components/FilterSectionClasses";

const findClasses = async (query) => {
  const res = await classesService.getAll({
    limit: 10,
    page: 1,
    ...query,
  });
  return {
    classes: res?.data?.data.data || [],
    total: res?.data.data.total || 0,
  };
};

const Classes = async ({ params, searchParams }) => {
  const query = searchParamsCached.parse(searchParams);
  const { classes, total } = await findClasses(query);

  return (
    <MyContainer className="flex flex-col gap-3">
      <p className="text-xl">Danh sách lớp học</p>
      <div className="grid grid-cols-8 gap-3">
        <FilterSectionClasses />
        <div className="col-span-6 h-full">
          {classes.length === 0 && <MyEmpty />}
          {classes.map((_class, index) => {
            const { id, registerClasses } = _class;
            const listRegisterAccountId =
              registerClasses?.map((item) => item?.account?.id) || [];
            return (
              <div key={id}>
                <ClassItem
                  _class={_class}
                  listRegisterAccountId={listRegisterAccountId}
                />
                {index !== classes.length - 1 && (
                  <MyDivider style={{ margin: "14px 0px" }} />
                )}
              </div>
            );
          })}
          <div className="flex mt-2 justify-end">
            <ClassesPagination total={total} />
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Classes;
