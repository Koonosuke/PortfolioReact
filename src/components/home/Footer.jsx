import React from "react";
import "./style.css";
function Footer() {
  return (
    <footer>
      <div className="socialEffect__box">
        <p>Xアカウントはこちら⇩⇩⇩⇩</p>
        <a href="https://twitter.com/@kounosu761021" className="button-two">
          お問い合わせ
        </a>
      </div>

      <ul className="socialEffect__box">
        <p>Instagram acount</p>
        <p>Please follow me</p>
        <li>
          <a
            className="socialEffect__link icon-instagram"
            href="https://www.instagram.com/konosu_ke76"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <p className="end">mail:22fi041@ms.dendai.ac.jp</p>
    </footer>
  );
}

export default Footer;
