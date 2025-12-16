# 📚 MLN131 - Chương VI: Tôn Giáo Trong Thời Kỳ Quá Độ

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Ứng dụng web tương tác về Triết học Mác - Lênin**

*Khám phá quan điểm của Chủ nghĩa Mác - Lênin về tôn giáo trong thời kỳ quá độ lên Chủ nghĩa Xã hội*

[🚀 Demo Live](#) • [📖 Tài liệu](#tài-liệu) • [🛠️ Cài đặt](#cài-đặt) • [👥 Đóng góp](#đóng-góp)

</div>

---

## 🎯 Tổng quan

**MLN131 - Chương VI** là một ứng dụng web hiện đại được thiết kế để trình bày nội dung học thuật về **Vấn đề Dân tộc và Tôn giáo** trong môn Triết học Mác - Lênin. Ứng dụng cung cấp trải nghiệm học tập tương tác với giao diện đẹp mắt và responsive.

### ✨ Tính năng nổi bật

- 🎨 **Giao diện hiện đại** - Thiết kế responsive với màu sắc hài hòa (đỏ, trắng, vàng)
- 📱 **Tương thích đa thiết bị** - Hoạt động mượt mà trên desktop, tablet và mobile
- 🖼️ **Thư viện ảnh phong phú** - Hình ảnh minh họa chất lượng cao
- ⚡ **Hiệu suất tối ưu** - Tải nhanh với Vite và React 19
- 🎭 **Hiệu ứng động** - Animation mượt mà và chuyển tiếp đẹp mắt
- 📚 **Nội dung học thuật** - Thông tin chính xác và đầy đủ

---

## 🏗️ Cấu trúc nội dung

### I. Quan điểm của Chủ nghĩa Mác - Lênin về Tôn giáo

- **Bản chất tôn giáo** - Phản ánh hư ảo của hiện thực khách quan
- **5 Yếu tố cấu trúc** - Niềm tin, Giáo thuyết, Cơ sở thờ tự, Tổ chức nhân sự, Tín đồ
- **3 Nguồn gốc** - Kinh tế-xã hội, Nhận thức, Tâm lý
- **Tính chất** - Tính lịch sử, quần chúng, chính trị

### II. Nguyên tắc giải quyết vấn đề tôn giáo

- 🔐 **Tôn trọng quyền tự do** tín ngưỡng, tôn giáo
- 🔄 **Khắc phục ảnh hưởng tiêu cực** gắn với cải tạo xã hội
- ⚖️ **Phân biệt mặt chính trị** và mặt tư tưởng
- 📅 **Quan điểm lịch sử - cụ thể** trong giải quyết

### III. Tôn giáo ở Việt Nam và Chính sách

- 🇻🇳 **Đặc điểm tôn giáo** tại Việt Nam
- 📋 **5 Định hướng chính sách** của Đảng và Nhà nước
- 🤝 **Thực tiễn ứng dụng** trong đời sống xã hội

---

## 🛠️ Công nghệ sử dụng

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br>React 19
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
<br>Vite
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=js" width="48" height="48" alt="JavaScript" />
<br>JavaScript
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=css" width="48" height="48" alt="CSS" />
<br>CSS3
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=html" width="48" height="48" alt="HTML" />
<br>HTML5
</td>
</tr>
</table>

### 🎨 Thiết kế & UI/UX

- **CSS Grid & Flexbox** - Layout responsive hiện đại
- **CSS Variables** - Hệ thống màu sắc nhất quán
- **CSS Animations** - Hiệu ứng chuyển tiếp mượt mà
- **Mobile-First Design** - Tối ưu cho thiết bị di động

---

## 🚀 Cài đặt

### Yêu cầu hệ thống

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 hoặc **yarn** >= 1.22.0

### Hướng dẫn cài đặt

```bash
# 1. Clone repository
cd mln131-chuong-vi

# 2. Cài đặt dependencies
npm install
# hoặc
yarn install

# 3. Chạy development server
npm run dev
# hoặc
yarn dev

### 📦 Build cho production

```bash
# Build ứng dụng
npm run build

# Preview build
npm run preview
```

---

## 📁 Cấu trúc dự án

```
mln131-chuong-vi/
├── 📁 public/
│   ├── 📁 images/          # Thư viện ảnh minh họa
│   │   ├── BaLaMon.jpg
│   │   ├── CaoDai.jpg
│   │   ├── DemNoel.jpg
│   │   └── ...
│   └── vite.svg
├── 📁 src/
│   ├── 📁 components/      # React Components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Banner.jsx      # Hero section
│   │   ├── Footer.jsx      # Footer component
│   │   └── Dropdown.jsx    # Accordion component
│   ├── 📁 data/
│   │   └── content.js      # Dữ liệu nội dung
│   ├── App.jsx             # Main App component
│   ├── App.css             # Styles chính
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Hệ thống màu sắc

<div align="center">

| Màu chính | Hex Code | Ý nghĩa |
|-----------|----------|---------|
| 🔴 **Đỏ Việt Nam** | `#c41e3a` | Màu chủ đạo, thể hiện tinh thần dân tộc |
| 🟡 **Vàng Gold** | `#ffd700` | Màu điểm nhấn, tượng trưng cho tri thức |
| ⚪ **Trắng** | `#ffffff` | Màu nền, tạo sự sạch sẽ và trang nhã |

</div>

---

## 📱 Responsive Design

- **Desktop** (≥ 1024px) - Layout 3 cột với navigation đầy đủ
- **Tablet** (768px - 1023px) - Layout 2 cột với navigation thu gọn  
- **Mobile** (≤ 767px) - Layout 1 cột với hamburger menu

---

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp để cải thiện dự án!

### Cách đóng góp

1. **Fork** repository này
2. Tạo **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. **Push** lên branch (`git push origin feature/AmazingFeature`)
5. Mở **Pull Request**

## 👥 Nhóm phát triển

<div align="center">

**Group6_3W_MLN131_04_TriLM32**

*Môn: Triết học Mác - Lênin (MLN131)*

</div>

---

## 📜 License

Dự án này được phát hành dưới [MIT License](LICENSE).

---

<div align="center">

**⭐ Nếu dự án hữu ích, hãy cho chúng tôi một star! ⭐**

Made with ❤️ by Group6_3W_MLN131_04_TriLM32

</div>