# Ôn tập chương 7 — Biểu mẫu chuyên sâu

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. GET khác POST thế nào?

Tìm kiếm GET để chia sẻ URL; đặt hàng POST tránh tạo đơn qua URL, không đưa dữ liệu vào query. POST không tự mã hóa, cần HTTPS.

## 2. Vì sao tải tệp cần multipart?

multipart/form-data gói trường và byte tệp theo boundary. Encoding mặc định không truyền nội dung tệp như multipart, thường chỉ còn biểu diễn tên tệp.

## 3. Điện thoại dùng tel và inputmode ra sao?

Điện thoại là chuỗi có +/số 0 đầu, không đại lượng: dùng tel+pattern. inputmode gợi ý bàn phím, không xác thực.

## 4. Hai cách gắn label?

label for trỏ id duy nhất hoặc bao input. Bao radio/checkbox làm cả dòng chữ dễ bấm; for/id vẫn phù hợp.

## 5. fieldset/legend cho nhóm radio?

fieldset gom trường, legend đặt tên nhóm. Radio cùng name cần ngữ cảnh chung như Hình thức nhận sách.

## 6. Các cờ validity và ví dụ?

validity: valueMissing (required trống), typeMismatch (email sai), patternMismatch (regex sai), tooShort (nhập ngắn), rangeUnderflow/Overflow (ngoài min/max), customError (lỗi tùy chỉnh).

## 7. Xóa customError; novalidate/formnovalidate?

setCustomValidity('') xóa customError khi hợp lệ, nếu không form vẫn bị chặn. novalidate áp cả form; formnovalidate áp lượt gửi từ nút đó.

## 8. Vì sao vẫn cần xác thực máy chủ?

Có thể xóa ràng buộc DevTools hoặc gửi HTTP trực tiếp. Máy chủ kiểm dữ liệu/giá/quyền/chống CSRF; không tin tổng tiền client.
