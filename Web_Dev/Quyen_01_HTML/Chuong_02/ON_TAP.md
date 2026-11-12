# Ôn tập chương 2 — Cấu trúc nội dung và heading

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. Bốn lợi ích của cấu trúc đúng?

Bốn lợi ích: dễ bảo trì, trợ năng điều hướng, tìm kiếm hiểu nội dung, CSS/JS ổn định. Cả bốn khai thác cùng DOM.

## 2. Vì sao quy ước một h1?

Một h1 là quy ước dự án để chủ đề chính rõ. Nhiều h1 không tự động sai cú pháp, nhưng có thể làm phân cấp mơ hồ; không chọn heading theo cỡ chữ.

## 3. Vì sao không dựa vào outline để lặp h1?

Thuật toán outline từng đề xuất không được trợ năng triển khai như kỳ vọng. Viết cấp h1–h6 tường minh thay vì h1 ở mọi section.

## 4. Vai trò header/nav/main/aside/footer?

header mở đầu/thương hiệu; nav menu; main nội dung chính; aside sách liên quan; footer kết/liên hệ. Vai trò theo nội dung, không theo vị trí hiển thị.

## 5. Chọn section/article/div thế nào?

Tách riêng còn đủ nghĩa → article; nhóm chủ đề có heading → section; chỉ bọc bố cục/lập trình → div. Không đổi div hàng loạt.

## 6. Landmark main/nav/aside dùng ra sao?

main/nav/aside tạo main/navigation/complementary. Screen reader liệt kê để nhảy vùng; nhiều nav cần nhãn riêng.

## 7. Header/footer lồng article có vai trò gì?

Header/footer trong article chỉ mở đầu/kết bài, không là banner/contentinfo toàn tài liệu, tránh nhiễu landmark.

## 8. Vì sao không nhảy được tới nội dung chính?

Không nhảy được tới main: kiểm thiếu main, hidden/aria-hidden/inert, nhiều main hiển thị, lồng sai. main trong div không tự mất landmark; xem cây Accessibility.
