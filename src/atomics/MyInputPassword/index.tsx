import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const MyInputPassword = forwardRef((props: any, ref) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  const Icon = hidden ? FiEyeOff : FiEye;

  return (
    <div className="w-full flex pl-8 pr-4 py-4  items-center focus-within:outline-none focus-within:border-gray-400 focus-within:bg-white  rounded-lg  bg-gray-100 border border-gray-200">
      <input
        ref={ref as any}
        className="text-sm flex-1 placeholder-gray-500 bg-inherit outline-none  font-medium "
        type={hidden ? "password" : "text"}
        placeholder="Mật khẩu"
        {...props}
      />
      <Icon size={19} onClick={toggleHidden} className="ml-2 cursor-pointer" />
    </div>
  );
});
MyInputPassword.displayName = "MyInputPassword";

export default MyInputPassword;
