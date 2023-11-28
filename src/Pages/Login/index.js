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

