import MyImage, { TMyImage } from "@/bases/MyImage";

export type TMyImageWidthAutoProps = {
  height: string | number;
  className?: string;
  myImageProps: Omit<TMyImage, "wrapperClassName" | "autoWidth">;
};

const MyImageWidthAuto: React.FC<TMyImageWidthAutoProps> = (props) => {
  const { className, height, myImageProps } = props;

  return (
    <MyImage
      wrapperClassName={`relative ${className}`}
      wrapperStyle={{
        height: height,
      }}
      autoWidth
      fill
      sizes={"100vw"}
      {...myImageProps}
    />
  );
};

export default MyImageWidthAuto;
