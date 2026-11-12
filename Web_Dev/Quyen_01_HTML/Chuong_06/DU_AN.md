# Dự án chương 6 — Hình ảnh và đa phương tiện

Em tiếp tục cùng dự án Nhà sách Sao Mai sáu trang. Phần việc chương này nằm ở các tệp sau:

- [Ảnh responsive hai cột](trung-binh.html)
- [Ảnh bìa và video](../nguon/noi-dung/chi-tiet.html)
- [Lưới sách](../nguon/noi-dung/danh-muc.html)
- [Video giới thiệu](../nguon/noi-dung/trang-chu.html)
- [Bản đồ](../nguon/noi-dung/lien-he.html)

## Cách em thực hiện

1. Mở bài trung bình ở 390px và 1280px, đối chiếu ảnh với sizes.
2. Mở chi tiết sách, kiểm nguồn picture, ảnh không bị méo và bật captions của video.
3. Đối chiếu báo cáo CLS sáu trang; kiểm lại alt bằng trình đọc màn hình.

## Đối chiếu mốc dự án

| Phần việc | Kết quả/việc cần kiểm thêm |
|---|---|
| Ảnh hiện đại và JPEG dự phòng | picture có AVIF/WebP và img JPEG; mỗi bộ ảnh nội dung có 400/800/1200. |
| Tỉ lệ và tải ảnh | width/height đúng tỉ lệ; ảnh đầu high, không lazy; ảnh dưới lazy/async. |
| Alt và chú thích | Alt theo vai trò; figure/figcaption bổ sung thông tin thay vì lặp toàn bộ alt. |
| Video và bản đồ | MP4/WebM, controls/poster/metadata, captions vi; iframe title/lazy/sandbox. |
| Đo hiệu năng | Báo cáo Lighthouse sáu trang có LCP/CLS và ảnh kết quả; đây là đo trong phòng thử nghiệm. |
| Nghe mô tả ảnh | Cần người học kiểm lại bằng VoiceOver/NVDA; cây trợ năng tự động chưa thay việc nghe. |

Bản đồ chung: [BAN_DO_NOI_DUNG.md](../bao-cao/BAN_DO_NOI_DUNG.md). Kết quả: [NGHIEM_THU.md](../bao-cao/NGHIEM_THU.md). Phần giao tiếp với người khác và kiểm triển khai chưa thực hiện thì em không ghi hoàn tất.
