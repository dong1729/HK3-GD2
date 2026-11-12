# Dự án chương 7 — Biểu mẫu chuyên sâu

Em tiếp tục cùng dự án Nhà sách Sao Mai sáu trang. Phần việc chương này nằm ở các tệp sau:

- [Form liên hệ](co-ban.html)
- [Mật khẩu và Lưu nháp](trung-binh.html)
- [Thanh toán](../nguon/noi-dung/thanh-toan.html)
- [Kiểm lỗi phía trình duyệt](../du-an/assets/ui.js)
- [Máy chủ thực hành](../scripts/serve.py)

## Cách em thực hiện

1. Thử sai rồi đúng ở bài đăng ký, bấm Lưu nháp khi còn lỗi.
2. Thử form thanh toán với điện thoại và địa chỉ sai rồi sửa lại.
3. Đi bằng Tab qua nhóm radio, thử Space/chọn mũi tên và đọc các nhãn.

## Đối chiếu mốc dự án

| Phần việc | Kết quả/việc cần kiểm thêm |
|---|---|
| Gửi dữ liệu | Tìm kiếm GET, thanh toán POST với action rõ; bài này không tải tệp nên không cần multipart. |
| Nhãn và nhóm trường | Label tường minh; ba fieldset: người nhận, nhận sách, thanh toán; radio cùng name. |
| Nhập nhanh | autocomplete name/email/tel/street-address; inputmode/enterkeyhint phù hợp. |
| Số điện thoại và ràng buộc | tel có pattern/title; required, min/max, minlength dùng nơi có ý nghĩa. |
| Lỗi đọc được | Có chữ cùng màu, aria-describedby và vùng thông báo; customError được xóa khi sửa đúng. |
| Thẻ thanh toán | Chọn COD trong bài mẫu, không thu số thẻ; vì vậy không thêm trường cc-number vô ích. |
| Kiểm chuẩn và bàn phím | W3C và kiểm tự động có bằng chứng; phần nghe thực tế bằng trình đọc màn hình còn cần thực hiện. |

Bản đồ chung: [BAN_DO_NOI_DUNG.md](../bao-cao/BAN_DO_NOI_DUNG.md). Kết quả: [NGHIEM_THU.md](../bao-cao/NGHIEM_THU.md). Phần giao tiếp với người khác và kiểm triển khai chưa thực hiện thì em không ghi hoàn tất.
