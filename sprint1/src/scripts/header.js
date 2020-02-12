import React from "react";
import logo from "../assets/Logo/Logo-brainflix.svg";
import faceImage from "../assets/Images/face.png";

export default function header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="../../public/index.html">
          <img src={logo} alt="BrainFlix-logo" />
        </a>
      </div>
      <form className="header__form">
        <input
          className="header__search"
          type="text"
          placeholder="Search"
        ></input>
        <div className="header__bimg">
          <button className="header__bimg-button"> + UPLOAD</button>
          <div className="header__bimg-img">
            <img src={faceImage} alt="user-face" />
          </div>
        </div>
      </form>
    </header>
  );
}
