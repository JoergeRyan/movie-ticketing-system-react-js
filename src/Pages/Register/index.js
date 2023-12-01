import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import '../../Stylesheets/Register.css';
import * as Icons from "@ant-design/icons";
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClickRegister() {
    if (!name || !email || !password) {
      message.error('Please fill in all fields.');
    } else {
      navigate('/login');
    }
  }
function handleClickLogin(){
  navigate('/login');

}


  return (
    
   <div className="register">
     <div id='registerBody'>
      <div className='card p-3 w-400'>
        <h1 className='text-xl mb-2'style={{fontWeight:"700"}} >
          Register
          <center><div className="underline"></div></center>
        </h1>
        <Form layout="vertical">
          <div className="inputs">
            <div className="input">
              <Form.Item
                label=""
                name="name"
                rules={[{ required: true, message: " " }]}
              >
                <div className="name">
                  <Input
                    placeholder="Input Name"
                    prefix={<Icons.UserOutlined />}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </Form.Item>
            </div>
            <div className="input">
              <Form.Item
                label=""
                name="email"
                rules={[{ required: true, message: " " }]}
              >
                <div className="email">
                  <Input
                    placeholder="Email Address"
                    prefix={<Icons.MailOutlined />}
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
                <div className="password">
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
          <div className="buttons">
            {/* <Button onClick={handleClickLogin} type="primary" htmlType='submit' title='CANCEL'>
              Login
            </Button> */}
            <Button className="register-button" onClick={handleClickRegister} type="primary" htmlType='submit' title='REGISTER'>
              Register
            </Button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </Form>
      </div>
    </div>
   </div>
  );
}

export default Register;
