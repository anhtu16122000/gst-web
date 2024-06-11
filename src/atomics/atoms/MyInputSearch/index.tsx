import { Input, InputProps } from "antd";
import { RiSearchLine } from "react-icons/ri";
import styles from "./styles.module.scss";

type TMyInputSearchProps = {} & InputProps;

const MyInputSearch: React.FC<TMyInputSearchProps> = (props) => {
  const { className = "", ...rest } = props;

  return (
    <div className="relative w-full">
      <RiSearchLine size={20} color="#444444" className={styles.iconSearch} />
      <Input
        className={`${styles.root} ${className}`}
        placeholder="Tìm kiếm"
        {...rest}
      />
    </div>
  );
};

export default MyInputSearch;
