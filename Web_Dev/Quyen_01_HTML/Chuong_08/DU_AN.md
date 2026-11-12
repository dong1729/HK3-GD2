# Dự án chương 8 — Khả năng truy cập

Em tiếp tục cùng dự án Nhà sách Sao Mai sáu trang. Phần việc chương này nằm ở các tệp sau:

- [Sửa nút và nhãn](co-ban.html)
- [Khảo sát ba website](../bao-cao/BAN_PHIM.md)
- [Khung landmark và skip link](../nguon/khung.html)
- [Bộ lọc, giỏ và dialog](../du-an/assets/ui.js)
- [Kiểu focus](../du-an/assets/site.css)

## Cách em thực hiện

1. Bấm Tab đầu trang rồi Enter để vào main.
2. Mở bộ lọc bằng Enter, chọn nội dung, nhấn Esc và kiểm vị trí focus.
3. Thêm giỏ, mở xem nhanh, thử Tab/Shift+Tab/Esc; kiểm live bằng trình đọc màn hình.

## Đối chiếu mốc dự án

| Phần việc | Kết quả/việc cần kiểm thêm |
|---|---|
| Bỏ qua điều hướng | Skip link đầu trang trỏ main tabindex=-1; landmark dùng HTML gốc. |
| Tên ảnh và nút | Logo không lặp chữ, nút biểu tượng có tên và form có label. |
| Bộ lọc | Mở/đóng bằng phím; aria-expanded đổi đúng; Esc đóng và trả focus. |
| Giỏ hàng | Vùng polite báo thêm hàng; không tự kéo focus ra khỏi nút đang thao tác. |
| Hộp thoại | showModal, Tab/Shift+Tab trong hộp; Esc đóng rồi trả focus, nền không tương tác. |
| Báo cáo A/AA | axe và Lighthouse có báo cáo sáu trang; không suy rộng thành đạt mọi tiêu chí WCAG hoặc đã nghe VoiceOver. |

Bản đồ chung: [BAN_DO_NOI_DUNG.md](../bao-cao/BAN_DO_NOI_DUNG.md). Kết quả: [NGHIEM_THU.md](../bao-cao/NGHIEM_THU.md). Phần giao tiếp với người khác và kiểm triển khai chưa thực hiện thì em không ghi hoàn tất.
