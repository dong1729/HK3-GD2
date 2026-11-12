# Lời giải nâng cao Q1-11

## Em đã làm ở đâu?

- [Bản đồ một trang](co-ban.html)
- [Đối chiếu hai trang](trung-binh.html)
- [Bản đồ sáu trang](../bao-cao/BAN_DO_NOI_DUNG.md)
- [Khung chung](../nguon/khung.html)
- [Danh sách lỗi](../bao-cao/DANH_SACH_LOI.md)
- [Kết quả kiểm](../bao-cao/NGHIEM_THU.md)

## Đối chiếu đề

| Yêu cầu | Cách làm và kết quả/giới hạn |
|---|---|
| Bản đồ và nguồn chung | Sáu trang có mục tiêu/khối; khung chung dựng lại bằng scripts/build.py. |
| HTML và heading | W3C sáu tệp, mỗi trang một h1; kiểm tĩnh IDs/heading/nhãn/ảnh. |
| Tài nguyên | Kiểm trình duyệt ghi lỗi HTTP nội bộ; kết quả và ảnh ở báo cáo. |
| Bàn phím | Có lượt Tab và kiểm các tương tác, focus/dialog/skip; nghe trình đọc màn hình còn mở. |
| Bàn giao | Danh sách lỗi có mã/mức độ/người sửa/trạng thái, tài liệu bằng chứng và phần nợ. |
| Đánh giá chéo | Chưa có người khác tham gia; không ghi đã tổ chức buổi đánh giá chéo. |

## Cách chạy

Tại thư mục Quyển 1, chạy `python3 scripts/build.py`, sau đó `python3 scripts/serve.py`; mở địa chỉ máy chủ in ra. Không mở trực tiếp file khi thử fetch/module hoặc gửi form.

Xem [báo cáo kiểm thực tế](../bao-cao/NGHIEM_THU.md). Các yêu cầu phải nghe, kiểm trên tên miền thật hoặc cần bạn khác tham gia vẫn ghi rõ phần còn lại.
