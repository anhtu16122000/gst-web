import { setCookie } from "cookies-next";
import { addTokenInstance } from "../services";

export const handleShallowLogout = () => {
  setCookie("access_token", "");
  addTokenInstance("");
};

export function uuidToNumber(uuid: string): number {
  const replacedUuid: string = uuid.replace(/-/g, ""); // Loại bỏ dấu gạch ngang trong UUID
  const num: number = parseInt(replacedUuid, 16); // Chuyển UUID thành số thập lục phân
  return num;
}
