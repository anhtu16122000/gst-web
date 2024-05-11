"use client";
import useMySelf from "@/hooks/useMySeft";
import { addTokenInstance } from "@/services";
import { handleShallowLogout } from "@/utils/common";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { notification } from "antd";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { SessionProvider } from "next-auth/react";
import { createRef, useLayoutEffect } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

export const notificationInstanceRef: any = createRef();

const ClientProviderInner = ({ children, session }) => {
  const accessToken = getCookie("access_token");
  useMySelf();

  useLayoutEffect(() => {
    try {
      const dataDecoded = jwtDecode(accessToken as string);
      const nowMilliseconds = new Date().getTime();
      const isExpired = (dataDecoded?.exp || 0) * 1000 < nowMilliseconds;

      if (!accessToken || isExpired) {
        handleShallowLogout();
        return;
      }

      addTokenInstance(accessToken as string);
    } catch (error) {
      handleShallowLogout();
    }
  }, [accessToken]);

  return <SessionProvider session={session}>{children}</SessionProvider>;
};

const ClientProvider = ({ children, session }) => {
  const [api, contextHolder] = notification.useNotification();
  useLayoutEffect(() => {
    notificationInstanceRef.current = api;
  }, [api]);

  return (
    <QueryClientProvider client={queryClient}>
      {contextHolder}
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-right" />
      <ClientProviderInner session={session}>{children}</ClientProviderInner>
    </QueryClientProvider>
  );
};

export default ClientProvider;
