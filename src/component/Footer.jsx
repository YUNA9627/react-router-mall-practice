import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">AUTUMN MOMENT</h2>
            <p className="footer-text">
              가을 무드의 데일리 셀렉션
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>SHOP</h3>
              <a href="/">New Arrivals</a>
              <a href="/">Best Items</a>
              <a href="/">Collection</a>
            </div>

            <div className="footer-column">
              <h3>ABOUT</h3>
              <a href="/">Brand Story</a>
              <a href="/">Membership</a>
              <a href="/">Stores</a>
            </div>

            <div className="footer-column">
              <h3>HELP</h3>
              <a href="/">Notice</a>
              <a href="/">Q&amp;A</a>
              <a href="/">Delivery &amp; Returns</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>Customer Center 1588-0000</p>
            <p>Mon - Fri 10:00 - 18:00 / Lunch 12:00 - 13:00</p>
          </div>

          <p className="footer-copy">
            © 2026 AUTUMN MOMENT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;