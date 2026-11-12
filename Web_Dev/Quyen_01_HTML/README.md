# Quyển 1 — HTML chuyên sâu

Nguồn: https://vietcodedi.id.vn/textbooks/1/chapters/3. Bài thực hành Nguyễn Hoa Đông trong HK3-GD2.

## Mở trong VS Code

Mỗi Chuong_01…Chuong_11 có TOM_TAT.md, ON_TAP.md (8 câu theo thứ tự), BAI_TAP.md, DU_AN.md và bài HTML. BAI_TAP.md chỉ rõ lời giải ticket nâng cao trong cùng dự án nhà sách, thay vì chép thành 11 website rời.

## Chạy

Tại thư mục này chạy `python3 scripts/serve.py`, mở http://127.0.0.1:8765/ để xem mục lục hoặc http://127.0.0.1:8765/du-an/trang-chu. Không mở file trực tiếp nếu dùng module/fetch. Dựng lại từ nguồn: `python3 scripts/build.py`; kiểm tĩnh: `python3 scripts/check.py`.

Sáu trang chính: trang-chu, danh-muc, chi-tiet, gio-hang, thanh-toan, lien-he. Có phân trang, các trang sách phụ và hai bản dịch tiếng Anh thực sự. Khung/head/khuôn dùng chung ở nguon/.

## Phạm vi

Cửa hàng, ISBN, đánh giá và sách là dữ liệu minh họa. POST kiểm dữ liệu trong bộ nhớ, không lưu và không tạo đơn/thanh toán thật. Giỏ lưu localStorage trên thiết bị, có nút xóa. Không nhập dữ liệu thanh toán thật.

SITE_URL mặc định https://sachsaomai.example là địa chỉ dự kiến; đổi sang tên miền thuộc quyền sở hữu khi triển khai. Chưa triển khai site công khai hoặc nộp bài qua LMS. URL không đuôi được máy chủ thực hành ánh xạ sang tệp HTML.

Ảnh tự tạo có 3 cỡ × AVIF/WebP/JPEG. Video không lời có ba khung giới thiệu, track tiếng Việt và bản chép nội dung.

## Kiểm định và đọc giáo trình

Xem TIEN_DO.md và bao-cao/NGHIEM_THU.md. Báo cáo chỉ coi đạt những kiểm tra đã chạy, ghi rõ phần cần triển khai/người đánh giá khác. Workflow GitHub Quyen 1 HTML kiểm chức năng, axe và Lighthouse; bằng chứng ở artifact lần chạy Actions. Tiến độ bài làm riêng với tiến độ đọc chính thức: LMS ghi theo thời gian thực, không sửa bộ đếm/phút đọc.

## Đối chiếu kiến thức

[HTML Living Standard](https://html.spec.whatwg.org/), [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/), [Google Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product-snippet). Một h1 là quy ước dự án; main trong div không tự mất landmark; schema hợp lệ không bảo đảm index/rich result.


## Đọc và sửa mã nguồn

Nội dung từng trang được tách thành tệp HTML dễ đọc trong `nguon/noi-dung/`, thay vì một chuỗi dài trong JSON. Sau khi cài công cụ bằng `cd qa && npm ci`, chạy `npm run format` để định dạng toàn bộ bài tập và mã HTML/CSS/JavaScript. Khi có công cụ này, `scripts/build.py` tự định dạng bản dựng để không trở lại một dòng.

## Chương 6–11

Mở [CHUONG_06_11.md](CHUONG_06_11.md) để xem bài tập, 48 câu ôn tập, sáu lời giải nâng cao, mốc dự án và tóm tắt. [Kế hoạch đọc](KE_HOACH_DOC.md) đã đếm đủ 11 chương; [tiến độ](TIEN_DO.md) ghi riêng trạng thái LMS thực tế.
