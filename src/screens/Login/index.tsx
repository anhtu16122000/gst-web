import MyLink from "@/bases/MyLink";
import LoginForm from "./LoginForm";
import ThirdPartyLogin from "./ThirdPartyLogin";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-2xl xl:text-3xl font-extrabold">Đăng nhập</h1>
      <div className="w-full flex-1 mt-8">
        <div className="flex flex-col items-center">
          <ThirdPartyLogin />
        </div>

        <div className="my-12 border-b text-center">
          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
            Hoặc đăng nhập bằng tài khoản
          </div>
        </div>

        <LoginForm />
        <p className="mt-6 text-xs text-gray-600 text-center">
          Bạn chưa có tài khoản ?{" "}
          <MyLink
            href="/sign-in"
            DisplayComponent={
              <span className="border-b text-blue-500 border-blue-500 border-dotted">
                Đăng ký ngay
              </span>
            }
          />
        </p>
      </div>
    </>
  );
};

export default LoginPage;
