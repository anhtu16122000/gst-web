import MyIconWithDescription from "@/atomics/atoms/MyIconWithDescription";
import { OBJ_SESSION_PER_WEEK } from "@/constants/common";
import { TClass } from "@/services/classes/classes.type";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { LuBook } from "react-icons/lu";
import { MdTransgender } from "react-icons/md";
import { RiChatVoiceLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";

type TMyCardClassProps = {
  classProps: TClass;
};

const MyCardClass: React.FC<TMyCardClassProps> = (props) => {
  const { classProps } = props;
  const {
    salary,
    sessionPerWeek,
    requiredGender,
    addressOfAccount,
    gradeOfStudent,
    teachingMethod,
    createdBy,
  } = classProps;

  return (
    <div className="border-gray-400 shadow-lg bg-white rounded-2xl overflow-hidden flex flex-col justify-between leading-normal">
      <div className="p-4 flex flex-col gap-2 pt-2">
        <div className="flex items-center">
          <div className="text-sm">
            <a
              href="#"
              className="text-gray-900 font-semibold leading-none hover:text-blue-600"
            >
              Phụ huynh: {createdBy?.firstName + " " + createdBy?.lastName}
            </a>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
        <div className="grid  gap-3 grid-cols-2">
          <MyIconWithDescription
            className=""
            myIconFillProps={{
              Icon: <FaRegMoneyBill1 size={20} />,
            }}
            Title="Lương:"
            Description={`${salary} VNĐ / Tháng`}
          />
          <MyIconWithDescription
            myIconFillProps={{
              Icon: <LuBook size={20} />,
            }}
            Title="Môn dạy:"
            Description="Toán, Lý, Hoá"
          />
          <MyIconWithDescription
            myIconFillProps={{
              Icon: <LuBook size={20} />,
            }}
            Title="Số buổi 1 tuần:"
            Description={
              OBJ_SESSION_PER_WEEK?.[sessionPerWeek]?.label || sessionPerWeek
            }
          />
          <MyIconWithDescription
            myIconFillProps={{
              Icon: <SiGoogleclassroom size={20} />,
            }}
            Title="Bé học lớp:"
            Description="Lớp 1"
          />
          <MyIconWithDescription
            myIconFillProps={{
              Icon: <MdTransgender size={20} />,
            }}
            Title="Giới tính yêu cầu:"
            Description={requiredGender}
          />
          <MyIconWithDescription
            myIconFillProps={{
              Icon: <RiChatVoiceLine size={20} />,
            }}
            Title="Hình thức dạy:"
            Description="Offline"
          />
          <MyIconWithDescription
            className="col-span-2"
            myIconFillProps={{
              Icon: <HiOutlineHome size={20} />,
            }}
            Title="Địa chỉ:"
            Description="  11 Xô Viết Nghệ Tỉnh, Phường 17, Quận Bình Thạnh, Thành
        Phố Hồ Chí Minh"
          />
        </div>
        <div>
          <a
            href="#"
            className="text-gray-900 font-bold text-lg  hover:text-blue-600 inline-block"
          >
            Ghi chú
          </a>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCardClass;
