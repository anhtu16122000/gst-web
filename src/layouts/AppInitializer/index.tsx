"use client";

import { useMySelf } from "@/zustand/store";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");
const AppInitializer = ({ children, account }) => {
  useMySelf.setState({
    data: account || {},
  });
  return children;
};

export default AppInitializer;
