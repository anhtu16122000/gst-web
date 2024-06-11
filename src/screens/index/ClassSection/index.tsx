"use server";

import MyCardClass from "@/atomics/molecules/MyCardClass";
import classesService from "@/services/classes";

const ClassSection = async () => {
  const resClasses = await classesService.getAll({ page: 1, limit: 20 });
  const classes = resClasses?.data?.data?.classes || [];

  return (
    <div className="grid grid-cols-1 gap-3">
      {classes.map((_class) => {
        const { id } = _class;
        return <MyCardClass key={id} classProps={_class} />;
      })}
    </div>
  );
};

export default ClassSection;
