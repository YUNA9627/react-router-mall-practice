import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import TopNotice from "./TopNotice";
import { useNavigate, useLocation } from "react-router";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["SHOP", "COLLECTION", "STYLE", "MORE"];
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const showTopNotice = location.pathname === "/" && !isSearchOpen;
  const hideBanner =
  location.pathname === "/login" || location.pathname.startsWith("/product/");

  const handleLogout = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
      setIsSearchOpen(false);
    }
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

              {authenticate ? (
                <div className="login-button" onClick={handleLogout}>
                  LOGOUT
                </div>
              ) : (
                <div className="login-button" onClick={goToLogin}>
                  LOGIN
                </div>
              )}
            </div>
          </div>
          {showTopNotice && <TopNotice />}

          {isSearchOpen && (
            <>
              <div
                className="search-overlay"
                onClick={() => setIsSearchOpen(false)}
              ></div>
              <div className="search-section">
                <div className="search-bar">
                  <Search size={18} />
                  <input
                    type="text"
                    onKeyDown={(event) => search(event)}
                    placeholder="Search for something"
                  />
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
              src="http://blog.toryburch.com/wp-content/uploads/2018/09/SS19_Shoe_Report_960_slide1_1.jpg"
              alt=""
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
