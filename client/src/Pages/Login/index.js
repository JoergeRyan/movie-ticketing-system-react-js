import React, { useState } from "react";
import { Button, Input, Form, message } from "antd";
import "../../Stylesheets/Login.css";
import * as Icons from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'; // Import Axios

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleClickHome() {
    if (!email || !password) {
      message.error('Please fill in all fields.');
    } else {
      try {
        // Make an Axios request to your server's register endpoint
        const response = await axios.post('http://localhost:5000/users/login', {
          email: email,
          password: password,
        });
        console.log('Server Response:', response.data);
        // Handle the response, you might want to check for success or display a message
        if (response.data) {
          message.success('Login successful!');
          navigate('/home');
        } else {
          message.error('Login failed. Please try again.');
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
        message.error('An error occurred during login. Please try again.');
      }
    }
  }

  async function handleClickRegister() {
    
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