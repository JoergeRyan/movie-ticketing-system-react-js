import React, { useState } from "react";
import { Button, Input, Form, message } from "antd";
import "../../Stylesheets/Login.css";
import * as Icons from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClickHome() {
    if (!email || !password) {
      message.error("Please fill in all fields.");
    } else {
      navigate("/home");
    }
  }

  function handleClickRegister() {
    navigate("/register");
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <Form>
          <div className="inputs">
            <div className="input">
              <Form.Item 
                label=""
                name="username"
                rules={[{ required: true, message: " " }]}
              >
                <div className="username">
                  <Input
                    placeholder="Email"
                    prefix={<Icons.UserOutlined />}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Form.Item>
            </div>
            <div className="input">
              <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: " " }]}
              >
                <div className="pass">
                  <Input
                    placeholder="Password"
                    prefix={<Icons.KeyOutlined />}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </Form.Item>
            </div>
          </div>

    
            {/* <Button onClick={handleClickRegister}type="primary" htmlType="submit" title="CANCEL">
          Register
        </Button> */}
            <Button className="login-button"
              onClick={handleClickHome}
              type="primary"
              htmlType="submit"
              title="LOGIN"
              
            >
              Login
            </Button>
          
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;