import React from "react";
import Header from "../header/Header";
import { Link } from "react-router-dom";

function Tournament() {
  const logoText = "BEST 메뉴";

  return (
    <>
      <div className="tournament">
        <Header logoText={logoText} />
      </div>
    </>
  );
}

export default Tournament;
