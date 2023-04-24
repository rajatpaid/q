import { Modal,Table } from 'antd';
import  {FC} from 'react';
import type { ColumnsType } from "antd/es/table";
import { User } from "../../api/user";

type UserViewProps = {
  isViewModalOpen: boolean;
  handleCancel: () => void;
  studentData:any;
};
const UserView:FC<UserViewProps> =({
  isViewModalOpen,
  handleCancel,
  studentData
})=>{
  const datasource = [studentData]
  const columns: ColumnsType<User> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Team Member",
      dataIndex: "team_member",
      key: "team_member",
    },
    {
      title: "Bdgt/mo",
      dataIndex: "bud_mo",
      key: "bud_mo",
    },
    {
      title: "Rate/mo",
      dataIndex: "rate_mo",
      key: "rate_mo",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Exp.(yrs)",
      dataIndex: "exp",
      key: "exp",
    },
    {
      title: "Allocation",
      dataIndex: "allocation",
      key: "allocation",
    },
    {
      title: "Start",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "Roll-Off",
      dataIndex: "roll_off",
      key: "roll_off",
    }
  ]
  return (
    <Modal
    width={"100%"}
    open={isViewModalOpen}
    onOk={handleCancel}
    onCancel={handleCancel}
    
  >
    <Table columns={columns} pagination={false}
    dataSource={datasource}
    />
    </Modal>
  )
}

export default UserView;
