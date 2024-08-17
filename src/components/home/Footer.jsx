import React from "react";
import "./style.css";
function Footer() {
  return (
    <footer>
      <p>Instagram acount</p>
      <p>Please follow me</p>
      <ul className="socialEffect__box">
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
