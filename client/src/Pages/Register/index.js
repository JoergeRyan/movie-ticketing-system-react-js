import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import * as Icons from '@ant-design/icons';
import axios from 'axios';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (fieldName, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const onFinish = async () => {
    try {
      // Make the registration API call using axios
      const response = await axios.post('http://localhost:5000/api/users/signup', userData);
      console.log(response.data);

      // Check the success property in the response
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      message.error('Internal Server Error');
    }
  };

  return (
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
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <div className="username">
                <Input
                  placeholder="Username"
                  prefix={<Icons.UserOutlined />}
                  type="text"
                  onChange={(e) => handleInputChange('username', e.target.value)}
                />
              </div>
            </Form.Item>
          </div>
          <div className="input">
            <Form.Item
              label=""
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <div className="pass">
                <Input
                  placeholder="Password"
                  prefix={<Icons.KeyOutlined />}
                  type="password"
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>
            </Form.Item>
          </div>
          <div className="input">
            <Form.Item
              label=""
              name="confirmPassword"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <div className="pass">
                <Input
                  placeholder="confirm password"
                  prefix={<Icons.KeyOutlined />}
                  type="password"
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                />
              </div>
            </Form.Item>
          </div>
        </div>
        <div className="submit-container">
          <Button onClick={onFinish} type="primary" htmlType="submit" title="LOGIN">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
