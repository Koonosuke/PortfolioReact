import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Hero() {
  return (
    <div className="hero">
      <div className="button-container">
        <a href="#selfIntro" className="button" id="selfIntroButton">
          軽く自己紹介
        </a>
        <p style={{ textAlign: "center" }}>
          <Link to="/Intern" className="button">
            インターン
          </Link>
        </p>
        <a href="index2.html" className="button">
          就活について
        </a>
        <a href="index2.html" className="button">
          将来の夢
        </a>
        <a href="index2.html" className="button">
          資格
        </a>
      </div>
      <div className="content">
        <div className="body">
          <div className="portfolioInfo">
            <h1>
              Kounosuke<span>Site</span>
            </h1>
            <h3>制作言語：React/CSS</h3>
          </div>
          <img src="BB81.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
