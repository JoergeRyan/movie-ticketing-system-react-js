import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { Button, Input, Form, message } from "antd";
import "../../Stylesheets/Login.css";
import * as Icons from "@ant-design/icons";
const Login = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });


  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/register', userData);
      console.log(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
 
    <div className="login-container">
      <div className="login-header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <Form >
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
        <Button type="primary" htmlType="submit" title="CANCEL">
          Register
        </Button>
        <Button type="primary" htmlType="submit" title="LOGIN">
          Login
        </Button>

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

