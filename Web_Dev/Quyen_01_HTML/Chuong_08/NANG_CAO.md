# Lời giải nâng cao Q1-08

## Em đã làm ở đâu?

- [Sửa nút và nhãn](co-ban.html)
- [Khảo sát ba website](../bao-cao/BAN_PHIM.md)
- [Khung landmark và skip link](../nguon/khung.html)
- [Bộ lọc, giỏ và dialog](../du-an/assets/ui.js)
- [Kiểu focus](../du-an/assets/site.css)

## Đối chiếu đề

| Yêu cầu | Cách làm và kết quả/giới hạn |
|---|---|
| Bỏ qua điều hướng | Skip link đầu trang trỏ main tabindex=-1; landmark dùng HTML gốc. |
| Tên ảnh và nút | Logo không lặp chữ, nút biểu tượng có tên và form có label. |
| Bộ lọc | Mở/đóng bằng phím; aria-expanded đổi đúng; Esc đóng và trả focus. |
| Giỏ hàng | Vùng polite báo thêm hàng; không tự kéo focus ra khỏi nút đang thao tác. |
| Hộp thoại | showModal, Tab/Shift+Tab trong hộp; Esc đóng rồi trả focus, nền không tương tác. |
| Báo cáo A/AA | axe và Lighthouse có báo cáo sáu trang; không suy rộng thành đạt mọi tiêu chí WCAG hoặc đã nghe VoiceOver. |

## Cách chạy

Tại thư mục Quyển 1, chạy `python3 scripts/build.py`, sau đó `python3 scripts/serve.py`; mở địa chỉ máy chủ in ra. Không mở trực tiếp file khi thử fetch/module hoặc gửi form.

Xem [báo cáo kiểm thực tế](../bao-cao/NGHIEM_THU.md). Các yêu cầu phải nghe, kiểm trên tên miền thật hoặc cần bạn khác tham gia vẫn ghi rõ phần còn lại.
