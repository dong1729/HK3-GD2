# Kết quả kiểm định thực tế — 12/11/2026

Mã nguồn đã kiểm: commit 18ca48b. [Lần chạy GitHub Actions thành công](https://github.com/dong1729/HK3-GD2/actions/runs/43183385627). 10 bài kiểm tra chức năng đều qua; axe không phát hiện vi phạm A/AA trên sáu trang chính trong phạm vi quét.

| Trang | Performance | Accessibility | SEO | LCP (giây) | CLS | W3C error |
|---|---:|---:|---:|---:|---:|---:|
| trang-chu | 100 | 100 | 100 | 1.66 | 0 | 0 |
| danh-muc | 100 | 100 | 100 | 1.13 | 0 | 0 |
| chi-tiet | 100 | 100 | 100 | 1.50 | 0 | 0 |
| gio-hang | 100 | 100 | 69 | 0.75 | 0 | 0 |
| thanh-toan | 100 | 100 | 69 | 0.75 | 0 | 0 |
| lien-he | 100 | 100 | 100 | 1.36 | 0 | 0 |

Giỏ hàng/thanh toán chủ động noindex nên SEO không đạt 100; đây là cấu hình có chủ đích. LCP/CLS trên môi trường kiểm thử Chromium di động mô phỏng, không phải dữ liệu người dùng thực tế và không đo INP ngoài hiện trường. Điểm 100 không chứng nhận tuân thủ toàn bộ WCAG.

## Chức năng đã kiểm

Skip link nhận focus đầu, vào main; bố cục 390px không tràn toàn trang; ảnh/tài nguyên nội bộ không trả lỗi; thêm/sửa giỏ và lưu qua reload; dialog giữ vòng Tab và Esc trả focus; bộ lọc mở/đóng/đổi chủ đề; tìm kiếm; mật khẩu xóa customError; lưu nháp; máy chủ từ chối dữ liệu sai và xử lý dữ liệu mẫu đúng.

## Khảo sát ba trang bán sách

| Trang | Lighthouse trợ năng | Lighthouse SEO | Quy tắc axe có lỗi | Điểm Tab đến khi lặp |
|---|---:|---:|---:|---:|
| https://pragprog.com/titles/elixir16/programming-elixir-1-6/ | 95 | 100 | 1 | 49 |
| https://www.manning.com/books/grokking-algorithms-second-edition | 65 | 85 | 9 | 100 |
| https://www.manning.com/books/grokking-ai-algorithms-second-edition | 60 | 77 | 9 | 95 |

Số quy tắc axe có lỗi khác số phần tử lỗi. Quét Tab tự động ghi nhận thứ tự và chu kỳ, không thay cho người dùng đánh giá chất lượng từng tên/focus hay nghe trình đọc màn hình. Xem external-browser.json, lighthouse-external-*.html/json và ảnh external-*.png.

## Còn cần làm ngoài mã nguồn

- Google index/rich result và thẻ chia sẻ trên tên miền thật cần triển khai công khai; hiện chỉ có địa chỉ dự kiến .example.
- Chưa nghe VoiceOver/NVDA và chưa có buổi đánh giá chéo với người khác; không coi kiểm tự động là peer review.
- Rich Results Test/Schema Markup Validator chưa có bằng chứng giao diện của từng website ngoài; phần schema trong nguồn đã được khảo sát.
- Tiến độ đọc LMS là trạng thái riêng: chương 1–4 đã hoàn tất; chương 5 đang đọc lúc ghi báo cáo này.

Bằng chứng gốc: w3c-nu.json, static-check.json, lighthouse-*.html/json và ảnh trong anh/. Không tạo ảnh giả của công cụ kiểm định.
