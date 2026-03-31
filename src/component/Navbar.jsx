import React, { useState } from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const menuList = ["SHOP", "COLLECTION", "STYLE", "MORE"];
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="top-section">
        <div className="logo-area">
          <img width={200} src="../src/assets/logo.png" alt="logo" />
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
        <div className="search-section">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search for something" />
            <button className="search-button">SEARCH</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;