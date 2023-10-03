import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

import "./MyPage.css";

function MyPage() {
  const logoText = "마이페이지";

  return (
    <div className="my-page">
      <Header logoText={logoText} />

      <div className="my-things">
        <div className="my-name">
          <div className="name-title">
            <p>이름 / 닉네임</p>
            <p>30000 P</p>
          </div>
          <div className="name-box">
            <p>김덕우 / 쩝쩝박사</p>
            <Link to="/information">
              <button>수정</button>
            </Link>
          </div>
        </div>

        <div className="my-reservation">
          <div className="name-title">자리 예약 내역</div>
        </div>

        <div className="my-food">
          <div className="name-title">나의 식단</div>
          <Link to="/#">
            <button className="name-box">
              <p>식단 관리하러 가기</p>
            </button>
          </Link>
        </div>
        <div className="my-review">
          <div className="name-title">내 후기</div>
          <Link to="/#">
            <button className="name-box">
              <p>내 후기 확인하러 가기</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
