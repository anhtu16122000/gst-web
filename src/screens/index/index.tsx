import MyContainer from "@/atomics/atoms/MyContainer";
import MyButton from "@/bases/MyButton";
import MyLink from "@/bases/MyLink";
import { ArrowRightOutlined } from "@ant-design/icons";
import ClassSection from "./ClassSection";
import TutorsSection from "./components/TutorsSection";

const IndexPage = () => {
  return (
    <>
      <MyContainer className="">
        <div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-2xl">Danh sách gia sư</p>
            </div>
            <div>
              <TutorsSection />
            </div>
          </div>
          <div className="flex mt-5 justify-center">
            <MyLink
              href="/tutors"
              DisplayComponent={
                <MyButton
                  className="!px-20"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  type="primary"
                  shape="round"
                  block
                >
                  Xem tất cả
                </MyButton>
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl">Danh sách lớp học</p>
          <ClassSection />
          <div className="flex justify-center">
            <MyLink
              href="/classes"
              DisplayComponent={
                <MyButton
                  className="!px-20"
                  icon={<ArrowRightOutlined />}
                  type="primary"
                  iconPosition="end"
                  shape="round"
                >
                  Xem tất cả
                </MyButton>
              }
            />
          </div>
        </div>
      </MyContainer>
    </>
  );
};

export default IndexPage;
