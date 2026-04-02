import { useEffect, useState } from "react";
import "../TopNotice.css";

export default function TopNotice() {
  const notices = [
    "Only Here! AUTUMN MOMENT 멤버의 특별한 혜택",
    "신규 회원 가입 시 웰컴 쿠폰 증정",
    "베스트 아이템 무료배송 이벤트 진행 중",
    "멤버십 고객 대상 단독 프로모션 오픈",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hideNotice, setHideNotice] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [notices.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideNotice(true);
      } else {
        setHideNotice(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top-notice ${hideNotice ? "hide" : ""}`}>
      <div
        className="top-notice-track"
        style={{ transform: `translateY(-${currentIndex * 32}px)` }}
      >
        {notices.map((text, index) => (
          <div className="top-notice-item" key={index}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}