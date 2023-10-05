import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

import "./MyPage.css";

import linkImg from "../icon/linkImg.svg";

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
              <button className="inform-modi-btn">수정</button>
            </Link>
          </div>
        </div>

        <div className="pay-logout">
          <Link to="/#">
            <button className="pay-btn">포인트 충천하기</button>
          </Link>
          <Link to="/">
            <button className="logout-btn">로그아웃</button>
          </Link>
        </div>

        <div className="my-reservation">
          <div className="name-title">자리 예약 내역</div>
          <div className="reservation-box">
            {/* 1. 예약 내역이 없는 경우 */}
            {/* <p>예약된 내역이 없습니다.</p> */}

            {/* 2. 예약 내역이 있는 경우 */}
            <div className="my-seat">
              <div className="my-seat-text">
                <p>내 자리</p>
              </div>
              <div className="my-seat-num">
                <p>A-1</p>
              </div>
            </div>
            <div className="reserv-line"></div>

            {/* 2-1. 예약 후 아직 좌석 사용을 안 했을 경우 */}
            {/* <div className="seat-time">
              <div className="seat-time-text">남은 시간</div>
              <div className="seat-time-num">4:58</div>
              <button className="reserv-non-btn">취소</button>
            </div> */}

            {/* 2-2. 예약 후 좌석 사용 중 */}
            <div className="seat-time">
              <div className="using-seat">
                <p>
                  현재 자리를
                  <br />
                  이용중입니다.
                </p>
                <button className="reserv-back-btn">반납하기</button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-food">
          <div className="name-title">나의 식단</div>
          <Link to="/#">
            <button className="name-box-2">
              <p>식단 관리하러 가기</p>
              <img src={linkImg} alt="link" />
            </button>
          </Link>
        </div>
        <div className="my-review">
          <div className="name-title">내 후기</div>
          <Link to="/#">
            <button className="name-box-2">
              <p>내 후기 확인하러 가기</p>
              <img src={linkImg} alt="link" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
