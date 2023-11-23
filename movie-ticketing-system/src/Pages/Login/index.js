import React, {useState}from "react";
import "../../Stylesheets/Login.css";

// import password_icon from "../../Assets/password.png";
// import username_icon from "../../Assets/username.png";

const Login = () => {

    const [action,setAction] = useState("Register");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src=" " alt="" />
          <input placeholder="Name" type="name" />
        </div>}
      
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
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
        <div className={action==="Register"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default Login;
