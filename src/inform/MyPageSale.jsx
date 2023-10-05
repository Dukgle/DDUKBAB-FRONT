import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

import "./MyPageSale.css";

function MyPageSale() {
  const logoText = "마이페이지";

  return (
    <div className="my-page">
      <Header logoText={logoText} />

      <div className="my-things">
        <div className="my-name">
          <div className="name-title">
            <p>이름 / 닉네임</p>
          </div>
          <div className="name-box">
            <p>김관리 / 마성떡볶이</p>
            <Link to="/information">
              <button className="inform-modi-btn">수정</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageSale;
