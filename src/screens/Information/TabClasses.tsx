import MyPopoverThreeDotCardClass from "@/atomics/atoms/MyPopoverThreeDotCardClass";
import MyCardClass from "@/atomics/molecules/MyCardClass";
import MyEmpty from "@/bases/MyEmpty";
import classesService from "@/services/classes";
import { TClass } from "@/types/entity.type";
import { confirmDelete } from "@/utils/confirm";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ModalEditClass from "./components/ModalEditClass";

type TTabClassesProps = {
  classes: TClass[];
};

const TabClasses: React.FC<TTabClassesProps> = (props) => {
  const { classes = [] } = props;
  const router = useRouter();
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<TClass>();

  const deleteClass = useMutation({
    mutationFn: (id: string) => classesService.deleteMe(id),
    onSuccess: () => {
      router.refresh();
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  return (
    <div className="flex flex-col gap-3">
      {classes.length === 0 && <MyEmpty />}
      {classes.map((classProps) => (
        <MyCardClass
          extendHandler={(_class) => (
            <MyPopoverThreeDotCardClass
              classProps={classProps}
              onClickEdit={(_class) => {
                setOpenEdit(true);
                setSelectedClass(_class);
              }}
              onClickDelete={() => {
                confirmDelete({
                  onOk: () => {
                    deleteClass.mutateAsync(classProps.id);
                  },
                });
              }}
            />
          )}
          key={classProps.id}
          classProps={classProps}
        />
      ))}
      {selectedClass && (
        <ModalEditClass
          open={openEdit}
          data={selectedClass as any}
          setOpen={setOpenEdit}
        />
      )}
    </div>
  );
};

export default TabClasses;
