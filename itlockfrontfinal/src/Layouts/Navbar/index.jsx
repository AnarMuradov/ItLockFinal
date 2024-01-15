import React from "react";
import "./style.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__content">
          <div className="navbar__container__content__logo">
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png"
              alt=""
            />
          </div>
          <div className="navbar__container__content__items">
            <ul className="navbar__container__content__items__list">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Case Study</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="navbar__container__support">
          <button>Free Quote</button>
          <div className="navbar__container__support__call">
            <i class="fa-solid fa-headphones"></i>
            <div className="navbar__container__support__call__numb">
              <p>Have any Question?</p>
              <span>Call: 10 (78) 837 3647</span>
            </div>
          </div>
        </div>  
      </div>
    </nav>
  );
};

export default Navbar;
