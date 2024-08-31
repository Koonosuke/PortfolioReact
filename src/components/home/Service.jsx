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
          <h5>React,Node.jsでSNSアプリ制作</h5>
          <div className="pra">
            <p>
              ReactとNode.js初心者がSNSのアプリ制作にチャレンジ(それぞれの基礎入門が終わった後)
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <Link to="/SNS" className="button">
                もっと読む
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="box">
          <div className="card">
            <i className="fas fa-user"> </i>
            <h5>Node.js/Vue.jsで高齢者の見守りアプリを作ってみた</h5>
            <div className="pra">
              <p>
                7DaysインターンでNode.jsのAPI作成、AWSも使用
                <br />
              </p>
              <p style={{ textAlign: "center" }}>
                <Link to="/Elder" className="button">
                  もっと読む
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-user"> </i>
            <h5>M5Core2を使って、ドアの動作検知をlineに送ってみた</h5>
            <div className="pra">
              <ul>
                加速度モジュールを使用してドアの動きを検知、ついでにその時の温度湿度もlineに通知
                <br />
              </ul>
              <p style={{ textAlign: "center" }}>
                <Link to="/IoT" className="button">
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

export default Service;
