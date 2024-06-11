"use client";
import authHandler from "@/utils/authHandler";
import { getQueryClient } from "@/utils/common";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { useLayoutEffect } from "react";
import { Toaster } from "sonner";

export const queryClient = getQueryClient();

const ClientProvider = ({ children, session }) => {
  const accessToken = authHandler.getToken();

  useLayoutEffect(() => {
    authHandler.injectTokenClientSide(accessToken.accessToken);
  }, [accessToken]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster closeButton richColors />

      <ReactQueryDevtools initialIsOpen={false} />
      <SessionProvider session={session}>{children}</SessionProvider>
    </QueryClientProvider>
  );
};

export default ClientProvider;
