import React from "react";
import Header from "../header/Header_verify";
import "./SignUp.css";
import { Link } from "react-router-dom";

import down from "../icon/arrow-down.png";
import none from "../icon/circle-x.png";

function SignUp() {
  const logoText = "회원가입";

  return (
    <div className="signUp-page">
      <Header logoText={logoText} />
      <div className="contents">
        <form action="" className="form" method="post">
          <div className="form-box">
            <div className="form-box-input">
              <p>역할</p>
              <select name="major" id="input-dropdown">
                <option disabled selected value="">
                  역할을 선택해주세요.
                </option>
                <option value="">학생</option>
                <option value="">교직원</option>
                <option value="">판매자</option>
              </select>
            </div>
            <div className="form-box-check">
              <img src={down} alt="down" />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-input">
              <p>이름</p>
              <input type="text" name="" id="name" className="input-field" placeholder="이름 입력" required />
            </div>
            <div className="form-box-check">
              <img src={none} alt="none" />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-input">
              <p>닉네임</p>
              <input type="text" name="" id="username" className="input-field" placeholder="닉네임 입력" required />
            </div>
            <div className="form-box-check">
              <img src={none} alt="none" />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-input">
              <p>학번/사번</p>
              <input type="text" name="" id="number" className="input-field" placeholder="학번/사번 입력" required />
            </div>
            <div className="form-box-check">
              <img src={none} alt="none" />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-input">
              <p>비밀번호</p>
              <input type="password" name="" id="password" className="input-field" placeholder="비밀번호 입력" required />
            </div>
            <div className="form-box-check">
              <img src={none} alt="none" />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-input">
              <p>비밀번호 확인</p>
              <input type="password" name="" id="password2" className="input-field" placeholder="비밀번호 입력" required />
            </div>
            <div className="form-box-check">
              <img src={none} alt="none" />
            </div>
          </div>
          <Link to="/">
            <input id="signup" type="submit" className="submit-btn" value="회원가입 완료하기" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
