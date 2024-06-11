import MyButton from "@/bases/MyButton";
import accountService from "@/services/account";
import authHandler from "@/utils/authHandler";
import { myToast } from "@/utils/toastHandler";
import { InputOTP } from "antd-input-otp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { STEP } from "./SignInForm";

const OTPForm = ({ setStep, email }) => {
  const [otp, setOtp] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await accountService.verifyOTP({
        email: email,
        otp: otp?.join("") as string,
      });
      myToast.success(res?.data?.message?.[0]);
      authHandler.setToken(res.data.data?.accessToken);
      authHandler.injectTokenClientSide(res.data.data?.accessToken);

      router.replace("/");
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
