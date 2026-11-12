# Nghiệm thu Quyển 1 — 12/11/2026

## Kết quả đã có

- Sáu trang chính: W3C Nu trả về không có thông báo loại error; dữ liệu gốc ở w3c-nu.json. Trang liên hệ có một cảnh báo về quyền sandbox iframe, không phải lỗi cú pháp.
- Kiểm tĩnh: tất cả HTML bài tập và dự án có DOCTYPE, một h1/main, ID duy nhất; ảnh có alt/kích thước, nút có type, liên kết và đích ARIA tồn tại. Xem static-check.json.
- Các bài HTML thực hành đã qua html-validate.
- Trình duyệt thật: đã thử thêm giỏ, thông báo trạng thái, mở modal, Tab trong hộp, Esc đóng và trả focus về nút mở. Ảnh bằng chứng ở anh/.
- Khảo sát HTML ba trang bán sách ở KHAO_SAT_WEB.md và audit-web-ngoai.json.

## Kiểm tra đang thực hiện

- Workflow GitHub chạy Playwright/axe và Lighthouse cho sáu trang. Chỉ cập nhật đạt sau khi lần chạy xanh. Lighthouse trên máy hiện tại chưa khởi động được trình duyệt kiểm định; không ghi điểm giả.
- Các bài trung bình đòi bàn phím ba trang bên ngoài, Rich Results Test và Schema Markup Validator: phần nguồn HTML đã khảo sát; các kết quả thủ công/công cụ chưa có phải xem là còn mở.

## Điều kiện chưa thể chứng minh bằng mã cục bộ

- Google lập chỉ mục, rich result và bản chia sẻ trên tên miền thật: cần triển khai URL công khai thuộc quyền sở hữu. Canonical .example hiện là cấu hình dự kiến.
- Nghe bằng VoiceOver/NVDA và buổi đánh giá chéo với người khác: chưa xác nhận, không coi tự kiểm là peer review.
- Tiến độ đọc trên LMS riêng với tiến độ bài làm. Web đã ghi nhận chương 1–3 hoàn tất; chương 4 đang đọc tại thời điểm ghi báo cáo.

## Sẵn sàng nối sang CSS

Khung chung, điểm gắn kiểu ổn định và thứ tự DOM đã có. CSS hiện chỉ trình bày tối thiểu/phản hồi và focus. Phần còn nợ: kiểm thủ công trợ năng, triển khai SEO và đánh giá chéo nêu trên. Chưa kết luận nghiệm thu toàn bộ tiêu chí đề.
