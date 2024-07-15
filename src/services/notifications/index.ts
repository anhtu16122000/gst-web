import { MyPaginationDTO, TApiResponse } from "@/types/common.type";
import NotificationEntity from "@/types/entities/Notification.type";
import instance from "..";

const URL = "/notifications";

const notificationsService = {
  // POST/notifications/find-me
  me(params?: MyPaginationDTO) {
    return instance.post<
      TApiResponse<{
        notis: NotificationEntity[];
        total: number;
        totalUnread: number;
      }>
    >(`${URL}/find-me`, params);
  },
  // PUT/notifications/me/mark-read
  meMarkRead() {
    return instance.put<TApiResponse<any>>(`${URL}/me/mark-read`);
  },
};

export default notificationsService;
