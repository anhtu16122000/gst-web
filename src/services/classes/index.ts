import { TApiResponse, TMyPagination } from "@/types/common.type";
import { TClass } from "@/types/entity.type";
import instance from "..";
import { TClassesCreate, TClassesFindAll } from "./classes.type";

const URL: string = `/classes`;
const classesService = {
  // POST/classes
  create(data: TClassesCreate) {
    return instance.post<TApiResponse<TClass>>(`${URL}`, data);
  },
  // GET/classes/me
  me(params: TMyPagination<{}>) {
    return instance.get<
      TApiResponse<{
        classes: TClass[];
        total: number;
      }>
    >(`${URL}/me`, {
      params,
    });
  },
  // PUT/classes/me/:id
  editMe(id: string, payload: Partial<TClassesCreate>) {
    return instance.put<TApiResponse<TClass>>(`${URL}/me/${id}`, payload);
  },
  //DELETE/classes/me/:id
  deleteMe(id: string) {
    return instance.delete<TApiResponse<TClass>>(`${URL}/me/${id}`);
  },
  //GET/classes/find-all
  getAll(params?: TClassesFindAll) {
    return instance.post<TApiResponse<{ data: TClass[]; total: number }>>(
      `${URL}/find-all`,
      params,
    );
  },
};

export default classesService;
