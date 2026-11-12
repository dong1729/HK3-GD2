# Lời giải nâng cao Q1-07

## Em đã làm ở đâu?

- [Form liên hệ](co-ban.html)
- [Mật khẩu và Lưu nháp](trung-binh.html)
- [Thanh toán](../nguon/noi-dung/thanh-toan.html)
- [Kiểm lỗi phía trình duyệt](../du-an/assets/ui.js)
- [Máy chủ thực hành](../scripts/serve.py)

## Đối chiếu đề

| Yêu cầu | Cách làm và kết quả/giới hạn |
|---|---|
| Gửi dữ liệu | Tìm kiếm GET, thanh toán POST với action rõ; bài này không tải tệp nên không cần multipart. |
| Nhãn và nhóm trường | Label tường minh; ba fieldset: người nhận, nhận sách, thanh toán; radio cùng name. |
| Nhập nhanh | autocomplete name/email/tel/street-address; inputmode/enterkeyhint phù hợp. |
| Số điện thoại và ràng buộc | tel có pattern/title; required, min/max, minlength dùng nơi có ý nghĩa. |
| Lỗi đọc được | Có chữ cùng màu, aria-describedby và vùng thông báo; customError được xóa khi sửa đúng. |
| Thẻ thanh toán | Chọn COD trong bài mẫu, không thu số thẻ; vì vậy không thêm trường cc-number vô ích. |
| Kiểm chuẩn và bàn phím | W3C và kiểm tự động có bằng chứng; phần nghe thực tế bằng trình đọc màn hình còn cần thực hiện. |

## Cách chạy

Tại thư mục Quyển 1, chạy `python3 scripts/build.py`, sau đó `python3 scripts/serve.py`; mở địa chỉ máy chủ in ra. Không mở trực tiếp file khi thử fetch/module hoặc gửi form.

Xem [báo cáo kiểm thực tế](../bao-cao/NGHIEM_THU.md). Các yêu cầu phải nghe, kiểm trên tên miền thật hoặc cần bạn khác tham gia vẫn ghi rõ phần còn lại.
