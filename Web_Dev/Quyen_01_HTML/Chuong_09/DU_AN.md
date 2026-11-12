# Dự án chương 9 — SEO kỹ thuật

Em tiếp tục cùng dự án Nhà sách Sao Mai sáu trang. Phần việc chương này nằm ở các tệp sau:

- [Metadata Book tối thiểu](co-ban.html)
- [Khảo sát schema ba trang](../bao-cao/KHAO_SAT_WEB.md)
- [Mẫu head](../nguon/head.html)
- [Metadata từng trang](../nguon/pages.json)
- [Robots](../du-an/robots.txt)
- [Sitemap](../du-an/sitemap.xml)

## Cách em thực hiện

1. Xem nguồn head của sáu trang và so sánh title/description/canonical.
2. Mở VI/EN để đối chiếu ngôn ngữ và hreflang.
3. Khi có tên miền công khai, thay SITE_URL rồi dùng Rich Results Test/Schema Markup Validator và kiểm Google sau khi crawl.

## Đối chiếu mốc dự án

| Phần việc | Kết quả/việc cần kiểm thêm |
|---|---|
| Metadata riêng | title/description/canonical riêng; trang chi tiết công khai index,follow. |
| Chia sẻ | OG/Twitter có ảnh 1200×630 và mô tả; ảnh nằm trong assets. |
| Book/Product | name, author, image, offers khớp dữ liệu trang; BreadcrumbList cho đường dẫn phân cấp. |
| Ngôn ngữ | VI/EN danh mục và chi tiết có hreflang qua lại, không trỏ trang dịch rỗng. |
| Ảnh và hiệu năng | Ảnh LCP có kích thước/high; ảnh dưới lazy; báo cáo lab tách khỏi field data. |
| Kiểm trên dịch vụ thật | Chưa triển khai tên miền thật; index Google, preview và Rich Results/Schema Validator còn cần kiểm, không đánh dấu đạt giả. |

Bản đồ chung: [BAN_DO_NOI_DUNG.md](../bao-cao/BAN_DO_NOI_DUNG.md). Kết quả: [NGHIEM_THU.md](../bao-cao/NGHIEM_THU.md). Phần giao tiếp với người khác và kiểm triển khai chưa thực hiện thì em không ghi hoàn tất.
