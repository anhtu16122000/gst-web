"use client";
import MyContainer from "@/atomics/atoms/MyContainer";
import MyButton from "@/bases/MyButton";
import MyImage from "@/bases/MyImage";
import MyLink from "@/bases/MyLink";
import { useMySelf } from "@/zustand/store";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AccountInfo from "./Injector/AccountInfo";
import ClientNav from "./components/ClientNav";
import Notification from "./components/Notification";

export const MenuItem = ({
  isActive = false,
  link = "",
  text = "",
  theLast = false,
}) => {
  return (
    <MyLink
      href={link}
      DisplayComponent={
        <button
          className={`block w-full py-2 pl-3 pr-4 ${
            isActive
              ? "text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700"
              : `text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 ${classNames(
                  !theLast && "border-b border-gray-100",
                )}`
          }
          } `}
        >
          {text}
        </button>
      }
    />
  );
};

const Header = () => {
  const { data } = useMySelf();
  const pathname = usePathname();
  const [showMiniMenu, setShowMiniMenu] = useState<boolean>(false);
  // return (
  //   <header classNameName="shadow-md w-full fixed top-0 z-50 h-[70px] bg-white">
  //     <MyContainer size="2xl">
  //       {data.id && <AccountInfo account={data} />}
  //       {!data.id && (
  //       )}
  //     </MyContainer>
  //   </header>
  // );

  const renderMenu = ({ className }) => (
    <div
      className={`items-center justify-between w-full  lg:w-auto lg:order-1 ${className}`}
      id="mobile-menu-2"
    >
      <ul className="flex  flex-col mt-4 font-medium lg:flex-row lg:mt-0">
        <li>
          <MenuItem
            link="/"
            text="Trang chủ"
            theLast={false}
            isActive={"/" === pathname}
          />
        </li>
        <li>
          <MenuItem
            link="/tutors"
            text="Danh sách gia sư"
            theLast={false}
            isActive={"/tutors" === pathname}
          />
        </li>
        <li>
          <MenuItem
            link="/classes"
            text="Danh sách lớp"
            theLast={false}
            isActive={"/classes" === pathname}
          />
        </li>

        <li>
          <ClientNav pathname={pathname} />
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="bg-white border-gray-200 fixed top-0 z-50 h-[77px] w-full py-3 shadow-md border-b">
      <MyContainer className="flex bg-white flex-wrap items-center justify-between mx-auto">
        <MyLink
          href="/"
          DisplayComponent={
            <div className="flex gap-2">
              <MyImage
                src="/logo.png"
                alt="Logo website gia sư trẻ"
                width={45}
                height={45}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap ">
                Gia sư trẻ
              </span>
            </div>
          }
        ></MyLink>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <div className="flex gap-3 p-1.5">
            <Notification />

            {data.id && <AccountInfo account={data} />}
            {!data.id && (
              <>
                <MyLink
                  href="/login"
                  DisplayComponent={<MyButton ghost>Đăng ký</MyButton>}
                ></MyLink>
                <MyLink
                  href="/login"
                  DisplayComponent={<MyButton>Đăng nhập</MyButton>}
                ></MyLink>
              </>
            )}
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            onClick={() => setShowMiniMenu(!showMiniMenu)}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/* menu for < lg */}
        {showMiniMenu && renderMenu({ className: "lg:hidden" })}
        {/* menu for >= lg */}
        {renderMenu({ className: "hidden lg:flex" })}
      </MyContainer>
    </nav>
  );
};

export default Header;
