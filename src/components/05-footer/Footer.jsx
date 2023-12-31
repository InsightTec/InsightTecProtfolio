import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <Link to='home'>
            <a href="">About</a>
          </Link>
        
        </li>
        <li>
        <Link to='projects'>
          <a href="">Projects</a>
          </Link>
        </li>
        <li>
        <Link to='services'>
          <a href="">Services</a>
          </Link>
        </li>
        <li>
        <Link to='team'>
          <a href="">Team</a>
          </Link>
        </li>
        <li>
        <Link to='technologies'>
          <a href="">Technologies</a>
          </Link>
        </li>
        <li>
        <Link to='articles'>
          <a href="">Articles</a>
          </Link>
        </li>
      </ul>

      <p>© 2024 InsightTec. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
