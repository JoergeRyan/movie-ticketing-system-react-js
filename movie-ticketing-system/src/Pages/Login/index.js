import React, { useState } from "react";
import { Form } from "antd";
import "../../Stylesheets/Login.css";

// import password_icon from "../../Assets/password.png";
// import username_icon from "../../Assets/username.png";

const Login = () => {
  const [action, setAction] = useState("Register");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src=" " alt="" />
            <input placeholder="Name" type="name" />
          </div>
        )}

        <div className="input">
          <img src=" " alt="" />
          <input placeholder="Username" type="username" />
        </div>
        <div className="input">
          <img src=" " alt="" />
          <input placeholder="Password" type="password" />
        </div>
      </div>

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Register");
          }}
        >
          Register
        </div>
        <div
          className={action === "Register" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
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
