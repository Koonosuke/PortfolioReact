import React from "react";

function Intern() {
  return (
    <div>
      {/* Section 01 */}
      <section className="sec-01">
        <div className="container">
          <h2 className="main-title">
            A社の７Daysエンジニアインターンを受けて
          </h2>
          <div className="content">
            <div className="text-box">
              <h3>1日目</h3>
              <h2>環境設定</h2>

              <p>AWSのLambda/API Gateway/DynamoDBについて</p>
              <ul>
                <li>Githubで当社のTokenを取得。Cloud9を起動</li>
                <li>
                  Cloud9のターミナルでclone(git clone
                  https://Token@github.com/○○)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section className="sec-02">
        <div className="container">
          <h3 className="section-title">API構築</h3>
          <div className="content">
            <div className="info">
              <li>
                AWS API
                GatewayでHTTPリクエストとLambdaをつなげる（APIのデプロイ）
              </li>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section className="sec-03">
        <div className="container">
          <div className="content">
            <div className="image">
              <img src="os.png" alt="OS" />
            </div>
            <div className="info">
              <h4 className="info-title">セクション3</h4>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 */}
      <section className="sec-04">
        <div className="container">
          <div className="content">
            <div className="info">
              <h4 className="info-title">セクション4</h4>
              <p></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05 */}
      <section className="sec-05">
        <div className="container">
          <h4 className="section-title">セクション5</h4>
          <div className="content">
            <div className="media-info">
              <h4>
                <a href="#">①リンク1</a>
              </h4>
              <h4>
                <a href="#">②リンク2</a>
              </h4>
              <h4>
                <a href="#">③リンク3</a>
              </h4>
              <h4>
                <a href="#">④リンク4</a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intern;
