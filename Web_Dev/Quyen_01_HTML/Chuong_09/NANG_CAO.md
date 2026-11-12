# Lời giải nâng cao Q1-09

## Em đã làm ở đâu?

- [Metadata Book tối thiểu](co-ban.html)
- [Khảo sát schema ba trang](../bao-cao/KHAO_SAT_WEB.md)
- [Mẫu head](../nguon/head.html)
- [Metadata từng trang](../nguon/pages.json)
- [Robots](../du-an/robots.txt)
- [Sitemap](../du-an/sitemap.xml)

## Đối chiếu đề

| Yêu cầu | Cách làm và kết quả/giới hạn |
|---|---|
| Metadata riêng | title/description/canonical riêng; trang chi tiết công khai index,follow. |
| Chia sẻ | OG/Twitter có ảnh 1200×630 và mô tả; ảnh nằm trong assets. |
| Book/Product | name, author, image, offers khớp dữ liệu trang; BreadcrumbList cho đường dẫn phân cấp. |
| Ngôn ngữ | VI/EN danh mục và chi tiết có hreflang qua lại, không trỏ trang dịch rỗng. |
| Ảnh và hiệu năng | Ảnh LCP có kích thước/high; ảnh dưới lazy; báo cáo lab tách khỏi field data. |
| Kiểm trên dịch vụ thật | Chưa triển khai tên miền thật; index Google và preview còn mở. Đã kiểm mã bằng hai công cụ: schema hợp lệ, Google merchant listing còn lỗi URL ảnh .example. Xem SCHEMA_VA_RICH_RESULTS.md. |

## Cách chạy

Tại thư mục Quyển 1, chạy `python3 scripts/build.py`, sau đó `python3 scripts/serve.py`; mở địa chỉ máy chủ in ra. Không mở trực tiếp file khi thử fetch/module hoặc gửi form.

Xem [báo cáo kiểm thực tế](../bao-cao/NGHIEM_THU.md). Các yêu cầu phải nghe, kiểm trên tên miền thật hoặc cần bạn khác tham gia vẫn ghi rõ phần còn lại.
