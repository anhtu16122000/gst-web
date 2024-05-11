import MyAvatar from "@/atomics/atoms/MyAvatar";
import MyContainer from "@/atomics/atoms/MyContainer";
import MyCard from "@/bases/MyCard";
import MyDivider from "@/bases/MyDivider";
import { Card } from "antd";
import { FaChevronRight } from "react-icons/fa6";
import ModalEdit from "./ModalEdit";

const Profile = () => {
  return (
    <MyContainer>
      <Card
        title={
          <div className="flex p-5 items-center gap-3">
            <MyAvatar
              size="2xl"
              id={"550e8400-e29b-41d4-a716-446655440000"}
              lastName="Anh Tú"
            />
            <div>
              <p>Nguyễn Anh Tú</p>
              <p className="text-slate-800 font-light">
                anhtu16122000@gmail.com
              </p>
            </div>
          </div>
        }
        extra={<ModalEdit />}
      >
        <div className="grid grid-cols-7 gap-3">
          <div className="col-span-2">
            <MyCard>
              <div className="text-lg p-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                Thông tin cá nhân
              </div>
              <MyDivider style={{ margin: "10px 0px" }} />
              <div className="text-lg p-3 flex justify-between items-center bg-blue-500 text-white rounded-lg">
                <p> Học vấn/ bằng cấp</p> <FaChevronRight />
              </div>
            </MyCard>
          </div>
          <div className="col-span-5">
            <MyCard>
              <div className="flex flex-col">
                <div className="w-full flex sm:flex-row xs:flex-col gap-5 justify-center">
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 ">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-600 ">Ngày sinh</dt>
                        <dd className="text-lg font-semibold">Samuel</dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-600 ">Email</dt>
                        <dd className="text-lg font-semibold">Abera</dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-600 ">Số điện thoại</dt>
                        <dd className="text-lg font-semibold">21/02/1997</dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-600 ">Giới tính</dt>
                        <dd className="text-lg font-semibold">Male</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-600 ">Địa chỉ</dt>
                        <dd className="text-lg font-semibold">
                          Ethiopia, Addis Ababa
                        </dd>
                      </div>

                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Số điện thoại</dt>
                        <dd className="text-lg font-semibold">+251913****30</dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Email</dt>
                        <dd className="text-lg font-semibold">
                          samuelabera87@gmail.com
                        </dd>
                      </div>

                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Nghề nghiệp</dt>
                        <dd className="text-lg font-semibold">
                          https://www.teclick.com
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Nghề nghiệp</dt>
                        <dd className="text-lg font-semibold">
                          https://www.teclick.com
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="w-full flex sm:flex-row xs:flex-col gap-10 justify-center">
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 ">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-600 ">Ngày sinh</dt>
                        <dd className="text-lg font-semibold">Samuel</dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-600 ">Email</dt>
                        <dd className="text-lg font-semibold">Abera</dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-600 ">Số điện thoại</dt>
                        <dd className="text-lg font-semibold">21/02/1997</dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-600 ">Giới tính</dt>
                        <dd className="text-lg font-semibold">Male</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-600 ">Địa chỉ</dt>
                        <dd className="text-lg font-semibold">
                          Ethiopia, Addis Ababa
                        </dd>
                      </div>

                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Số điện thoại</dt>
                        <dd className="text-lg font-semibold">+251913****30</dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Email</dt>
                        <dd className="text-lg font-semibold">
                          samuelabera87@gmail.com
                        </dd>
                      </div>

                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Nghề nghiệp</dt>
                        <dd className="text-lg font-semibold">
                          https://www.teclick.com
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-600 ">Nghề nghiệp</dt>
                        <dd className="text-lg font-semibold">
                          https://www.teclick.com
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </MyCard>
          </div>
        </div>

        <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-600  hover:text-gray-600">
          <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
            <div className="p-2 hover:text-primary">
              <svg
                className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </div>
          </a>
          <a href="https://twitter.com/Samuel7Abera7">
            <div className="p-2 hover:text-primary">
              <svg
                className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </div>
          </a>
          <a href="">
            <div className="p-2 hover:text-blue-500">
              <svg
                className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.youtube.com/@silentcoder7">
            <div className="p-2 hover:text-primary">
              <svg
                className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-red-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </Card>
    </MyContainer>
  );
};

export default Profile;
