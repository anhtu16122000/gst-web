import accountService from "@/services/account";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { cookies } from "next/headers";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      httpOptions: {
        timeout: 5000,
      },
    }),
  ],
  callbacks: {
    async signIn({ account, ...rest }) {
      try {
        const response = await accountService.thirdPartyHandler(
          account?.id_token as string,
        );
        const cookieStore = cookies();
        cookieStore.set("access_token", response.data.data?.accessToken);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
