# Ôn tập chương 4 — Liên kết, URL và điều hướng

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. Phân tích sáu phần URL mẫu?

URL mẫu: scheme https, host sachsaomai.vn, port 443 ngầm, path /danh-muc-sach, query page=2, fragment danh-gia. Fragment do client xử lý, không gửi trong HTTP request target.

## 2. URL tuyệt đối, tương đối và gốc site?

Tuyệt đối https://example.org/sach cho khác site; tương đối danh-muc theo trang; /danh-muc từ gốc tên miền. Chú ý site dưới thư mục con.

## 3. a thiếu href mất gì?

a thiếu href không là hyperlink đầy đủ: không tự nhận Tab như link, không có đích để mở tab mới/sao chép địa chỉ.

## 4. Reverse tabnabbing và noopener?

Reverse tabnabbing dùng window.opener điều hướng nguồn. noopener cắt opener; noreferrer bỏ Referer và cũng có hiệu lực noopener. Browser mới thường ngầm noopener cho _blank, vẫn khai báo rõ.

## 5. Neo cần id/tabindex ra sao?

id duy nhất tránh neo sai. tabindex=-1 cho main nhận focus lập trình mà không thêm điểm Tab tự nhiên.

## 6. Bốn mẫu điều hướng trả lời gì?

Menu: đi đâu; breadcrumb: ở đâu; skip link: vào main thế nào; phân trang: xem tập trước/sau ở đâu.

## 7. Vì sao skip link đứng đầu và không display:none?

Skip link đầu body là điểm Tab đầu để bỏ khối lặp; display:none loại khỏi cây truy cập/Tab. Giấu trực quan và hiện khi focus.

## 8. Khi nào a, khi nào button?

Đúng: a tới chi tiết, button thêm giỏ. Sai: a href=# mở dialog; button đổi URL trang thường; làm mất hành vi chuẩn.
