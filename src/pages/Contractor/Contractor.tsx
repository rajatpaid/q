import { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import user from "../../api/user";
import UserTable from "./Table";
import UserCreate from "./Create";
import { Button, Col, Input, Row, message } from "antd";
import saveToLocalStorage from "../../utils/common";
import jwt_decode from "jwt-decode";

interface UserProps {}

const Contractor: React.FC<UserProps> = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState<any>([]);
  const [messageApi, contextHolder] = message.useMessage();

  const getUserAPi = useApi(user.getUsers);
  const createUserApi = useApi(user.createUser);
  const deleteUserApi = useApi(user.deleteUser);
  const editUserApi = useApi(user.editUser);

  const createUserToken = useApi(user.getUserToken);

  const getUserToken = (email: string) => {
    createUserToken
      .request({
        // user_name: "vikram@talentsavvy.com",
        user_name: email,
      })
      .then((res) => {
        localStorage.setItem("token", res.data);
        let user:any=jwt_decode(res.data)
        saveToLocalStorage(JSON.stringify(user));
        getUserAPi.request(user.TenantId,user.ManagerId).then(({ data }) => {
          if (data) {
           data= data.map((item: any) => {
              let row = {
                ...item,
                team_name:item.team_name,
                team_member: item.first_name + " " + item.last_name,
                hire_date:item.hire_date ? item.hire_date.split("T")[0]:"",
                data: "green",
              };
              return row
            });
          }
          setUsers(data);
        });
      });
  };
  useEffect(() => {
    getUserToken(localStorage.getItem("username") as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleShow = () => {
    setShow(!show);
  };

  const successToast = (message: string) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };

  const createUser = (userData: any) => {
    createUserApi.request(userData).then(({ data, status }) => {
      if (status === 201) {
        setUsers([...users, data]);
        successToast("User created successfully");
      }
    });
  };

  const updateUser = (userId: number, user: any) => {
    editUserApi.request(userId, user).then(({ status }) => {
      if (status === 200) {
        let index = users.findIndex((user: any) => user.id === userId);
        users[index] = user;
        setUsers([...users]);
        successToast("User Updated successfully");
      }
    });
  };

  const deleteUser = (userId: any) => {
    deleteUserApi.request(userId).then(({ status }) => {
      if (status === 200) {
        const filteredList = users.filter((item: any) => item.id !== userId);
        setUsers([...filteredList]);
        successToast("User deleted successfully");
      }
    });
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e: any) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = users.filter((el: any) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return (
        el.job_title.toLowerCase().includes(inputText) ||
        el.team_member.toLowerCase().includes(inputText) ||
        el.email_id.toLowerCase().includes(inputText) ||
        el.hourly_rate.toLowerCase().includes(inputText) ||
        el.team_name.toLowerCase().includes(inputText)
      );
    }
  });
  //end serach

  return (
    <>
      {contextHolder}
      <UserCreate
        isModalOpen={show}
        handleCancel={toggleShow}
        createUser={createUser}
      />
      <Row>
        <Col span={13}>
          <Col>
            <div style={{ fontSize: 13 }}>Contractor Data</div>
          </Col>
          <Col>
            <h2 style={{ fontSize: 24, margin: 0 }}>Team Total Recall</h2>
          </Col>
        </Col>
        <Col span={3} offset={8}>
          <Button type="primary" onClick={toggleShow}>
            Create Position
          </Button>
        </Col>
      </Row>
      <div style={{ width: "30%", margin: "20px 0px" }}>
        <Input
          id="outlined-basic"
          onChange={inputHandler}
          placeholder="Search here"
        />
      </div>
      {getUserAPi.loading ? (
        <p>loading data...</p>
      ) : (
        <UserTable
          data={filteredData}
          handleDeleteUser={deleteUser}
          updateUser={updateUser}
        />
      )}
    </>
  );
};

export default Contractor;
