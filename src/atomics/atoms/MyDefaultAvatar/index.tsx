import { generateColor } from "@/utils/colorHandler";
import { uuidToNumber } from "@/utils/common";

type TMyDefaultAvt = {
  lastName: string;
  id: string;
  width?: number;
  height?: number;
  size?: number;
};

const MyDefaultAvt: React.FC<TMyDefaultAvt> = (props) => {
  const { lastName = "", id, width = 35, height = 35, size = 15 } = props;
  const splitName = lastName.split(" ");
  const numberId = uuidToNumber(id);

  return (
    <div
      className="flex items-center  rounded-full justify-center  text-[#ffff] font-[bold]"
      style={{
        backgroundColor: generateColor(numberId),
        height: height,
        width: width,
        fontSize: size,
      }}
    >
      {splitName[splitName.length - 1].charAt(0).toUpperCase()}
    </div>
  );
};

export default MyDefaultAvt;
