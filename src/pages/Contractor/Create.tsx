import { FC} from "react";
import { Modal, Form, Input, Button, DatePicker } from "antd";

type UserCreateProps = {
  isModalOpen: boolean;
  handleCancel: () => void;
  createUser?: (user: any) => void;
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
 
};
/* eslint-enable no-template-curly-in-string */

const { RangePicker } = DatePicker;
const UserCreate: FC<UserCreateProps> = ({
  isModalOpen,
  handleCancel
}) => {
  const onFinish = (values: any) => {
    console.log(values);
    handleCancel()
  };
  return (
    <Modal
    title="Create Position"
    centered={true}
      open={isModalOpen}
      onCancel={handleCancel}
      closable={false}
      footer={[
        <Button type="primary" key="submit" onClick={onFinish}>
          Submit
        </Button>,
        <Button onClick={handleCancel}>Cancel</Button>,
      ]}
    >
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600,margin:"30px 0px"}}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Role"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "team"]}
          label="Team Member"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "location"]}
          label="Location"
          
        >
          <Input />
        </Form.Item>
       
        <Form.Item
          name={["user", "date"]}
          label="Start Date"
          rules={[{ required: true }]}
        >
         <RangePicker placement="bottomRight" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserCreate;
