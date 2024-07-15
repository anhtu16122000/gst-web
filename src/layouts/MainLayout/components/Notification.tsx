"use client";

import MyBadge from "@/bases/MyBadge";
import MyButton from "@/bases/MyButton";
import MyButtonHTML from "@/bases/MyButtonHTML";
import MyDivider from "@/bases/MyDivider";
import MyEmpty from "@/bases/MyEmpty";
import MyModal from "@/bases/MyModal";
import notificationsService from "@/services/notifications";
import { NOTIFICATION_STATUS } from "@/types/enum";
import { myToast } from "@/utils/toastHandler";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Spin } from "antd";
import moment from "moment";
import React, { useState } from "react";
import ReactHTMLParser from "react-html-parser";
import { FaCheckDouble } from "react-icons/fa6";
import { MdNotifications } from "react-icons/md";

const Notification = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const { data, isLoading } = useQuery({
    queryKey: ["POST/notifications/find-me"],
    queryFn: () => notificationsService.me(),
    staleTime: Infinity,
    refetchOnWindowFocus: true,
    refetchInterval: 30 * 1000,
  });
  const markRead = useMutation({
    mutationFn: async () => notificationsService.meMarkRead(),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["POST/notifications/find-me"],
      });
      myToast.success(data?.data?.message?.[0]);
    },
    onError: (error) => {
      myToast.error(error?.message?.[0]);
    },
  });

  const notifications = data?.data?.data?.notis || [];
  const total = data?.data?.data?.total || 0;
  const totalUnread = data?.data?.data?.totalUnread || 0;

  return (
    <>
      <MyBadge count={totalUnread} offset={[-5, 5]}>
        <MyButtonHTML
          onClick={() => setOpen(true)}
          className=" h-full bg-slate-100 py-1 px-2.5 rounded-full"
        >
          <MdNotifications size={24} />
        </MyButtonHTML>
      </MyBadge>
      <MyModal
        footer={null}
        onCancel={() => setOpen(false)}
        title={
          <div className="flex justify-between items-center">
            <p>Danh sách thông báo</p>
            <MyButton
              loading={markRead.isPending}
              icon={<FaCheckDouble className="text-blue-500" />}
              size="small"
              type="text"
              onClick={() => markRead.mutate()}
            >
              Đã đọc tất cả
            </MyButton>
          </div>
        }
        open={open}
      >
        <Spin spinning={isLoading}>
          <div className="flex flex-col gap-3">
            {notifications.length === 0 && <MyEmpty />}
            {notifications.map((noti, index) => {
              const { createdAt, description, status, title, id } = noti;
              const isLast = index === notifications.length - 1;
              return (
                <React.Fragment key={id}>
                  <div className="hover:bg-blue-50 p-3 rounded-md">
                    <div className="flex justify-between">
                      <p className="text-slate-950 text-md font-medium">
                        {title}
                      </p>{" "}
                      <div className="flex gap-2 items-center">
                        <p className=" text-gray-500 text-right">
                          {moment(createdAt).fromNow()}
                        </p>
                        {status === NOTIFICATION_STATUS.UNREAD && (
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        )}
                      </div>
                    </div>
                    {description && (
                      <p className="text-gray-700 text-sm whitespace-pre-wrap">
                        {ReactHTMLParser(description)}
                      </p>
                    )}
                  </div>
                  {!isLast && <MyDivider />}
                </React.Fragment>
              );
            })}
          </div>
        </Spin>
      </MyModal>
    </>
  );
};

export default Notification;
