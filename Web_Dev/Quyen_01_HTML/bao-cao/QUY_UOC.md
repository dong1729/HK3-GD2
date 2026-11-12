# Quy ước dùng chung

## Văn bản

strong cho quan trọng; em cho nhấn giọng; b/i chỉ giữ nếu không mang nghĩa trên và giải thích rõ. del/ins cho thay đổi giá, strong cho giá mới. dfn định nghĩa, abbr có title khi cần mở rộng, data cho mã máy. blockquote trích dài; q trích ngắn; cite là tên tác phẩm, không tên người. time datetime ISO. br chỉ ngắt dòng nội dung.

## Khuôn và dữ liệu

nguon/khuon.html có sm-card, sm-row, sm-review. data-sm-book-id là mã công khai, data-sm-price là giá số, data-sm-slot chỉ chỗ điền. JavaScript đặt textContent cho dữ liệu; không chèn chuỗi người dùng bằng innerHTML. Không đặt token hay dữ liệu riêng trong data-*.

## Máy chủ và SEO

SITE_URL mặc định https://sachsaomai.example, chưa là tên miền triển khai thật. URL chữ thường/không dấu/gạch nối/không đuôi/không slash cuối. Máy chủ ánh xạ URL sang HTML. Giỏ/thanh toán noindex; robots không chặn hai trang này để bot đọc noindex. Chặn tham số sort/filter; sitemap chỉ chứa trang công khai. hreflang vi/en/x-default trỏ bản dịch thật và đối xứng.

Không cam kết Google lập chỉ mục hoặc rich result trước triển khai. ISBN và đánh giá chỉ minh họa; schema bỏ ISBN giả và rating không xác minh. Product/Book có offers/image thật trong dữ liệu mẫu.
