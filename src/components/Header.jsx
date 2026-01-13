import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close flipbook
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isFlipbookOpen) {
        setIsFlipbookOpen(false);
      }
    };

    if (isFlipbookOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [isFlipbookOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        {/* Logo bên trái */}
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">⭐</span>
            <span className="logo-text">HCM202 - Tư tưởng HCM</span>
          </div>
        </div>

        {/* Navigation ở giữa */}
        <nav className="nav-center">
          <a href="#concept">Độc lập dân tộc</a>
          <a href="#structure">Đặc trưng</a>
          <a href="#origin">Cách mạng</a>
          <a href="#characteristics">Chủ nghĩa XH</a>
          <a href="#principles">Sáng tạo</a>
          <a href="#vietnam">Tấm gương sáng</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#concept" onClick={() => setIsMobileMenuOpen(false)}>
          Độc lập dân tộc
        </a>
        <a href="#structure" onClick={() => setIsMobileMenuOpen(false)}>
          Đặc trưng
        </a>
        <a href="#origin" onClick={() => setIsMobileMenuOpen(false)}>
          Cách mạng
        </a>
        <a href="#characteristics" onClick={() => setIsMobileMenuOpen(false)}>
          Chủ nghĩa XH
        </a>
        <a href="#principles" onClick={() => setIsMobileMenuOpen(false)}>
          Sáng tạo
        </a>
        <a href="#vietnam" onClick={() => setIsMobileMenuOpen(false)}>
          Tấm gương sáng
        </a>
      </div>

      {/* Flipbook Modal */}
      {isFlipbookOpen && (
        <div className="flipbook-modal">
          <div className="flipbook-modal-content">
            <button
              className="flipbook-close"
              onClick={() => setIsFlipbookOpen(false)}
            >
              ✕
            </button>
            <iframe
              src="https://indd.adobe.com/view/b1f1f306-70fc-417b-9c07-d42f64913530"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
              title="HCM202 - Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội FlipBook"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
