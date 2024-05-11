import instance, { TApiResponse, TMyPagination } from "..";
import { TClass, TClassesCreate } from "./classes.type";

const URL: string = `/classes`;
const classesService = {
  create(data: TClassesCreate) {
    return instance.post<TApiResponse<TClass>>(`${URL}`, data);
  },
  getAll(params: TMyPagination<{}>) {
    return instance.get<
      TApiResponse<{
        classes: TClass[];
        total: number;
      }>
    >(`${URL}`, {
      params,
    });
  },
};

export default classesService;
