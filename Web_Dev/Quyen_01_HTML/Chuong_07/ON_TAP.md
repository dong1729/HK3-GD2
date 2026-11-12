# Ôn tập chương 7

Trả lời theo thứ tự 8 câu trong giáo trình.

1. Tìm kiếm GET để chia sẻ URL; đặt hàng POST tránh tạo đơn qua URL, không đưa dữ liệu vào query. POST không tự mã hóa, cần HTTPS.

2. multipart/form-data gói trường và byte tệp theo boundary. Encoding mặc định không truyền nội dung tệp như multipart, thường chỉ còn biểu diễn tên tệp.

3. Điện thoại là chuỗi có +/số 0 đầu, không đại lượng: dùng tel+pattern. inputmode gợi ý bàn phím, không xác thực.

4. label for trỏ id duy nhất hoặc bao input. Bao radio/checkbox làm cả dòng chữ dễ bấm; for/id vẫn phù hợp.

5. fieldset gom trường, legend đặt tên nhóm. Radio cùng name cần ngữ cảnh chung như Hình thức nhận sách.

6. validity: valueMissing (required trống), typeMismatch (email sai), patternMismatch (regex sai), tooShort (nhập ngắn), rangeUnderflow/Overflow (ngoài min/max), customError (lỗi tùy chỉnh).

7. setCustomValidity('') xóa customError khi hợp lệ, nếu không form vẫn bị chặn. novalidate áp cả form; formnovalidate áp lượt gửi từ nút đó.

8. Có thể xóa ràng buộc DevTools hoặc gửi HTTP trực tiếp. Máy chủ kiểm dữ liệu/giá/quyền/chống CSRF; không tin tổng tiền client.
