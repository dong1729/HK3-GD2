# Dự án chương 10 — HTML hiện đại và API mở rộng

Em tiếp tục cùng dự án Nhà sách Sao Mai sáu trang. Phần việc chương này nằm ở các tệp sau:

- [Details không cần JS](co-ban.html)
- [Bốn thẻ từ khuôn](trung-binh.html)
- [Khuôn thẻ/dòng giỏ/đánh giá](../nguon/khuon.html)
- [Module nạp và clone khuôn](../du-an/assets/cards.js)
- [Dialog/popover dùng chung](../nguon/lop-noi.html)
- [Đóng và quản lý focus](../du-an/assets/ui.js)

## Cách em thực hiện

1. Mở bài trung bình, kiểm đủ bốn thẻ và giá từng thẻ.
2. Mở Xem nhanh bằng Enter, Tab và Shift+Tab nhiều lần rồi Esc.
3. Mở giỏ nổi rồi Esc; tắt JS và thử details.

## Đối chiếu mốc dự án

| Phần việc | Kết quả/việc cần kiểm thêm |
|---|---|
| Khuôn dùng chung | sm-card, sm-row, sm-review trong khuon.html; quy ước data-sm ghi trong QUY_UOC.md. |
| Dialog gốc | showModal, aria-labelledby, form method=dialog; không div giả modal. |
| Bàn phím | Tab/Shift+Tab ở trong dialog, Esc đóng dialog/popover và dialog trả focus. |
| Nội dung gấp mở | details/summary hoạt động bằng HTML; mô tả chi tiết không phụ thuộc JS. |
| Nạp mã | ui.js defer, cards.js module; giỏ inert và aria-busy khi tải, được mở lại trong finally. |
| Đúng chuẩn | Sáu trang có kết quả W3C; kiểm tương tác và ảnh màn hình lưu trong báo cáo. |

Bản đồ chung: [BAN_DO_NOI_DUNG.md](../bao-cao/BAN_DO_NOI_DUNG.md). Kết quả: [NGHIEM_THU.md](../bao-cao/NGHIEM_THU.md). Phần giao tiếp với người khác và kiểm triển khai chưa thực hiện thì em không ghi hoàn tất.
