import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Technologies</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
      </ul>

      <p>© 2023 InsightTec. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
