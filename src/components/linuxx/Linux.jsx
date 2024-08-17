import React from "react";
import "./style2.css";

function Linux() {
  return (
    <div>
      {/* section01 */}
      <section className="sec-01">
        <div className="container">
          <h2 className="main-title">Linuxについて</h2>
          <div className="content">
            <div className="image">
              <img src="R.png" alt="Linux Introduction" />
            </div>
            <div className="text-box">
              <h3>そもそもOSって？</h3>
              <p>
                OSとはアプリケーションソフトウェアを動作させるための基本的なソフトウェアを指します。
                コンピューター全体の動作を管理、制御（せいぎょ）して私たちがコンピューターを使えるようにする役割があります！
                WindowsとかMacとかもOSの1つ！もちろんLinuxも
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section02 */}
      <section className="sec-02">
        <div className="container">
          <h3 className="section-title">Linuxの特徴</h3>
          <div className="content">
            <div className="image">
              <img src="linux.png" alt="Linux Features" />
            </div>
            <div className="info">
              <h4 className="info-title">Linuxと他のOSとの違い</h4>
              <p>
                Linuxの特徴として、無料で誰でも使えるオープンソース（複製、修正など自由にできること）であるという点が挙げられます。
                WindowsなどのOSは私たちがお金を払ってPCを管理させています。Linuxはなんと無料。
                Linuxでは、自身でサーバを構築したり、開発も使い方を知っていれば思い通りに作ることができます！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section03 */}
      <section className="sec-03">
        <div className="container">
          <h3 className="section-title">Linuxを使うための手順（未制作）</h3>
          <div className="content">
            <div className="media-info">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab facebook"></i> Linuxのインストール方法
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i> Linuxコマンド（使い方）
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{" "}
                    実際にコマンドを使ってみよう
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i> おすすめ参考書
                  </a>
                </li>
              </ul>
            </div>
            <div className="image">
              <img src="" alt="Additional Resources" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Linux;
