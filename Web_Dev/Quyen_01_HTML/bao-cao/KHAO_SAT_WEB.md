# Khảo sát ba trang bán sách — 12/11/2026

Phân tích HTML phản hồi máy chủ; không suy diễn đây là DOM sau JavaScript, không xác nhận dùng bàn phím/screen reader hoặc Rich Results Test. Các trang có thể thay đổi.

| Trang | HTTP | Metadata thấy trong nguồn | h1 | main/nav | Skip candidate | _blank thiếu noopener tường minh | Schema |
|---|---|---|---|---|---|---|---|
| https://pragprog.com/titles/elixir16/programming-elixir-1-6/ | 200 | utf-8, viewport, description, twitter:card, og:title, og:image | 1 | 0/1 | False | 7 |  |
| https://www.manning.com/books/grokking-algorithms-second-edition | 200 | viewport, og:title, twitter:card, description, og:image | 1 | 0/1 | False | 33 | Product, Brand, Offer, Offer, Offer, Book, Organization, Person, Book, BreadcrumbList, ListItem, ListItem, ListItem |
| https://www.manning.com/books/grokking-ai-algorithms-second-edition | 200 | viewport, og:title, twitter:card, description, og:image | 1 | 0/1 | False | 36 | Product, Brand, Offer, Offer, Offer, Book, Organization, Person, Book, VideoObject, Organization, BreadcrumbList, ListItem, ListItem |

## Diễn giải và đề xuất

- Thiếu title/description: bổ sung riêng từng sản phẩm; meta tên khác chuẩn không thay cho description.
- Thiếu canonical: đánh giá biến thể URL trước khi bổ sung, không canonical mọi trang về trang chủ.
- Thiếu main/heading: bổ sung landmark và phân cấp có nghĩa; nhiều h1 cần đánh giá ngữ cảnh thay vì tự coi là lỗi cú pháp.
- Không tìm thấy skip trong nguồn chưa chứng minh không có: kiểm DOM và lượt Tab thật. Thêm link đầu body và focus tới main nếu thiếu.
- _blank thiếu noopener tường minh không đồng nghĩa browser hiện đại đang bị khai thác; thêm rel rõ để phòng tương thích.
- Có schema Product/Book, offers/image chỉ là ứng viên kỹ thuật; không kết luận đủ điều kiện Google rich result nếu chưa chạy công cụ.
- Bằng chứng chi tiết: audit-web-ngoai.json, gồm hash nguồn, heading, landmark, metadata và schema. Không lưu toàn văn nội dung có bản quyền.