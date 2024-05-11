import MyDefaultAvt from "../MyDefaultAvatar";

type TMyAvatarProps = {
  lastName: string;
  id: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

const SIZES: Record<TMyAvatarProps["size"], any> = {
  sm: {
    width: 25,
    height: 25,
    size: 15,
  },
  md: {
    width: 35,
    height: 35,
    size: 15,
  },
  lg: {
    width: 45,
    height: 45,
    size: 17,
  },
  xl: {
    width: 55,
    height: 55,
    size: 20,
  },
  "2xl": {
    width: 65,
    height: 65,
    size: 22,
  },
};

const MyAvatar: React.FC<TMyAvatarProps> = (props) => {
  const { lastName = "", id, size = "md" } = props;

  return <MyDefaultAvt id={id} lastName={lastName} {...SIZES[size]} />;
};

export default MyAvatar;
