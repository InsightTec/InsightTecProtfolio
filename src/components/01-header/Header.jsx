import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
const currentLcationColor = '#5dbcfc'
const Header = () => {

  const currentLocation = useLocation();
   console.log('currentLocation',currentLocation.pathname)
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleClick = () => {
    console.log('kkk')
    setshowModal(false);
  };

  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <Link to='home'>
              <a href=""  style={currentLocation.pathname === '/home' || currentLocation.pathname === '/' ? { color: currentLcationColor } : {}}>Home</a>
            </Link>
          </li>
          <li>
            <Link to='projects' >
              <a href=""  style={currentLocation.pathname === '/projects' ? { color: currentLcationColor } : {}} >Projects</a>
            </Link>
          </li>
          <li>
            <Link to='services'>
              <a href=""  style={currentLocation.pathname === '/services' ? { color: currentLcationColor } : {}}>Services</a>
            </Link>
          </li>
          <li>
            <Link to='team'>
              <a href="" style={currentLocation.pathname === '/team' ? { color: currentLcationColor } : {}}>Team</a>
            </Link>
          </li>
          <li>
            <Link to='technologies'>
              <a href=""  style={currentLocation.pathname === '/technologies' ? { color: currentLcationColor } : {}}>Technologies </a>
            </Link>
          </li>
          <li>
            <Link to='articles'>
              <a href=""  style={currentLocation.pathname === '/articles' ? { color: currentLcationColor } : {}}>Articles</a>
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <Link to='home' onClick={handleClick}>
                <a href="" >Home</a>
              </Link>
            </li>
            <li>
              <Link to='projects' onClick={handleClick}>
                <a href="">Projects</a>
              </Link>
            </li>
            <li>
              <Link to='services' onClick={handleClick}>
                <a href="">Services</a>
              </Link>
            </li>
            <li>
              <Link to='team' onClick={handleClick}>
                <a href="">Team</a>
              </Link>
            </li>
            <li>
              <Link to='technologies' onClick={handleClick}>
                <a href="">Technologies </a>
              </Link>
            </li>
            <li>
              <Link to='articles' onClick={handleClick}>
                <a href="">Articles</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
