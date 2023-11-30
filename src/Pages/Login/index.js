import React from "react";
import { Button, Input, Form, message } from "antd";
import "../../Stylesheets/Login.css";
import * as Icons from "@ant-design/icons";

const Login = () => {
  const onFinish = async (values) => {
    // try {
    //   const response = await LoginUser(values);
    //   if (response.success) {
    //     message.success(response.message);
    //     localStorage.setItem("token", response.data);
    //     window.location.href = "/"; // Redirect to the homepage
    //   } else {
    //     message.error(response.message);
    //   }
    // } catch (error) {
    //   message.error(error.message);
    // }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <Form onFinish={onFinish}>
        <div className="inputs">
          <div className="input">
            <Form.Item
              label=""
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <div className="username">
                <Input placeholder="Username" prefix={<Icons.UserOutlined />} type="text" />
              </div>
            </Form.Item>
          </div>
          <div className="input">
            <Form.Item
              label=""
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <div className="pass">
                <Input placeholder="Password" prefix={<Icons.KeyOutlined />} type="password" />
              </div>
            </Form.Item>
          </div>
        </div>

        <div className="submit-container">
          <Button type="primary" htmlType="submit" title="LOGIN">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;

