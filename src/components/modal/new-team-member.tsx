import { Button, Form, Input, Modal } from "antd";

interface NewTeamMemberProps {
  show: boolean;
  showModal: (flag: boolean) => void;
}

const NewTeamMember: React.FC<NewTeamMemberProps> = ({ show, showModal }) => {
  const onFinish = (value: object) => {
    console.log(value);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        closable
        open={show}
        footer={false}
        onOk={() => showModal(false)}
        onCancel={() => showModal(false)}
        width={350}
      >
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
            <Form.Item
              name="year"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
            <Form.Item
              name="year"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
            <Form.Item
              name="year"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
            <Form.Item
              name="year"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default NewTeamMember;
