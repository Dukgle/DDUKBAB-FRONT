import React from "react";
import Header from "../header/Header";

import "./TournamentVoteWin.css";

import vote from "../icon/Best-Menu.png";
import logo from "../icon/DDUKBAB.png";
import win from "../icon/fireworks.png";
import win2 from "../icon/fireworks-2.png";

function TournamentVoteWin() {
  const logoText = "BEST 메뉴";

  return (
    <div className="tournamentvote-page">
      <Header logoText={logoText} />

      <div className="my-things">
        <div className="vote-title">
          <img src={vote} alt="vote" />
        </div>

        <div className="votes-win">
          <div className="votes-win-title">
            <img src={win} alt="winImg" />
            <p>우승</p>
            <img src={win2} alt="winImg" />
          </div>

          <div className="votes-things-win-list">
            <div className="votes-thing-win">
              <div className="votes-thing-box-win">
                <img src={logo} alt="logo" />
              </div>
              <p>알리오올리오</p>
            </div>
          </div>
        </div>

        {/* 포인트 투자 버튼 */}
        <div className="point-vote-button">
          <button>
            투표하고
            <br />
            해당 메뉴 식권 얻기
          </button>
        </div>
      </div>
    </div>
  );
}

export default TournamentVoteWin;
