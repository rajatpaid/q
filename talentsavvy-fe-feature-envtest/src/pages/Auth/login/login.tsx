import { Button, Form, Image } from "antd";
import "./login.css";
import login from "../../../assets/images/login.png";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";

const LoginPage = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === "popup") {
      instance
        .loginPopup(loginRequest)
        .then((res: any) => {
          localStorage.setItem("username", res.account.username);
        })
        .catch((e) => {});
    } else if (loginType === "redirect") {
      instance
        .loginRedirect(loginRequest)
        .then((res: any) => {})
        .catch((e) => {});
    }
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <Image height={550} src={login} alt="Login" />
        </div>
        <Form name="login-form" initialValues={{ remember: true }}>
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => handleLogin("popup")}
            >
              Sign in using Popup
            </Button>
            {/* <Button
              style={{ marginTop: "20px" }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={() => handleLogin("redirect")}
            >
              Sign in using Redirect
            </Button> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
