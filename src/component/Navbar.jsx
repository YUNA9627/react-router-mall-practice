import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const menuList = ["SHOP", "COLLECTION", "STYLE", "MORE"];
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const hideBanner = location.pathname === "/login";

  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <header>
          <div className="nav-section">
            <div className="top-section">
              <div className="left">
                <button
                  className="hamburger-button"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu size={22} />
                </button>
              </div>
              <div className="logo-area">
                <a href="" onClick={goToHome}>
                  <img className="logo" src={logo} alt="logo" />
                </a>
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

                <div className="login-button" onClick={goToLogin}>
                  LOGIN
                </div>
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
                    <Search size={18} />
                    <input type="text" placeholder="Search for something" />
                    <button className="search-button">SEARCH</button>
                  </div>
                </div>
              </>
            )}

            {isMenuOpen && (
              <>
                <div
                  className="menu-overlay"
                  onClick={() => setIsMenuOpen(false)}
                ></div>

                <aside className="side-menu">
                  <div className="side-menu-header">
                    <button
                      className="close-menu-button"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X size={22} />
                    </button>
                  </div>

                  <ul className="side-menu-list">
                    {menuList.map((menu) => (
                      <li key={menu}>
                        <a href="/">{menu}</a>
                      </li>
                    ))}
                  </ul>
                </aside>
              </>
            )}
          </div>
        {!hideBanner && (
            <div className="banner">
              <img
                src="https://storage.heypop.kr/assets/2023/08/24165850/t-8.jpg"
                alt=""
              />
            </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
