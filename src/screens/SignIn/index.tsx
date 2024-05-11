import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <>
      <h1 className="text-2xl xl:text-3xl font-extrabold">Đăng ký tài khoản</h1>
      <div className="w-full flex-1 mt-8">
        <div className="flex flex-col items-center">
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default SignIn;
