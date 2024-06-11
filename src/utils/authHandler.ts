import { addTokenInstance } from "@/services";
import { CookieValueTypes, getCookie, setCookie } from "cookies-next";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const authHandler = {
  getToken(): { accessToken: CookieValueTypes } {
    const accessToken = getCookie("access_token");
    return {
      accessToken,
    };
  },
  setToken(accessToken: string) {
    setCookie("access_token", accessToken);
  },
  injectTokenServerSide(cookieStore: ReadonlyRequestCookies) {
    const token = cookieStore.get("access_token");
    addTokenInstance(token?.value as string);
  },
  handleShallowLogout() {
    setCookie("access_token", "");
    addTokenInstance("");
  },
  injectTokenClientSide(accessToken) {
    addTokenInstance(accessToken as string);
  },
};
export default authHandler;
