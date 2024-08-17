import React from "react";
// import "./style4.css";

class OS extends React.Component {
  render() {
    return (
      <div>
        {/* Section 01 */}
        <section className="sec-01">
          <div className="container">
            <h2 className="main-title">サーバについて</h2>
            <div className="content">
              <div className="text-box">
                <h3>そもそもサーバって？</h3>
                <p>
                  簡単にいうと、何かサービスを提供するもの。Webサービスを提供するのはWebサーバ。メールを提供するなら、メールサーバ。
                  このように、○○サーバとよばれています。
                  <br />
                  サーバの機能は、ソフトウェア上で提供されています。ソフトウェアをいくついれても、サービスを同居できるのです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 */}
        <section className="sec-02">
          <div className="container">
            <h3 className="section-title">サーバの役割</h3>
            <div className="content">
              <div className="info">
                <p>
                  サーバの役割は、インターネット経由で使用するもの（広範囲）と、イントラネットやLAN内で使用するもの(狭い範囲)の2つがあります。
                  <br />
                  ①インターネットで利用するもの
                  <br />
                  代表的なWebサーバ、メールサーバ、FTPサーバなど。これらのサーバは、様々な人がアクセスするものです。
                  <br />
                  特に、Webサーバとメールサーバは、レンタルサーバなどの形で1つのコンピュータに複数の管理者が同居する例が多い。
                  <br />
                  求められるものは、アクセス権限の厳密な管理、公開範囲、セキュリティである。
                  <br />
                  ②イントラネットで利用するもの
                  <br />
                  ファイルサーバなどのイントラネット内で利用するサーバにアクセスする人は、身内の人間です。
                  <br />
                  セキュリティよりも使い手によってかわる事が特徴です。（Windowsであればそれに合うソフトウェアを選ぶ）
                </p>
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
                <h4 className="info-title">サーバ用OSの種類について</h4>
                <p>
                  サーバ用のOSはWindows系とUNIX系の2種類に分かれます。UNIX系の派生として、Linux系とBSD系、Solaris系などがあり、本サイトでは無償で提供されているCentOSを使用してLinuxを扱っていきます。
                  <br />
                  代表的な有償サーバ用のOSとして、Windowsサーバ、Red Hat
                  Enterprise Linuxなどが挙げられます。
                  <br />
                  UNIX系では、LinuxとBSD系が大きな勢力であり、Linuxには更にいくつかの種類に分かれます。（ディストリビューションという）
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04 */}
        <section className="sec-04">
          <div className="container">
            <div className="content">
              <div className="info">
                <h4 className="info-title">ディストリビューションについて</h4>
                <p>
                  カーネル（OSのメモリやディスクの読み書き、プログラムの起動、通信などの基本的な機能）のみでは、新たなOSの環境構築はできません。
                  <br />
                  外部の命令を実行するプログラムがなければOSとして機能しないということです。そこで、コミュニティや会社がカーネルにプログラムを加えてセットで提供し、一気にインストールできるようにしました。これをディストリビューションといいます。
                  <br />
                  現在主流のディストリビューション
                  <br />
                  ①Red　Hat系
                  <br />
                  Red Hat社が配布している（有償）Red　Hat Enterprise
                  Linuxを中心とした系列です。CentOSというOSが配布されており、サポートはありません。
                  <br />
                  ②Debian系
                  <br />
                  DebianとUbuntuが有名です。Ubuntuはdesktop利用で人気があります。また、LTSという5年間のセキュリティアップデートが提供されているため、サーバ用としても使いやすいという特徴があります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 */}
        <section className="sec-05">
          <div className="container">
            <h4 className="section-title">実際にWebサーバを動かしてみよう</h4>
            <div className="content">
              <div className="media-info">
                <h4>
                  <a href="index5.html">
                    ①virtualboxとCentOSのダウンロード方法
                  </a>
                </h4>
                <h4>
                  <a href="index6.html">②CentOSを操作してみよう</a>
                </h4>
                <h4>
                  <a href="#">③Webサーバを使ってみよう</a>
                </h4>
                <h4>
                  <a href="#">④SSHで遠隔操作してみよう</a>
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default OS;
