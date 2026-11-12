# Bài tập chương 9

## Bài cơ bản

Em thay title chung bằng tên sách và nhà sách, thêm description, canonical và JSON-LD Book có name/author/image/offers khớp dữ liệu minh họa. Địa chỉ .example là ví dụ, không phải trang đã được Google lập chỉ mục.

Lời giải: [co-ban.html](co-ban.html).

## Bài trung bình

Bảng khảo sát ở KHAO_SAT_WEB.md ghi loại schema, ảnh/offers và lỗi quan sát trong nguồn của ba trang. Đã bổ sung lượt kiểm Google cho ba URL và ảnh kết quả; một trang không có mục, một trang lỗi kết nối, một trang có bốn mục hợp lệ. Schema Validator tìm nạp Manning gặp lỗi dịch vụ. Xem [kết quả công cụ](../bao-cao/SCHEMA_VA_RICH_RESULTS.md); không coi lỗi kết nối là lỗi schema.

Lời giải: [báo cáo khảo sát](../bao-cao/KHAO_SAT_WEB.md).

## Bài nâng cao Q1-09

Xem [lời giải và đối chiếu yêu cầu](NANG_CAO.md). Em gộp các phần nâng cao vào một nhà sách để các chương nối tiếp nhau.

## Em kiểm lại như sau

1. Xem nguồn head của sáu trang và so sánh title/description/canonical.
2. Mở VI/EN để đối chiếu ngôn ngữ và hreflang.
3. Khi có tên miền công khai, thay SITE_URL rồi dùng Rich Results Test/Schema Markup Validator và kiểm Google sau khi crawl.
