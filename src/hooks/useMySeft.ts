import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import accountService from "../services/account";
import { TMeAccount } from "../services/account/account.type";

export type TMySelf = {
  data: TMeAccount & { fullName: string };
  isLoading: boolean;
  isAuthenticated: boolean;
};

const useMySelf = (): TMySelf => {
  const accessToken = getCookie("access_token");
  const { data: dataRes, isLoading } = useQuery<TMeAccount>({
    queryKey: ["GET/account/me"],
    staleTime: Infinity,
    enabled: Boolean(accessToken),
    queryFn: async () => {
      try {
        const res = await accountService.me();
        return res.data;
      } catch (error: any) {
        return error;
      }
    },
  });
  const data = {
    ...dataRes,
    fullName: `${dataRes?.firstName} ${dataRes?.lastName}`,
  };
  return {
    isAuthenticated: Boolean(data?.id),
    data: data as TMySelf["data"],
    isLoading,
  };
};

export default useMySelf;
