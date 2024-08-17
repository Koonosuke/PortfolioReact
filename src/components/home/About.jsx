import React from "react";
import "./style.css";
function About() {
  return (
    <section className="about" id="selfIntro">
      <div className="main">
        <img src="inu.png" alt="" />
        <div className="about-text">
          <h2>自己紹介</h2>
          <h5>私立理系大学情報学科3年</h5>
          <p>
            幸之介です。将来はフルスタックエンジニア　or　IoTエンジニア目指しています
            <ul>現在の技術スタック:</ul>
            <li>Java（SpringBoot）1年半</li>
            <li>
              Javascript(React/Node.js（Express）/Typescript)それぞれ4か月目
            </li>
            <li>PHP（データベース接続程度）</li>
            <ul>その他</ul>
            <li>MySQL/Postgres/MongoDB/Docker/Linuxなどなど</li>
            次チャレンジしたいことは、ラズパイでデータの取得をし、AWSIoTにデータを蓄積したい！！（おおざっぱ）mata,
            AWSのEC2の基礎を学習したい。また、Pythonでのデータ分析をしたい
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
