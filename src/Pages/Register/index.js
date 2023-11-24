import React from 'react'
import { Button, Form, Input} from 'antd';
import '../../Stylesheets/Register.css';
import * as Icons from "@ant-design/icons";

function Register() {
  return (
    <div id='registerBody' className="container">
       <div className='card p-3 w-400'>
          <h1 className='text-xl mb-2'>
              Register
              <center><div className="underline"></div></center>
          </h1>
          <Form
            layout = "vertical">
              <div className="inputs">
                <div className="input">
              <Form.Item
                  label = ""
                  name = "name"
                  rules = {[{required:true, message:" "}]}  
              >
                <div className="name">
                <Input
                  placeholder= "Input Name" 
                  prefix={<Icons.UserOutlined />}
                  type="text"
                  />
                  </div>
                  
              </Form.Item>
              </div>
              <div className="input">
              <Form.Item
                  label = ""
                  name = "email"
                  rules = {[{required:true, message:" "}]}  
              > 
              <div className="email">
                <Input
                  placeholder= "Email Address" 
                  prefix={<Icons.MailOutlined/>}
                  type="text"
                  />
                  </div>
              
              </Form.Item>
              </div>
              <div className="input">
              <Form.Item
                  label = ""
                  name = "password"
                  rules = {[{required:true, message:" "}]}  
              >
                <div className="password">
                <Input
                  placeholder= "Password" 
                  prefix={<Icons.KeyOutlined/>}
                  type="password"
                  />
                  </div>
              </Form.Item>
              </div>
              <div className="input">
              <Form.Item
                  label = ""
                  name = "confirmpassword"
                  rules = {[{required:true, message:" "}]}  
              >
                  <div className="confirm">
                  <Input
                  placeholder= "confirm" 
                  prefix={<Icons.KeyOutlined/>}
                  type="password"
                  />
                  </div>
              </Form.Item>
              </div>
              </div>
              <Button type="primary" htmlType='submit' title='REGISTER'>
              Register
              </Button>
              <Button type="primary" htmlType='submit' title='CANCEL'>
              Login
              </Button>
          </Form>
       </div>
    </div>
  );
}

export default Register