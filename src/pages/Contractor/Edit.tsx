import { Modal,Form, Input,Button } from 'antd'
import  {FC,ChangeEvent,useState,useEffect} from 'react'


type UserEditProps = {
  isEditModalOpen ?: boolean;
  showEditModal: () => void;
  updateUser: (userId:number,user:any) => void;
  studentData:any;
};
const UserEdit:FC<UserEditProps> = ({isEditModalOpen,showEditModal, updateUser, studentData})=>{
  const [userData, setUserData] = useState(
    {
      id:0,
      user_name: "user_name 1",
      email: "email 1",
      role_id: 80,
      employee_id: 58,
      candidate_id: 73,
      guest_id: 77,
      group_id: 34,
    }
);

useEffect(() => {
  if(isEditModalOpen)
  setUserData(studentData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const handleSubmit = () => {
  updateUser(userData.id,userData);
  showEditModal()
};
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }


  return (
    <Modal
    open={isEditModalOpen}
    onOk={showEditModal}
  
    footer={[
        <Button type="primary" key='submit'
         onClick={handleSubmit}>
            Update
        </Button>,
        <Button onClick={showEditModal}>Close</Button>
      ]}
    >
      <Form
      fields={[
        {
          name: ["user_name"],
          value: userData.user_name,
        },
        {
          name: ["email"],
          value: userData.email,
        },
        {
          name: ["role_id"],
          value: userData.role_id,
        },
        {
          name: ["employee_id"],
          value: userData.employee_id,
        },
        {
          name: ["candidate_id"],
          value: userData.candidate_id,
        },
        {
          name: ["guest_id"],
          value: userData.guest_id,
        },
        {
          name: ["group_id"],
          value: userData.group_id,
        },
      ]}
      >
        <Form.Item label="User Name:" name="user_name">
          <Input name="user_name" id="user_name" onChange={(e) => onInputChange(e)}/>
        </Form.Item>

        <Form.Item label="Email:" name="email">
          <Input id="email" name="email" onChange={(e) => onInputChange(e)} />
        </Form.Item>

        <Form.Item label="Role Id:" name="role_id">
          <Input id="role_id" name="role_id" onChange={(e) => onInputChange(e)} />
        </Form.Item>

        <Form.Item label="Employee Id:" name="employee_id">
          <Input id="employee_id" name="employee_id" onChange={(e) => onInputChange(e)} />
        </Form.Item>

        <Form.Item label="Candidate Id" name="candidate_id">
          <Input id="candidate_id" name="candidate_id" onChange={(e) => onInputChange(e)} />
        </Form.Item>

        <Form.Item label="Guest Id:" name="guest_id">
          <Input id="guest_id" name="guest_id" onChange={(e) => onInputChange(e)}/>
        </Form.Item>  

        <Form.Item label="Group Id:" name="group_id">
          <Input id="group_id" name="group_id" onChange={(e) => onInputChange(e)} />
        </Form.Item>

      </Form>
    </Modal>
  )
}

export default UserEdit
