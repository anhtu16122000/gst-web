import { Form, FormProps } from "antd";
import { useId } from "react";
type TMyFormProps = {} & FormProps;
const MyForm: React.FC<TMyFormProps> = (props) => {
  const { layout = "vertical", children, ...rest } = props;
  return (
    <Form
      id={useId()}
      scrollToFirstError
      layout={layout}
      size="large"
      {...rest}
    >
      {children as any}
    </Form>
  );
};

export default MyForm;
