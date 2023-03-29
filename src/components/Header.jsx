import React from "react";

function Header(props) {
  return (
    <header>
      <nav>
        <div className="navbar-content">
          <img className="logo" src={props.logo} alt="logo" />
          <ul className="nav-items">
            <li className="nav-link">
              <a href={props.instagram}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="nav-link">
              <a href={props.twitter}>
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={props.github}>
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
