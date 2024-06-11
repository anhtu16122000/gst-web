"use client";
import MyInputPassword from "@/atomics/atoms/MyInputPassword";
import MyButton from "@/bases/MyButton";
import MyLink from "@/bases/MyLink";
import accountService from "@/services/account";
import { myToast } from "@/utils/toastHandler";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import OTPForm from "./OTPForm";

const schema = yup.object().shape({
  firstName: yup.string().required("Vui lòng nhập tên"),
  lastName: yup.string().required("Vui lòng nhập họ và tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Mật khẩu không khớp")
    .required("Vui lòng nhập lại mật khẩu"),
});

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
};

export enum STEP {
  FORM = "FORM",
  OTP = "OTP",
}

const SignInForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<STEP>(STEP.FORM);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema), // Sử dụng yupResolver để kết hợp schema `yup`
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const email = watch("email");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const res = await accountService.signUpDto(data);
      myToast.info(res?.data?.message?.[0]);
      setStep(STEP.OTP);
    } catch (error: any) {
      myToast.error(error?.message?.[0]);
    }
    setLoading(false);
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && (
        <small className="text-red-500 mt-1">{errors[name].message}</small>
      )
    );
  };

  const loginByProvider = (provider) => {
    signIn(provider, {
      callbackUrl: "/",
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto min-w-[320px] max-w-xs"
    >
      {step === STEP.FORM && (
        <>
          <div>
            <div className="flex gap-3">
              <input
                className="w-full px-8  py-4  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                {...register("firstName")}
                placeholder="Nhập họ"
              />
              <input
                className="w-full px-8  py-4 rounded-lg  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                {...register("lastName")}
                placeholder="Nhập tên"
              />
            </div>
            {(getFormErrorMessage("firstName") ||
              getFormErrorMessage("lastName")) &&
              getFormErrorMessage("lastName")}
          </div>
          <input
            className="w-full mt-5 px-8  py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            {...register("email")}
            placeholder="Email"
          />
          {getFormErrorMessage("email")}
          <div className="mt-5">
            <MyInputPassword {...register("password")} />
            {getFormErrorMessage("password")}
          </div>
          <div className="mt-5">
            <MyInputPassword
              placeholder="Nhập lại mật khẩu"
              {...register("rePassword")}
            />
          </div>
          {getFormErrorMessage("rePassword")}
          <MyButton
            className="w-full mt-5 !h-[48px]"
            size="large"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Đăng ký
          </MyButton>
          <p className="mt-6 text-xs text-gray-600 text-center">
            Bạn đã có tài khoản ?{" "}
            <MyLink
              href="/login"
              DisplayComponent={
                <span className="border-b text-blue-500 border-blue-500 border-dotted">
                  Quay về đăng nhập
                </span>
              }
            />
          </p>
        </>
      )}
      {step === STEP.OTP && <OTPForm setStep={setStep} email={email} />}
    </form>
  );
};

export default SignInForm;
