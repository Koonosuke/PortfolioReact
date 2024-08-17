import React from "react";

const JavaTodo = () => {
  return (
    <div>
      <div className="container">
        <h1>JavaTodoリスト制作の流れ</h1>
        <ul>
          <li>
            <a href="index10.html">完成（まずは見てみよう）</a>
          </li>
          <li>
            <a href="index7.html">①外部設計.内部設計</a>
          </li>
          <li>
            <a href="index8.html">②データベースの作成</a>
          </li>
          <li>
            <a href="index9.html">③それぞれのクラス</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <h1>①外部設計.内部設計</h1>
      </div>
      <div className="container">
        <h1>Todoリストの内容と外部設計</h1>
        <img src="popo.jpg" alt="Java Image" />
        <p>
          外部設計はこのようになっています。背景は、画像を挿入する予定です。
        </p>
      </div>
      <div className="container">
        <h1>MVCモデルとは</h1>
        <img src="MVC1.jpg" alt="PHP Image" />
      </div>
      <div className="container">
        <h1>MVCモデルの仕組み</h1>
        <img src="MVC.jpg" alt="PHP Image" />
      </div>
      <div className="container">
        <h1>今回のMVCモデル</h1>
        <img src="MVC2.jpg" alt="PHP Image" />
      </div>
      <div className="container">
        <h1>②データベースの作成</h1>
        <a href="index8.html" className="next-button">
          次へ
        </a>
      </div>
    </div>
  );
};

export default JavaTodo;
