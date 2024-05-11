import MyButton from "@/bases/MyButton";
import { addTokenInstance } from "@/services";
import accountService from "@/services/account";
import { myToast } from "@/utils/toastHandler";
import { useQueryClient } from "@tanstack/react-query";
import { InputOTP } from "antd-input-otp";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { STEP } from "./SignInForm";

const OTPForm = ({ setStep, email }) => {
  const [otp, setOtp] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await accountService.verifyOTP({
        email: email,
        otp: otp?.join("") as string,
      });
      myToast.success(res?.data?.message?.[0]);
      await setCookie("access_token", res.data.data?.accessToken);
      addTokenInstance(res.data.data?.accessToken as string);
      router.replace("/");
      queryClient.invalidateQueries({
        queryKey: ["GET/account/me"],
      });
    } catch (error: any) {
      myToast.error(error?.message[0]);
    }
    setLoading(false);
  };

  return (
    <>
      <p className="w-full text-center text-xs">
        Nhập mã xác nhận đã gửi về email {email}
      </p>
      <div className="mt-5">
        <InputOTP
          value={otp}
          autoFocus
          onChange={(value) => setOtp(value)}
          inputType="alphabet-numeric"
          length={5}
        />
      </div>
      <MyButton
        className="w-full mt-5 !h-[48px]"
        size="large"
        type="primary"
        htmlType="button"
        loading={loading}
        onClick={handleSubmit}
      >
        Xác nhận
      </MyButton>
      <div
        onClick={() => {
          setStep(STEP.FORM);
        }}
        className="flex w-fit mt-1 cursor-pointer text-blue-500 items-center"
      >
        <IoIosArrowRoundBack size={20} />
        <span className="  text-xs">Quay về đăng ký</span>
      </div>
    </>
  );
};

export default OTPForm;
