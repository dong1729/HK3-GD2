# Chương 9 — SEO kỹ thuật

Nguồn học: https://vietcodedi.id.vn/textbooks/1/chapters/11

## Những ý em cần nhớ

Công cụ tìm kiếm phải khám phá/tải trang, phân tích để lập chỉ mục rồi mới xếp hạng theo truy vấn. HTML cung cấp liên kết, nội dung và ngữ nghĩa cho các bước đó. Trang không được liên kết nội bộ khó được tìm thấy; sitemap hỗ trợ khám phá nhưng không bảo đảm lập chỉ mục.

Chọn một URL chuẩn cho một nội dung và dùng nhất quán trong link, canonical và sitemap. Canonical là tín hiệu chọn bản chính, không tự chuyển hướng người dùng. Quy ước bài làm: chữ thường, không dấu, gạch nối, URL công khai không có đuôi html hoặc slash cuối.

robots.txt điều khiển crawl, còn meta robots noindex yêu cầu bỏ khỏi chỉ mục sau khi đọc được trang. Không dùng robots.txt để che dữ liệu riêng; vùng riêng phải có xác thực. Giỏ hàng, thanh toán và nhiều trang tìm kiếm/lọc thường không có ích cho kết quả tìm kiếm.

Mỗi trang có title, description và canonical riêng. Open Graph/Twitter Card cung cấp thông tin chia sẻ; ảnh chung chuẩn bị cỡ 1200×630. hreflang trỏ các bản ngôn ngữ thật, có tự tham chiếu và liên kết đối xứng; x-default là bản mặc định.

JSON-LD mô tả Book/Product, tác giả, ảnh, giá và tình trạng bán. Dữ liệu phải khớp nội dung hiện trên trang; không bịa điểm đánh giá hoặc ISBN. Schema Markup Validator kiểm mô hình schema, còn Rich Results Test kiểm các loại Google hỗ trợ. Có schema hợp lệ vẫn chưa bảo đảm có kết quả giàu.

Core Web Vitals gồm LCP, INP và CLS. Ở tầng HTML em dành chỗ ảnh, tránh lazy ảnh đầu, ưu tiên đúng ảnh chính và dùng defer/module cho mã. LCP/CLS đo trong lab không thay số liệu ngoài hiện trường và không đủ để kết luận INP.

## Giới hạn bài làm

Tên miền .example chỉ là cấu hình mẫu. Muốn kiểm chỉ mục Google, bản xem trước chia sẻ và kết quả giàu thực cần URL công khai hoạt động. Không ghi “đã lên Google” khi chỉ mới kiểm mã.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [nâng cao](NANG_CAO.md) và [dự án](DU_AN.md).
