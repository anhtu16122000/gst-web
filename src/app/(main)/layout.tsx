import AppInitializer from "@/layouts/AppInitializer";
import MainLayout from "@/layouts/MainLayout";
import accountService from "@/services/account";
import authHandler from "@/utils/authHandler";
import { cookies } from "next/headers";

const getMySelf = async () => {
  const cookieStore = cookies();
  authHandler.injectTokenServerSide(cookieStore);
  const res = await accountService.me();
  return res?.data.data;
};

const layout = async ({ children }) => {
  const mySelf = await getMySelf();
  return (
    <MainLayout>
      <AppInitializer account={mySelf}>{children}</AppInitializer>
    </MainLayout>
  );
};

export default layout;
