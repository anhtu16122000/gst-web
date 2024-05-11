import Image, { ImageProps } from "next/image";

type TMyImage = {} & ImageProps;

const MyImage: React.FC<TMyImage> = (props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} />;
};

export default MyImage;
