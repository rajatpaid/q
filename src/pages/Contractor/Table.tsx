import { FC, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Table, Space } from "antd";
import UserView from "./View";
import UserEdit from "./Edit";
import {
  FolderViewOutlined,
  DeleteFilled,
  EditOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

type UserTableProps = {
  data: any[];
  handleDeleteUser: (userId: any) => void;
  updateUser: (userId: number, user: any) => void;
};

const UserTable: FC<UserTableProps> = ({
  data,
  handleDeleteUser,
  updateUser
}) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [studentData, setStudentData] = useState();

  const user=JSON.parse(localStorage.getItem("user") as any);
  const columns: ColumnsType<any> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Role",
      dataIndex: "job_title",
      key: "job_title",
    },
    {
      title: "Email",
      dataIndex: "email_id",
      key: "email_id",
    },
    {
      title: "Team Name",
      dataIndex: "team_name",
      key: "team_name",
    },
    {
      title: "Team Member",
      dataIndex: "team_member",
      key: "team_member",
    },
    // {
    //   title: "Bdgt/mo",
    //   dataIndex: "bud_mo",
    //   key: "bud_mo",
    // },
    {
      title: "Rate/mo",
      dataIndex: "hourly_rate",
      key: "hourly_rate",
    },
    {
      title: "Provider",
      dataIndex: "service_provider_id",
      key: "service_provider_id",
    },
    {
      title: "Exp.(yrs)",
      dataIndex: "prior_exp_months",
      key: "prior_exp_months",
    },
    {
      title: "Start",
      dataIndex: "hire_date",
      key: "hire_date",
    },
    // {
    //   title: "Roll-Off",
    //   dataIndex: "roll_off",
    //   key: "roll_off",
    // },
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
      render: (_, record) => (
        <Space>
          <CheckCircleFilled style={{ color: record.data }} />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <FolderViewOutlined onClick={() => handleView(record)} />
          {user?.Role === "Hiring Manager" && (
            <EditOutlined onClick={() => handleEdit(record)} />
          )}
          {user?.Role === "Hiring Manager" && (
            <DeleteFilled color="red" onClick={() => handleDelete(record)} />
          )}
        </Space>
      ),
    },
  ];
  const handleDelete = (record: any) => {
    handleDeleteUser(record.id);
  };

  const handleView = (record: any) => {
    showViewModal();
    setStudentData(record);
    return { record };
  };
  const handleEdit = (record: any) => {
    showEditModal();
    setStudentData(record);
    return record;
  };
  const showViewModal = () => {
    setIsViewModalOpen(!isViewModalOpen);
  };

  const showEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <>
      <UserEdit
        isEditModalOpen={isEditModalOpen}
        updateUser={updateUser}
        studentData={studentData}
        showEditModal={showEditModal}
      />
      <UserView
        isViewModalOpen={isViewModalOpen}
        handleCancel={showViewModal}
        studentData={studentData}
      />

      <div style={{ margin: "10px 0px" }}>
        <Table
          size="small"
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </>
  );
};

export default UserTable;
