import React from 'react'
import { Button, Form} from 'antd';
import '../../Stylesheets/Register.css';

function Register() {
  return (
    <div id='registerBody' className="flex justify-center h-screen items-center bg-primary">
       <div className='card p-3 w-400'>
          <h1 className='text-xl mb-2'>
              Register
          </h1>
          <hr/>
          <Form
            layout = "vertical">
              <Form.Item
                  label = ""
                  name = "name"
                  rules = {[{required:true, message: "Please input your name!"}]}  
              >
                  <input placeholder= "Input Name" type="text"></input>
              </Form.Item>
              <Form.Item
                  label = ""
                  name = "email"
                  rules = {[{required:true, message: "Please input your email!"}]}  
              >
                  <input placeholder= "Input Email Address" type="text"></input>
              </Form.Item>
              <Form.Item
                  label = ""
                  name = "password"
                  rules = {[{required:true, message: "Please input your password!"}]}  
              >
                  <input placeholder= "Input Password" type="password"></input>
              </Form.Item>
              <Form.Item
                  label = ""
                  name = "confirmpassword"
                  rules = {[{required:true, message: "Please confirm your password!"}]}  
              >
                  <input placeholder= "Confirm Password" type="password"></input>
              </Form.Item>
              <Button type="primary" htmlType='submit' title='REGISTER'>
                Cancel
              </Button>
              <Button type="primary" htmlType='submit' title='CANCEL'>
                Register
              </Button>
          </Form>
       </div>
    </div>
  );
}

export default Register