import React from "react";
// import { Button, Input, Form } from "antd";
import "../../Stylesheets/Home.css";
// import * as Icons from "@ant-design/icons";

function Home() {
  return (
    <div className="home-container">
      <nav>
        <label class="logo">Yamadasan's</label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Reserve</a></li>
          <li><a href="#">Cancel</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
