# Chương 7 — Biểu mẫu chuyên sâu

Nguồn học: https://vietcodedi.id.vn/textbooks/1/chapters/9

## Những ý em cần nhớ

Form dùng `action` để chỉ nơi nhận và `method` để chỉ cách gửi. Tìm kiếm dùng GET vì có thể chia sẻ URL; đặt hàng/đăng ký dùng POST. POST không tự mã hóa dữ liệu; ứng dụng thật vẫn cần HTTPS. Khi gửi tệp dùng `multipart/form-data`. Trường không có name hoặc bị disabled không được gửi như trường bình thường.

Em chọn input theo dữ liệu: text cho tên, email cho email, tel cho số điện thoại. Điện thoại là chuỗi có thể chứa số 0 đầu hoặc dấu +, không phải số để tính toán. `inputmode` và `enterkeyhint` chỉ gợi ý nhập liệu, không thay xác thực.

Label nối bằng for/id hoặc bao quanh input. Placeholder biến mất khi gõ, vì vậy không dùng thay nhãn. fieldset/legend đặt ngữ cảnh chung; radio cùng name chỉ cho chọn một giá trị. optgroup gom các option cùng loại.

Ưu tiên required, minlength, maxlength, pattern, min, max và step trước khi viết JS. Pattern không bắt buộc có dữ liệu nếu thiếu required. Thông báo định dạng cần chữ dễ hiểu, không dựa riêng vào màu hay title.

`validity` cho biết thiếu dữ liệu, sai kiểu, sai mẫu, ngoài khoảng hoặc customError. `checkValidity()` trả kết quả; `reportValidity()` còn hiện gợi ý. `setCustomValidity('')` phải được gọi khi dữ liệu đúng trở lại, nếu không lỗi cũ vẫn chặn gửi. `formnovalidate` chỉ bỏ kiểm cho nút Lưu nháp; novalidate áp cả form.

FormData thu các cặp name/value và có thể nhận trường nằm ngoài form qua thuộc tính form. Máy chủ phải kiểm lại vì người dùng có thể sửa HTML hoặc gửi yêu cầu trực tiếp. Giá/tổng tiền client không phải dữ liệu đáng tin.

## Cách tự kiểm

Thử bỏ trống, email sai, điện thoại sai, mật khẩu không khớp rồi sửa đúng. Đi toàn bộ form bằng Tab; xác nhận lỗi có chữ, nối aria-describedby và có thể sửa mà không mất dữ liệu.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [nâng cao](NANG_CAO.md) và [dự án](DU_AN.md).
