"use client";
import MyInputPassword from "@/atomics/atoms/MyInputPassword";
import MyButton from "@/bases/MyButton";
import accountService from "@/services/account";
import authHandler from "@/utils/authHandler";
import { myToast } from "@/utils/toastHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const res = await accountService.login({
        password: data.password,
        username: data.email,
      });
      myToast.success(res?.data?.message?.[0]);
      authHandler.setToken(res.data.data?.accessToken);
      authHandler.injectTokenClientSide(res.data.data?.accessToken);
      router.replace("/");
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto min-w-[320px] max-w-xs"
    >
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        {...register("email", {
          required: "Vui lòng nhập email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email không hợp lệ",
          },
        })}
        placeholder="Email"
      />
      {getFormErrorMessage("email")}
      <div className="mt-5">
        <MyInputPassword
          {...register("password", {
            required: "Vui lòng nhập mật khẩu",
          })}
        />
      </div>
      {getFormErrorMessage("password")}
      <MyButton
        className="w-full mt-5 !h-[48px]"
        size="large"
        type="primary"
        htmlType="submit"
        loading={loading}
      >
        Đăng nhập
      </MyButton>
    </form>
  );
};

export default LoginForm;
