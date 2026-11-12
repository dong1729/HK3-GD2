# Kiểm tra bàn phím và công cụ

## Đã thử bằng trình duyệt

Trang chủ dự án: thêm sách tăng bộ đếm 0→1 và xuất thông báo trong vùng status; mở Xem nhanh chỉ còn nội dung dialog trong cây truy cập; Tab ở trong hộp; Esc đóng và focus quay lại nút Xem nhanh. Đây là kiểm tra mẫu, chưa chứng minh toàn bộ WCAG.

## Đối chiếu tự động và thủ công

| Vấn đề | axe/Lighthouse có thể phát hiện | Cần thao tác/nghe thật |
|---|---|---|
| Thiếu tên nút/nhãn ô nhập | Thường có | Xác nhận tên có nghĩa |
| Màu chữ tương phản thấp | Nhiều trường hợp | Ảnh/nền phức tạp cần kiểm |
| Bẫy phím/focus đóng hộp | Không đầy đủ | Tab/Shift+Tab/Enter/Space/Esc |
| Thứ tự focus hợp lý theo nội dung | Không đầy đủ | Đi cả luồng |
| Live region thông báo đúng lúc | Kiểm được cấu trúc một phần | Nghe screen reader |

Ba trang web bên ngoài đã khảo sát nguồn HTML trong KHAO_SAT_WEB.md. Chưa ghi nhận lượt bàn phím đầy đủ và Lighthouse/axe cho cả ba trang đó; không suy đoán bẫy focus từ HTML nguồn. Bài trung bình chương 8 còn phần kiểm thủ công này.
