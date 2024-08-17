import React from "react";
import "./style.css";
function Header() {
  return (
    <nav>
      <h2 className="logo">
        Kounosuke<span>site</span>
      </h2>
      <ul>
        <li>
          <a href="#">ホーム</a>
        </li>
      </ul>
      <a href="https://twitter.com/@kounosu761021" className="btn">
        お問い合わせ
      </a>
    </nav>
  );
}

export default Header;
