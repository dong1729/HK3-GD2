# Bản đồ nội dung sáu trang

| URL | Mục tiêu | Khối và HTML | Dữ liệu/đích |
|---|---|---|---|
| /du-an/trang-chu | Khám phá sách | h1; section bán chạy + ul/article; nav danh mục; ol cách đặt; video | 3 sách → chi tiết/danh mục |
| /du-an/danh-muc | Tìm/chọn sách | h1; bộ lọc; section ul/article; nav phân trang | search GET, lọc, 2 trang |
| /du-an/chi-tiet | Hiểu sách và thêm giỏ | article/header/h1; figure/picture; dl; details; blockquote; section bình luận; aside | giá 98.000, sách liên quan, thêm giỏ |
| /du-an/gio-hang | Kiểm giỏ | h1; table/caption/thead/tbody/tfoot; form sửa số lượng | localStorage → thanh toán |
| /du-an/thanh-toan | Gửi thông tin mẫu | h1; table; form POST; fieldset/legend/label/error | POST /api/dat-hang, không lưu |
| /du-an/lien-he | Liên hệ thực hành | h1; form/fieldset; iframe title/lazy/sandbox | POST /api/lien-he, bản đồ tham khảo |

Khung chung: skip link, header có thương hiệu/nav/search, breadcrumb trang con, main một h1, footer, live status, mini cart popover và dialog. title/description/canonical/aria-current là các biến theo trang.

Điểm gắn CSS ổn định: site-header, site-footer, book-card, books, table-scroll, error, status. DOM giữ thứ tự đọc khi bỏ CSS. JS đổi dữ liệu/trạng thái, CSS chỉ trình bày/focus/ẩn hiện theo hidden.
