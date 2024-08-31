import React from "react";

import { Link } from "react-router-dom";
import "./style.css";
function Contact() {
  return (
    <div className="contact">
      <div className="title">
        <p>～その他～</p>
        <div className="box">
          <div className="card">
            <i className="fas fa-user"> </i>
            <h5>Git</h5>
            <div className="pra">
              <ul>
                チーム開発での基礎
                <br />
              </ul>
              <p style={{ textAlign: "center" }}>
                <Link to="/Gitt" className="button">
                  もっと読む
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-user"> </i>
            <h5>Webサーバの基礎</h5>
            <div className="pra">
              <ul>
                virtualbox（CentOS）を使って、Webサーバの仕組みを0から学んでいきます。
                <br />
              </ul>
              <p style={{ textAlign: "center" }}>
                <Link to="/OS" className="button">
                  もっと読む
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-bars"> </i>
            <h5>Linuxって何？</h5>
            <div className="pra">
              <ul>
                Dockerを使ってLinuxの環境構築。コマンドの使い方も
                <br />
              </ul>
              <p style={{ textAlign: "center" }}>
                <Link to="/linux" className="button">
                  もっと読む
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
