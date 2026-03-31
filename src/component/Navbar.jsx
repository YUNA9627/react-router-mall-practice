import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const menuList = ["SHOP", "COLLECTION", "STYLE", "MORE"];
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header>
        <div className="navbar">
          <div className="top-section">
            <div className="left">
              <button className="hamburger-button">
                <Menu size={22} />
              </button>
            </div>
            <div className="logo-area">
              <img width={200} className="logo" src={logo} alt="logo" />
            </div>

            <div className="menu-area">
              <ul className="menu-list">
                {menuList.map((menu) => (
                  <li key={menu}>{menu}</li>
                ))}
              </ul>
            </div>

            <div className="right">
              <button
                className="top-search-button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
              >
                <Search size={20} />
              </button>

              <div className="login-button">LOGIN</div>
            </div>
          </div>

          {isSearchOpen && (
            <>
              <div
                className="search-overlay"
                onClick={() => setIsSearchOpen(false)}
              ></div>
              <div className="search-section">
                <div className="search-bar">
                  <Search size={20} />
                  <input type="text" placeholder="Search for something" />
                  <button className="search-button">SEARCH</button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="banner">
          <img
            src="https://storage.heypop.kr/assets/2023/08/24165850/t-8.jpg"
            alt=""
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
