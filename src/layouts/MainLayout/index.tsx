import Footer from "./Footer";
import Header from "./Header";
import Injector from "./Injector";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Injector />
      <main className="mt-[88px]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
