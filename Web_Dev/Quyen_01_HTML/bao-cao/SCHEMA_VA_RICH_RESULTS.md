# Kiểm dữ liệu có cấu trúc — 12/11/2026

## Mã nhà sách gửi trực tiếp vào công cụ

Schema Markup Validator nhận Book/Product và BreadcrumbList của trang chi tiết: 0 lỗi, 0 cảnh báo. Trang danh mục, giỏ, thanh toán và liên hệ nhận BreadcrumbList không lỗi trong các lượt đã quan sát; trang chủ không có schema nên công cụ báo không phát hiện mục nào. Một số lượt thử lại gặp lỗi dịch vụ; không thay kết quả lỗi dịch vụ bằng nhãn đạt. Ảnh công cụ nằm trong anh/schema-*.png.

Google Rich Results Test nhận ba mục từ mã trang chi tiết: Product snippet hợp lệ (có vấn đề không nghiêm trọng), Breadcrumb hợp lệ, merchant listing không hợp lệ. Lỗi nghiêm trọng là URL ảnh dùng tên miền .example không hợp lệ. Các gợi ý không bắt buộc gồm mã định danh toàn cầu, chính sách trả hàng và shippingDetails. Em không bịa ISBN, chính sách thương mại hay đổi tên miền giả khác để che lỗi. Cần triển khai trang và ảnh trên địa chỉ thật rồi kiểm lại. Xem anh/rich-results-chi-tiet.png.

Kiểm bằng mã không chứng minh Google đã crawl/index URL hoặc ảnh đã tải từ máy chủ thật.

## Bài trung bình chương 9: ba trang ngoài

| Trang | Schema trong nguồn | offers/image | Rich Results Test thực tế | Kết luận |
|---|---|---|---|---|
| PragProg — Programming Elixir 1.6 | Không thấy JSON-LD trong nguồn đã khảo sát | Không xác nhận bằng schema | Google thu thập thành công; không phát hiện mục nhiều định dạng | Chưa có ứng viên được công cụ nhận trong lượt này |
| Manning — Grokking Algorithms 2e | Product, Book, Offer, BreadcrumbList | Có | Lỗi kết nối máy chủ khi Google tìm nạp; cho phép crawl | Chưa kết luận đạt hay sai schema từ lượt lỗi kết nối |
| Manning — Grokking AI Algorithms 2e | Product, Book, Offer, VideoObject, BreadcrumbList | Có | 4 mục hợp lệ: Product snippet, merchant listing, Breadcrumb, Video; Product/merchant có gợi ý không nghiêm trọng | Có khả năng đủ điều kiện về dữ liệu, không bảo đảm luôn được hiển thị |

URL đầy đủ có trong KHAO_SAT_WEB.md. Ba ảnh Google: anh/rich-results-external-1.png tới external-3.png. Schema Markup Validator khi tìm nạp hai URL Manning gặp lỗi dịch vụ; ghi nhận điều kiện này, không suy diễn website thiếu dữ liệu.

## Việc cần kiểm lại

- Thay SITE_URL bằng địa chỉ triển khai thật có quyền sử dụng; ảnh trả về đúng định dạng và truy cập công khai.
- Chạy lại Google/Schema Validator sau triển khai; xem preview chia sẻ trên mạng xã hội thật.
- Không dùng điểm Lighthouse SEO 100 để khẳng định đã được Google lập chỉ mục.
