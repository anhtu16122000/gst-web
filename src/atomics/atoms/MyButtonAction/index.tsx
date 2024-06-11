import MyButtonHTML, { TMyButtonHTMLProps } from "@/bases/MyButtonHTML";

export type MyButtonActionProps = {
  Icon: React.ReactNode;
  label: string;
} & TMyButtonHTMLProps;

const MyButtonAction: React.FC<MyButtonActionProps> = (props) => {
  const { className = "", Icon, label, ...rest } = props;

  return (
    <MyButtonHTML
      className={`flex items-center p-2 hover:bg-slate-100 cursor-pointer rounded-lg gap-1 ${className}`}
      {...rest}
    >
      {Icon} <span>{label}</span>
    </MyButtonHTML>
  );
};

export default MyButtonAction;
