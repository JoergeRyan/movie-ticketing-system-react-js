import React from "react";
import "../../Stylesheets/Login.css";

import password_icon from "../../Assets/password.png";
import username_icon from "../../Assets/username.png";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={username_icon} alt="" />
          <input type="username" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
