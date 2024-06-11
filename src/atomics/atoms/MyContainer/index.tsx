import { HTMLAttributes } from "react";

const CLASS_CONTAINER = {
  "2xl": "max-w-screen-2xl",
  xl: "max-w-screen-xl",
  lg: "max-w-screen-lg",
  md: "max-w-screen-md",
  sm: "max-w-screen-sm",
  xs: "max-w-screen-xs",
};

type TMyContainerProps = {
  size?: keyof typeof CLASS_CONTAINER;
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLElement>["className"];
};

const MyContainer: React.FC<TMyContainerProps> = (props) => {
  const { size = "xl", className = "", children } = props;
  return (
    <section className={`mx-auto ${CLASS_CONTAINER[size]} px-4 ${className}`}>
      {children}
    </section>
  );
};

export default MyContainer;
