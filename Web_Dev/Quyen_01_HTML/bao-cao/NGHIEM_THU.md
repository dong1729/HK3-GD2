# Kết quả kiểm định thực tế — 12/11/2026

Mã nguồn đã kiểm: commit cf34f1b. [GitHub Actions thành công](https://github.com/dong1729/HK3-GD2/actions/runs/43195941804). **35/35 bài kiểm qua**, gồm các bài mới chương 6–11; html-validate toàn bộ bài 1–11 thành công.

| Trang | Performance | Accessibility | SEO | LCP (giây) | CLS | W3C error |
|---|---:|---:|---:|---:|---:|---:|
| trang-chu | 100 | 100 | 100 | 1.73 | 0 | 0 |
| danh-muc | 100 | 100 | 100 | 1.13 | 0 | 0 |
| chi-tiet | 100 | 100 | 100 | 1.57 | 0 | 0 |
| gio-hang | 100 | 100 | 69 | 0.75 | 0 | 0 |
| thanh-toan | 100 | 100 | 69 | 0.75 | 0 | 0 |
| lien-he | 100 | 100 | 100 | 0.75 | 0 | 0 |

Giỏ hàng/thanh toán chủ động noindex nên SEO không đạt 100; đây là cấu hình có chủ đích. LCP/CLS trên môi trường kiểm thử Chromium di động mô phỏng, không phải dữ liệu người dùng thực tế và không đo INP ngoài hiện trường. Điểm 100 không chứng nhận tuân thủ toàn bộ WCAG.

## Chức năng đã kiểm

Skip link nhận focus đầu, vào main; bố cục 390px không tràn toàn trang; ảnh/tài nguyên nội bộ không trả lỗi; thêm/sửa giỏ và lưu qua reload; dialog giữ vòng Tab và Esc trả focus; bộ lọc mở/đóng/đổi chủ đề; tìm kiếm; mật khẩu xóa customError; lưu nháp; máy chủ từ chối dữ liệu sai và xử lý dữ liệu mẫu đúng.

## Khảo sát ba trang bán sách

| Trang | Lighthouse trợ năng | Lighthouse SEO | Quy tắc axe có lỗi | Điểm Tab đến khi lặp |
|---|---:|---:|---:|---:|
| https://pragprog.com/titles/elixir16/programming-elixir-1-6/ | 95 | 100 | 1 | 49 |
| https://www.manning.com/books/grokking-algorithms-second-edition | 65 | 92 | 9 | 100 |
| https://www.manning.com/books/grokking-ai-algorithms-second-edition | 60 | 77 | 9 | 95 |

Số quy tắc axe có lỗi khác số phần tử lỗi. Quét Tab tự động ghi nhận thứ tự và chu kỳ, không thay cho người dùng đánh giá chất lượng từng tên/focus hay nghe trình đọc màn hình. Xem external-browser.json, lighthouse-external-*.html/json và ảnh external-*.png.

## Còn cần làm ngoài mã nguồn

- Google index/rich result và thẻ chia sẻ trên tên miền thật cần triển khai công khai; hiện chỉ có địa chỉ dự kiến .example.
- Chưa nghe VoiceOver/NVDA và chưa có buổi đánh giá chéo với người khác; không coi kiểm tự động là peer review.
- Rich Results Test đã kiểm mã trang chi tiết: Product snippet và Breadcrumb hợp lệ; merchant listing báo ảnh .example không hợp lệ. Không bịa URL triển khai để làm mất lỗi. Xem SCHEMA_VA_RICH_RESULTS.md và ảnh công cụ.
- Tiến độ đọc LMS là trạng thái riêng, cập nhật trong TIEN_DO.md theo lần quan sát mới nhất; thời gian dự kiến không thay số phút thực.

Bằng chứng gốc: w3c-nu.json, static-check.json, lighthouse-*.html/json và ảnh trong anh/. Không tạo ảnh giả của công cụ kiểm định.


## Kiểm định riêng bài tập 1–5

10 tệp HTML cơ bản/trung bình đã gửi W3C Nu: không có lỗi. Xem w3c-bai-tap-01-05.json. Năm ticket nâng cao được triển khai trong dự án sáu trang; các tệp nguồn và tiêu chí được chỉ rõ trong NANG_CAO.md của từng chương. Cây Accessibility thật và lượt Tab sáu trang ở accessibility/ và keyboard/. Bài trung bình chương 2 đã được điền lại từ cây Chrome, không nhầm DOM ứng viên với landmark thật.

## Kiểm định chương 6–11

10 bài HTML cơ bản/trung bình đã gửi W3C Nu, không lỗi: w3c-bai-tap-06-11.json. Sáu trang dự án cũng được gửi lại W3C, không lỗi HTML; trang liên hệ còn thông tin cảnh báo sandbox. Các bài nâng cao và mốc dự án có bảng đối chiếu riêng trong từng chương. Bài responsive được kiểm slot 350px trên điện thoại 390px/DPR2 và 590px trên màn hình 1440px; bản sửa đã qua CI. Khuôn/lớp nổi dùng chung ở nguon/khuon.html và nguon/lop-noi.html.
