import { TApiResponse } from "@/types/common.type";
import RegisterClassEntity from "@/types/entities/RegisterClass.type";
import instance from "..";

const URL = "/register-classes";

const registerClassesService = {
  // POST/register-classes/:classId/me
  register(classId: string) {
    return instance.post<TApiResponse<RegisterClassEntity>>(
      `${URL}/${classId}/me`,
    );
  },
  // DELETE/register-classes/:registerClassId/me
  unregister(registerClassId: string) {
    return instance.delete<TApiResponse<RegisterClassEntity>>(
      `${URL}/${registerClassId}/me`,
    );
  },
};

export default registerClassesService;
