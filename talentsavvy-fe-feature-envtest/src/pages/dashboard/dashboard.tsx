import React, { useEffect, useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  BellOutlined,
  LogoutOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, MenuProps, Row, Tooltip } from "antd";
import { Image, Layout, Menu, theme } from "antd";
import logo from "../../logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Notification from "../../components/modal/notification";
import NewTeamMember from "../../components/modal/new-team-member";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  { label: "Team Total Recall", key: "contractor", icon: UserOutlined },
  { label: "Minorities Reporters", key: "home", icon: LaptopOutlined },
  { label: "Unassigned", key: "", icon: NotificationOutlined },
].map((item) => {
  return {
    key: `${item.key}`,
    icon: React.createElement(item.icon),
    label: `${item.label}`,
  };
});

const DashboardPage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showNewTeam, setShowNewTeamModal] = useState(false);

  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState<any>();

  const user = JSON.parse(localStorage.getItem("user") as any);
  const show = (flag: boolean) => {
    setOpen(flag);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClick1 = () => {
    setShowNewTeamModal(true);
  };

  const openNewTeamMemberModal = (flag: boolean) => {
    setShowNewTeamModal(flag);
  };
  useEffect(() => {
    requestProfileData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestProfileData = () => {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        setGraphData(response.account);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
      instance.logoutPopup();
    // instance.logoutRedirect();
    // if (localStorage.getItem("loginType") === "popup") {
    //   localStorage.clear();
    //   instance.logoutPopup();
    // } else {
    //   localStorage.clear();
    //   instance.logoutRedirect();
    // }
  };
  return (
    <>
      <div style={{ top: 10, right: 2 }}>
        <Notification open={open} setOpen={show} />
      </div>

      <NewTeamMember show={showNewTeam} showModal={openNewTeamMemberModal} />

      <Layout>
        <Header style={{ background: "white", paddingInline: "0px" }}>
          <Row>
            <Col span={21}>
              <div
                style={{
                  float: "left",
                  marginLeft: "20px",
                }}
              >
                <Image width={120} src={logo} />
              </div>

              <Menu
                //   theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["contractor"]}
              >
                <Menu.Item key="home">
                  <Link to="/home">
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="contractor">
                  <Link to="/contractor">
                    <span>Team Management</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>

            <Col span={3}>
              <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
                {user?.Role === "Hiring Manager" && (
                  <Menu.Item key="1">
                    <BellOutlined onClick={handleClick} />
                  </Menu.Item>
                )}

                <Tooltip placement="bottom" title={graphData && graphData.name}>
                  <Menu.Item key="2">
                    <Avatar
                      size={20}
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </Menu.Item>
                </Tooltip>
                <Menu.Item key="3" onClick={() => handleLogout()}>
                  {/* <Link > */}
                  <LogoutOutlined />
                  {/* </Link> */}
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{ background: "gray", marginTop: "3px" }}
            trigger={null}
            collapsible
           
          >
            <div className="logo" />
            <Menu
              mode="inline"
              theme="light"
              defaultSelectedKeys={["contractor"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0, background: "#F8F8F8" }}
              items={items2}
              onClick={({ key }) => {
                navigate(key);
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                width: "90%",
              }}
            >
              <Button
                onClick={handleClick1}
                block
                icon={<PlusOutlined />}
                style={{ textAlign: "left" }}
              >
                New Team
              </Button>
            </div>
          </Sider>
          <Layout>
            <Content
              style={{
                padding: 24,
                margin: "3px",
                minHeight: 500,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardPage;
