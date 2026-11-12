# Ôn tập chương 4

Trả lời theo thứ tự 8 câu trong giáo trình.

1. URL mẫu: scheme https, host sachsaomai.vn, port 443 ngầm, path /danh-muc-sach, query page=2, fragment danh-gia. Fragment do client xử lý, không gửi trong HTTP request target.

2. Tuyệt đối https://example.org/sach cho khác site; tương đối danh-muc theo trang; /danh-muc từ gốc tên miền. Chú ý site dưới thư mục con.

3. a thiếu href không là hyperlink đầy đủ: không tự nhận Tab như link, không có đích để mở tab mới/sao chép địa chỉ.

4. Reverse tabnabbing dùng window.opener điều hướng nguồn. noopener cắt opener; noreferrer bỏ Referer và cũng có hiệu lực noopener. Browser mới thường ngầm noopener cho _blank, vẫn khai báo rõ.

5. id duy nhất tránh neo sai. tabindex=-1 cho main nhận focus lập trình mà không thêm điểm Tab tự nhiên.

6. Menu: đi đâu; breadcrumb: ở đâu; skip link: vào main thế nào; phân trang: xem tập trước/sau ở đâu.

7. Skip link đầu body là điểm Tab đầu để bỏ khối lặp; display:none loại khỏi cây truy cập/Tab. Giấu trực quan và hiện khi focus.

8. Đúng: a tới chi tiết, button thêm giỏ. Sai: a href=# mở dialog; button đổi URL trang thường; làm mất hành vi chuẩn.
