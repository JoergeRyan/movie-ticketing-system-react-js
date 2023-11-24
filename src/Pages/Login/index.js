import React from "react";
import { Button, Input} from "antd";
import "../../Stylesheets/Login.css";
import * as Icons from "@ant-design/icons";

const Login = () => {

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
                <Input
                  placeholder= "Username" 
                  prefix={<Icons.KeyOutlined/>}
                  type="text"
                  />
                  </div>
        <div className="input">
          <div className="password-icon"><Icons.KeyOutlined /></div>
          <input placeholder="Password" type="password" />
        </div>
      </div>

      <div className="submit-container">
        <Button type="primary" htmlType="submit" title="CANCEL">
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" title="LOGIN">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react'
// import { Form} from 'antd';
// import Button from '../../components/Button';

// function Register() {
//   return (
//     <div className="flex justify-center h-screen items-center bg-primary">
//        <div className='card p-3 w-400'>
//           <h1 className='text-xl mb-2'>
//               Mylene Movies - Register
//           </h1>
//           <hr/>
//           <Form
//             layout = "vertical">
//               <Form.Item
//                   label = "Name"
//                   name = "name"
//                   rules = {[{required:true, message: "Please input your name!"}]}
//               >
//                   <input type="text"></input>
//               </Form.Item>
//               <Form.Item
//                   label = "Email"
//                   name = "email"
//                   rules = {[{required:true, message: "Please input your email!"}]}
//               >
//                   <input type="text"></input>
//               </Form.Item>
//               <Form.Item
//                   label = "Password"
//                   name = "password"
//                   rules = {[{required:true, message: "Please input your password!"}]}
//               >
//                   <input type="password"></input>
//               </Form.Item>
//               <Button type="primary" htmlType='submit' title='REGISTER'/>
//           </Form>
//        </div>
//     </div>
//   );
// }

// export default Register
