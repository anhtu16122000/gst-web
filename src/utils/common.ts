import { QueryClient } from "@tanstack/react-query";

export function uuidToNumber(uuid: string): number {
  if (!uuid) 0;
  const replacedUuid: string = uuid?.replace(/-/g, ""); // Loại bỏ dấu gạch ngang trong UUID
  const num: number = parseInt(replacedUuid, 16); // Chuyển UUID thành số thập lục phân
  return num;
}

/*
Before Septemper 15 2018, Vietnam has phone number start with 09*, 01(2|6|8|9).
After that, the phone number can start with 03, 05, 07 or 08.
So this function provide a way to validate the input number is a Vietnamese phone number
*/

export const VIETNAMESE_PHONE_NUMBER_REGEX =
  /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

export function isVietnamesePhoneNumber(number) {
  return VIETNAMESE_PHONE_NUMBER_REGEX.test(number);
}

export let browserQueryClient: QueryClient | undefined = undefined;

export const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    },
  });
};
export const getQueryClient = () => {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
};
