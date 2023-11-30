import React from 'react'
import { Button, Form, Input,message } from 'antd';
import '../../Stylesheets/Register.css';
import * as Icons from "@ant-design/icons";
import RegisterUser from "../apiCall/registerUserApi";   

function Register() {

  const onFinish =  async(values) => {
    console.log(values);
    try{
      const response = await RegisterUser(values);
      if(response.success){
         message.success(response.message);
      } else {
          message.error(response.message);
      }
    } catch(error){
        message.error(error.message);
    }
    fetch(`/api/users/register`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: values.name,
        email: values.email,
        password: values.password
      })
    })
      .then(res => res.json())
      .then(regis => {
        if (regis?.success) {
          console.log(regis.success);
        } else {
          console.error('The object or property is undefined.');
        }
      })
      .catch(error => {
        console.error('Fetch Error:', error);
      });
    
  }    

  // let onClickRegister = () => {
  //   console.log("hello");

    
  // }

  return (
    <div id='registerBody' className="container">
      <div className='card p-3 w-400'>
        <h1 className='text-xl mb-2'>
          Register
          <center><div className="underline"></div></center>
        </h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <div className="inputs">
            <div className="input">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "" }]}
              >
                <div className="name">
                  <Input
                    placeholder="Input Name"
                    prefix={<Icons.UserOutlined />}
                    type="text"
                  />
                </div>

              </Form.Item>
            </div>
            <div className="input">
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please Input your Email." }]}
              >
                <div className="email">
                  <Input
                    placeholder="Email Address"
                    prefix={<Icons.MailOutlined />}
                    type="text"
                  />
                </div>

              </Form.Item>
            </div>
            <div className="input">
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please Input your Password." }]}
              >
                <div className="password">
                  <Input
                    placeholder="Password"
                    prefix={<Icons.KeyOutlined />}
                    type="password"
                  />
                </div>
              </Form.Item>
            </div>
            <div className="input">
              <Form.Item
                name="confirmpassword"
                rules={[{ required: true, message: "The Password does not match." }]}
              >
                <div className="confirm">
                  <Input
                    placeholder="Confirm Password"
                    prefix={<Icons.KeyOutlined />}
                    type="password"
                  />
                </div>
              </Form.Item>
            </div>
          </div>

          <div className="buttons">
            <Button type="primary"  htmlType='submit' title='REGISTER'>
              Register
            </Button>
            <Button type="primary" htmlType='submit' title='CANCEL'>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;