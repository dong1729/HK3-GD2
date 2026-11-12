# Chương 10 — HTML hiện đại và API mở rộng

Nguồn học: https://vietcodedi.id.vn/textbooks/1/chapters/12

## Những ý em cần nhớ

`template` chứa một DocumentFragment qua .content. Nó không tự hiển thị và các điều khiển bên trong chưa tham gia trang như nội dung đã chèn. Em cloneNode(true), điền dữ liệu bằng textContent/dataset rồi append; tránh nối chuỗi HTML từ dữ liệu người dùng.

`dialog.show()` mở không modal; showModal() đưa lên top layer và làm nền inert. Thêm open thủ công không tạo đầy đủ hành vi modal. Dialog vẫn cần tên từ aria-labelledby, điểm focus đầu hợp lý và kiểm việc trả focus khi đóng. ::backdrop tạo nền phía sau hộp modal.

`details` và `summary` làm khối gấp mở trong luồng trang, thuộc tính open cho mở sẵn, không cần JS. Popover hợp lớp nổi nhẹ như giỏ nhanh; popover auto có Esc/light dismiss nhưng không khóa nền như dialog modal.

`data-sm-book-id` được đọc bằng dataset.smBookId. Dữ liệu trong DOM không bí mật, không để token hoặc mật khẩu ở data-*. Bài dùng tiền tố sm để phân biệt dữ liệu thành phần với thuộc tính chuẩn.

Classic script thường chặn parser tại vị trí gặp. Defer tải song song, chạy sau phân tích HTML và giữ thứ tự giữa các script defer. Async chạy ngay khi tải xong nên không bảo đảm thứ tự. Module trì hoãn mặc định, chạy theo đồ thị phụ thuộc; không mặc định suy ra thứ tự giữa mọi kiểu script trộn lẫn.

`inert` tạm ngăn tương tác vùng đang tải khuôn; finally phải mở lại cả khi mạng lỗi. Rating 4,2/5 là phép đo trong một khoảng nên dùng meter, còn progress dành cho tiến độ hoàn thành công việc.

## Cách tự kiểm

Đếm bốn thẻ được tạo từ một khuôn, kiểm data mã/giá. Mở dialog bằng phím, thử Tab xuôi/ngược và Esc; thử popover rồi click ngoài. Tắt JS để kiểm details vẫn gấp mở được.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [nâng cao](NANG_CAO.md) và [dự án](DU_AN.md).
