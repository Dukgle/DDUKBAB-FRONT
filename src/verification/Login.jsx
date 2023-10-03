import React from "react";
import Header from "../header/Header_verify";
import { Link } from "react-router-dom";
import "./Login.css";

import Logo from "../icon/DDUKBAB.png";
import Apple from "../icon/apple.png";

function Login() {
  const logoText = "로그인";

  return (
    <div className="login-page">
      <Header logoText={logoText} />
      <div className="things">
        <img src={Logo} alt="Logo" />
        <form action="" className="form" method="post">
          <div className="form-box-input-lg">
            <input type="text" name="" id="number" className="input-field-lg" placeholder="학번/사번/가게명" required />
          </div>
          <div className="form-box-input-lg">
            <input type="password" name="" id="password" className="input-field-lg" placeholder="비밀번호" required />
          </div>
          <Link to="/menu">
            <input id="signup" type="submit" className="login-btn" value="로그인" />
          </Link>
        </form>
        <div className="apple-login">
          <Link to="/menu">
            <div className="apple-login-circle">
              <img src={Apple} alt="AppleLogin" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
