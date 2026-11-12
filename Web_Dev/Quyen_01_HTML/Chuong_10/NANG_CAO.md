# Lời giải nâng cao Q1-10

## Em đã làm ở đâu?

- [Details không cần JS](co-ban.html)
- [Bốn thẻ từ khuôn](trung-binh.html)
- [Khuôn thẻ/dòng giỏ/đánh giá](../nguon/khuon.html)
- [Module nạp và clone khuôn](../du-an/assets/cards.js)
- [Dialog/popover dùng chung](../nguon/lop-noi.html)
- [Đóng và quản lý focus](../du-an/assets/ui.js)

## Đối chiếu đề

| Yêu cầu | Cách làm và kết quả/giới hạn |
|---|---|
| Khuôn dùng chung | sm-card, sm-row, sm-review trong khuon.html; quy ước data-sm ghi trong QUY_UOC.md. |
| Dialog gốc | showModal, aria-labelledby, form method=dialog; không div giả modal. |
| Bàn phím | Tab/Shift+Tab ở trong dialog, Esc đóng dialog/popover và dialog trả focus. |
| Nội dung gấp mở | details/summary hoạt động bằng HTML; mô tả chi tiết không phụ thuộc JS. |
| Nạp mã | ui.js defer, cards.js module; giỏ inert và aria-busy khi tải, được mở lại trong finally. |
| Đúng chuẩn | Sáu trang có kết quả W3C; kiểm tương tác và ảnh màn hình lưu trong báo cáo. |

## Cách chạy

Tại thư mục Quyển 1, chạy `python3 scripts/build.py`, sau đó `python3 scripts/serve.py`; mở địa chỉ máy chủ in ra. Không mở trực tiếp file khi thử fetch/module hoặc gửi form.

Xem [báo cáo kiểm thực tế](../bao-cao/NGHIEM_THU.md). Các yêu cầu phải nghe, kiểm trên tên miền thật hoặc cần bạn khác tham gia vẫn ghi rõ phần còn lại.
