import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Service() {
  return (
    <div className="service">
      <div className="title">
        <h2>～ポートフォリオ～</h2>
      </div>
      <div className="box">
        <div className="card">
          <i className="fas fa-bars"> </i>
          <h5>Linuxって何？</h5>
          <div className="pra">
            <p>
              Linuxなにができるかを簡単に解説！
              ここではDockerを使ってLinuxの環境構築をしてみよう👍
              コマンドの使い方ものってます
            </p>
            <p style={{ textAlign: "center" }}>
              <Link to="/linux" className="button">
                もっと読む
              </Link>
            </p>
          </div>
        </div>
        <div className="card">
          <i className="fas fa-user"> </i>
          <h5>PHP勉強中</h5>
          <div className="pra">
            <p>
              XAMPPとPHPを使って、簡単な掲示板を作ってみた
              （XAMPPに不具合が発生したので中止）
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <Link to="/PHP" className="button">
                もっと読む
              </Link>
            </p>
          </div>
        </div>
        <div className="card">
          <i className="fas fa-user"> </i>
          <h5>Webサーバの基礎</h5>
          <div className="pra">
            <p>
              virtualbox（CentOS）を使って、Webサーバの仕組みを0から学んでいきます。
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <Link to="/OS" className="button">
                もっと読む
              </Link>
            </p>
          </div>
        </div>

        <div className="card">
          <i className="fas fa-user"> </i>
          <h5>JavaでTodoアプリ作ってみた</h5>
          <div className="pra">
            <p>
              Javaのフレームワークの1つであるSpringBootを使ってTodoアプリを作りました。
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <Link to="/JavaTodo" className="button">
                もっと読む
              </Link>
            </p>
          </div>
        </div>

        <div className="card">
          <i className="fas fa-user"> </i>
          <h5>React,Node.jsの開発の基礎</h5>
          <div className="pra">
            <p>
              ReactとNode.js初心者がSNSのアプリ制作にチャレンジ(それぞれの基礎入門が終わった後)
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <a href="index11.html" className="button">
                もっと読む
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
