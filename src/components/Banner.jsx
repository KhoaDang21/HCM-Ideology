function Banner() {
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="hero-image-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge animate-fade-up">
          Chương III · Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã
          hội
        </div>
        <h1 className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Độc Lập Dân Tộc Gắn Liền
          <br />
          Với Chủ Nghĩa Xã Hội
        </h1>
        <p
          className="subtitle animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội là ngọn
          đuốc soi đường cho cách mạng Việt Nam, kết hợp nhuần nhuyễn giữa lý
          luận khoa học và thực tiễn sinh động.
        </p>
        <div
          className="hero-stats animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="stat">
            <span className="stat-number">Độc Lập Dân Tộc</span>
            <span className="stat-label">
              Quyền thiêng liêng, bất khả xâm phạm
            </span>
          </div>
          <div className="stat">
            <span className="stat-number">Cách mạng giải phóng dân tộc</span>
            <span className="stat-label">Con đường cách mạng vô sản</span>
          </div>
          <div className="stat">
            <span className="stat-number">Chủ Nghĩa Xã Hội</span>
            <span className="stat-label">Con đường phát triển tất yếu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
