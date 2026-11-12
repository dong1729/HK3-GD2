# Lời giải nâng cao Q1-06

## Em đã làm ở đâu?

- [Ảnh responsive hai cột](trung-binh.html)
- [Ảnh bìa và video](../nguon/noi-dung/chi-tiet.html)
- [Lưới sách](../nguon/noi-dung/danh-muc.html)
- [Video giới thiệu](../nguon/noi-dung/trang-chu.html)
- [Bản đồ](../nguon/noi-dung/lien-he.html)

## Đối chiếu đề

| Yêu cầu | Cách làm và kết quả/giới hạn |
|---|---|
| Ảnh hiện đại và JPEG dự phòng | picture có AVIF/WebP và img JPEG; mỗi bộ ảnh nội dung có 400/800/1200. |
| Tỉ lệ và tải ảnh | width/height đúng tỉ lệ; ảnh đầu high, không lazy; ảnh dưới lazy/async. |
| Alt và chú thích | Alt theo vai trò; figure/figcaption bổ sung thông tin thay vì lặp toàn bộ alt. |
| Video và bản đồ | MP4/WebM, controls/poster/metadata, captions vi; iframe title/lazy/sandbox. |
| Đo hiệu năng | Báo cáo Lighthouse sáu trang có LCP/CLS và ảnh kết quả; đây là đo trong phòng thử nghiệm. |
| Nghe mô tả ảnh | Cần người học kiểm lại bằng VoiceOver/NVDA; cây trợ năng tự động chưa thay việc nghe. |

## Cách chạy

Tại thư mục Quyển 1, chạy `python3 scripts/build.py`, sau đó `python3 scripts/serve.py`; mở địa chỉ máy chủ in ra. Không mở trực tiếp file khi thử fetch/module hoặc gửi form.

Xem [báo cáo kiểm thực tế](../bao-cao/NGHIEM_THU.md). Các yêu cầu phải nghe, kiểm trên tên miền thật hoặc cần bạn khác tham gia vẫn ghi rõ phần còn lại.
