import React from 'react'
import { Button, Form} from 'antd';


function Menu() {
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
       <div className='card p-3 w-400'>
          <h1 className='text-xl mb-2'>
              Yamada Presents - Register
          </h1>
          <hr/>
          <Form
            layout = "vertical">
              <Form.Item
                  label = "Name"
                  name = "name"
                  rules = {[{required:true, message: "Please input your name!"}]}  
              >
                  <input type="text"></input>
              </Form.Item>
              <Form.Item
                  label = "Email"
                  name = "email"
                  rules = {[{required:true, message: "Please input your email!"}]}  
              >
                  <input type="text"></input>
              </Form.Item>
              <Form.Item
                  label = "Password"
                  name = "password"
                  rules = {[{required:true, message: "Please input your password!"}]}  
              >
                  <input type="password"></input>
              </Form.Item>
              <Button type="primary" htmlType='submit' title='REGISTER'/>
          </Form>
       </div>
    </div>
  );
}

export default Menu;