import React from "react";
import "./style3.css";

const PHPIntro = () => {
  const copyToClipboard = () => {
    const textToCopy = "<?php echo 'Hello PHP'; ?>";

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Copied to Clipboard: " + textToCopy);
  };

  return (
    <div>
      <div className="container">
        <h1>PHPで何ができる？</h1>
        <p>Web開発に特化しており、フレームワークが充実している。</p>
        <p>
          特徴としてHTMLで記述したファイルの中に埋め込んで使えることがあげられます。HTMLで記述された内容の途中にPHPのプログラムを記述するわけです。これによってPHP・HTMLを別々のファイルとして扱うのでなく、1つのファイルにまとめられるので便利です。
        </p>
        <p>
          特にフレームワークでは、Laravelが人気です。Laravelは2011年に登場したフレームワークですが、圧倒的な分かりやすさと初心者でもコードが綺麗に書けるという評価から、GitHubではPHPのフレームワークの中で最高評価を得ています。
        </p>
      </div>

      <div className="container">
        <h1>準備するもの</h1>
        <p>VsCodeとXAMPP</p>
      </div>

      <div className="container">
        <h1>簡単なPHP</h1>
        <p>Hello PHPと出力したい</p>
        <pre>&lt;?php echo 'Hello PHP'; ?&gt;</pre>

        <button id="copyButton" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>

      <div className="container">
        <h1>勉強進捗度掲示板を作ってみた</h1>
        <img src="PHP1.png" alt="PHP Image" />
        <p>
          VScodeとphpmyadminを使用しました。名前と書き込み要素だけでなく、日付も指定しました。欠点としては、掲示板内にコードを書くと影響がある事です。これはPHPを学習する中で改善しようと考えています。
        </p>
      </div>

      <div className="container">
        <h1>phpmyadminについて</h1>
        <img src="PHP2.png" alt="PHP Image" />
        <p>
          SQLを講義では扱ったものの始めての実装となりました。bbs-tableを作成し、`id`,
          `username`, `comment`, `postDate`の要素を作りました。
        </p>
      </div>
    </div>
  );
};

export default PHPIntro;
