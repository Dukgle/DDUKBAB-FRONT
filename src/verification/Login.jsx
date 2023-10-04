import React, { useState } from "react";
import Header from "../header/Header_verify";
import { Link } from "react-router-dom";
import "./Login.css";

import Logo from "../icon/DDUKBAB.png";
import Apple from "../icon/apple.png";

function Login() {
  const logoText = "로그인";

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = () => {
    // 비밀번호 조건을 만족하는지 확인
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const isFormValid = number !== "" && password !== "" && validatePassword();

  return (
    <div className="login-page">
      <Header logoText={logoText} />
      <div className="things">
        <img src={Logo} alt="Logo" />
        <form action="" className="form2" method="post">
          <div className="form-box-input-lg">
            <input type="text" name="" id="number" className="input-field-lg" placeholder="학번/사번/가게명" value={number} onChange={(e) => setNumber(e.target.value)} required />
          </div>
          <div className="form-box-input-lg">
            <input type="password" name="" id="password" className="input-field-lg" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Link to="/menu">
            <input
              id="signup"
              type="submit"
              className="login-btn"
              value="로그인"
              style={{
                backgroundColor: isFormValid ? "#fccb6f" : "white",
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
              disabled={!isFormValid}
            />
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
