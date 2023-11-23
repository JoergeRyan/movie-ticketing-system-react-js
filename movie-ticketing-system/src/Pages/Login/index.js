import React from "react";
import "../../Stylesheets/Login.css";

// import password_icon from "../../Assets/password.png";
// import username_icon from "../../Assets/username.png";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src=" " alt="" />
          <input placeholder="Username" type="username" />
        </div>
        <div className="input">
          <img src=" " alt="" />
          <input placeholder="Password" type="password" />
        </div>
      </div>
      <div className="submit.container">
        <div className="submit">
           <button>Login</button>
            </div>
      </div>
    </div>
  );
};

export default Login;
