import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

import "./Tournament.css";

function Tournament() {
  const logoText = "BEST 메뉴";

  return (
    <>
      <div className="tournament">
        <Header logoText={logoText} />

        <div className="my-things">
          {/* 순위 별 박스 */}
          <div className="tour-box">
            <div className="tour-box-name">
              <p style={{ color: "#43000A" }}>4위</p>
              <p style={{ marginLeft: "10px" }}>알리오올리오</p>
            </div>
            <div className="tour-box-rest">
              <p>파스타</p>
            </div>
          </div>

          <div className="tour-box">
            <div className="tour-box-name">
              <p style={{ color: "#43000A" }}>5위</p>
              <p style={{ marginLeft: "10px" }}>오늘의 메뉴B</p>
            </div>
            <div className="tour-box-rest">
              <p>오늘의 메뉴B</p>
            </div>
          </div>

          <div className="tour-box">
            <div className="tour-box-name">
              <p style={{ color: "#43000A" }}>6위</p>
              <p style={{ marginLeft: "10px" }}>고구마돈가스</p>
            </div>
            <div className="tour-box-rest">
              <p>군산카츠</p>
            </div>
          </div>

          <div className="tour-box">
            <div className="tour-box-name">
              <p style={{ color: "#43000A" }}>7위</p>
              <p style={{ marginLeft: "10px" }}>오늘의 메뉴A</p>
            </div>
            <div className="tour-box-rest">
              <p>오늘의 메뉴A</p>
            </div>
          </div>

          <div className="tour-box">
            <div className="tour-box-name">
              <p style={{ color: "#43000A" }}>8위</p>
              <p style={{ marginLeft: "10px" }}>로제파스타</p>
            </div>
            <div className="tour-box-rest">
              <p>파스타</p>
            </div>
          </div>

          <div className="tour-box">
            <div className="tour-box-name">
              <p style={{ color: "#43000A" }}>9위</p>
              <p style={{ marginLeft: "10px" }}>마성떡볶이</p>
            </div>
            <div className="tour-box-rest">
              <p>마성떡볶이</p>
            </div>
          </div>

          {/* 투표하기 버튼 */}
          <div className="vote-button">
            <Link to="/votes">
              <button>투표하기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tournament;
