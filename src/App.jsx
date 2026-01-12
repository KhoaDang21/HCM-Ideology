import { useEffect, useState } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";

// Data
import {
  structure,
  origins,
  characteristics,
  principles,
  reality,
  policies,
  vnFeatures,
  vnFeaturesImage,
  vnFeaturesImages,
} from "./data/content";

function App() {
  const [featureImgIndex, setFeatureImgIndex] = useState(0);
  const featureImages =
    (vnFeaturesImages && vnFeaturesImages.length > 0 && vnFeaturesImages) ||
    (vnFeaturesImage ? [vnFeaturesImage] : []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Header />
      <Banner />

      {/* Các phần nội dung khác */}
      <section className="panel" id="concept">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            I. TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC
          </div>
          <h2>A. Vấn đề độc lập dân tộc</h2>
          <p>
            Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của mọi dân
            tộc. Hồ Chí Minh khẳng định độc lập dân tộc là quyền tự nhiên, khách
            quan của mọi dân tộc, đồng thời phải gắn liền với tự do, hạnh phúc
            của nhân dân.
          </p>
        </div>
        <div className="grid two">
          <div className="card deep animate-on-scroll">
            <div className="tagline">Tuyên ngôn Độc lập 1945</div>
            <h3>Quyền thiêng liêng của dân tộc</h3>
            <p>
              "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã
              thành một nước tự do và độc lập. Toàn thể dân tộc Việt Nam quyết
              đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ
              vững quyền tự do và độc lập ấy." — Hồ Chí Minh
            </p>
          </div>
          <div className="card animate-on-scroll">
            <div className="tagline">Đặc trưng độc lập dân tộc</div>
            <h3>Các yếu tố cấu thành</h3>
            <ul className="bullet-list">
              <li>
                Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của mọi
                dân tộc.
              </li>
              <li>
                Độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân.
              </li>
              <li>
                Độc lập phải là nền độc lập thật sự, hoàn toàn và triệt để.
              </li>
              <li>
                Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ.
              </li>
              <li>
                Con đường cách mạng giải phóng dân tộc theo cách mạng vô sản.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="panel" id="structure">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">Đặc trưng</div>
          <h2>Quan điểm về độc lập dân tộc</h2>
        </div>
        <div className="grid five">
          {structure.map((item, index) => (
            <div
              key={item.title}
              className="card soft animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.image && (
                <div className="card-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="card-image-placeholder"
                    style={{ display: "none" }}
                  >
                    <span className="placeholder-icon">🖼️</span>
                    <span className="placeholder-text">Hình ảnh</span>
                  </div>
                </div>
              )}
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" id="origin">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">B. Về cách mạng giải phóng dân tộc</div>
          <h2>Con đường cách mạng vô sản</h2>
          <p>
            Muốn giải phóng dân tộc thành công phải đi theo con đường cách mạng
            vô sản, kết hợp độc lập dân tộc với chủ nghĩa xã hội. Cách mạng phải
            do Đảng Cộng sản lãnh đạo và dựa trên sức mạnh của khối đại đoàn kết
            toàn dân tộc.
          </p>
        </div>
        <div className="grid three">
          {origins.map((item, index) => (
            <div
              key={item.title}
              className="card animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {item.image && (
                <div className="card-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="card-image-placeholder"
                    style={{ display: "none" }}
                  >
                    <span className="placeholder-icon">🖼️</span>
                    <span className="placeholder-text">Hình ảnh</span>
                  </div>
                </div>
              )}
              <div className="tagline">{item.title}</div>
              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" id="characteristics">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            II. TƯ TƯỞNG HỒ CHÍ MINH VỀ CHỦ NGHĨA XÃ HỘI
          </div>
          <h2>Đặc trưng của chủ nghĩa xã hội</h2>
        </div>
        <div className="grid three">
          {characteristics.map((item, index) => (
            <div
              key={item.title}
              className="card deep animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {item.image && (
                <div className="card-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="card-image-placeholder"
                    style={{ display: "none" }}
                  >
                    <span className="placeholder-icon">🖼️</span>
                    <span className="placeholder-text">Hình ảnh</span>
                  </div>
                </div>
              )}
              <div className="icon">{item.icon}</div>
              <div className="tagline">{item.title}</div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" id="principles">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            III. HỆ TƯ DUY MỚI CHO THẾ HỆ TRẺ VIỆT NAM
          </div>
          <h2>Bản lĩnh - Sáng tạo - Cống hiến</h2>
          <p>
            Trong bối cảnh toàn cầu hóa và kỷ nguyên số, thế hệ trẻ Việt Nam cần
            trang bị hệ tư duy vững vàng kết hợp giữa triết lý truyền thống và
            hơi thở thời đại.
          </p>
        </div>
        <div className="animate-on-scroll">
          <Dropdown items={principles} />
        </div>
      </section>

      <section className="panel" id="vietnam">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            IV. GƯƠNG MẶT TIÊU BIỂU VÀ CÂU CHUYỆN THÀNH CÔNG
          </div>
          <h2>A. Những tấm gương sáng của thế hệ trẻ</h2>
          <p>
            Những câu chuyện thành công từ các cá nhân và tập thể không chỉ là
            ánh hào quang của riêng họ, mà là những tấm gương phản chiếu khát
            vọng vươn mình của cả một thế hệ.
          </p>
        </div>
        <div className="card highlight animate-on-scroll">
          {(vnFeaturesImages?.length > 0 || vnFeaturesImage) && (
            <div className="feature-slider">
              <button
                className="feature-nav prev"
                aria-label="Ảnh trước"
                onClick={() =>
                  setFeatureImgIndex((prev) =>
                    prev === 0 ? featureImages.length - 1 : prev - 1
                  )
                }
              >
                ‹
              </button>

              <div className="feature-image-wrapper">
                <img
                  src={featureImages[featureImgIndex]}
                  alt="Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội"
                  className="feature-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="card-image-placeholder"
                  style={{ display: "none" }}
                >
                  <span className="placeholder-icon">🖼️</span>
                  <span className="placeholder-text">Hình ảnh</span>
                </div>
              </div>

              <button
                className="feature-nav next"
                aria-label="Ảnh tiếp"
                onClick={() =>
                  setFeatureImgIndex((prev) =>
                    prev === featureImages.length - 1 ? 0 : prev + 1
                  )
                }
              >
                ›
              </button>
            </div>
          )}

          {featureImages.length > 1 && (
            <div className="feature-dots">
              {featureImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`feature-dot ${
                    idx === featureImgIndex ? "active" : ""
                  }`}
                  aria-label={`Chuyển tới ảnh ${idx + 1}`}
                  onClick={() => setFeatureImgIndex(idx)}
                />
              ))}
            </div>
          )}
          <h3>
            Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội - Ngọn
            đuốc soi đường
          </h3>
          <ul className="bullet-list">
            {vnFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="grid adaptive">
          {reality.map((item, index) => (
            <div
              key={item.title}
              className="card soft animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.image && (
                <div className="card-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="card-image-placeholder"
                    style={{ display: "none" }}
                  >
                    <span className="placeholder-icon">🖼️</span>
                    <span className="placeholder-text">Hình ảnh</span>
                  </div>
                </div>
              )}
              <div className="tagline">{item.title}</div>
              <p>{item.text}</p>
              {item.link && (
                <div style={{ marginTop: "16px", textAlign: "center" }}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-reference-link"
                  >
                    🔗 {item.linkText}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            B. Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội - Kim
            chỉ nam cho cách mạng Việt Nam
          </div>
          <h2>Kết luận</h2>
        </div>
        <div className="policy-flow">
          {policies.map((item, idx) => (
            <div
              key={item.title}
              className="policy-card animate-on-scroll"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="step">0{idx + 1}</div>
              <div style={{ flex: 1 }}>
                {item.image && (
                  <div className="policy-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="policy-image"
                      onError={(e) => {
                        console.log(`Lỗi tải ảnh: ${item.image}`);
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="card-image-placeholder"
                      style={{ display: "none" }}
                    >
                      <span className="placeholder-icon">📋</span>
                      <span className="placeholder-text">{item.title}</span>
                    </div>
                  </div>
                )}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
