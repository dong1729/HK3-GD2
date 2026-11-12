# Ôn tập chương 11 — Dự án hoàn thiện khung nhà sách

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. Vì sao chốt phạm vi trước mã?

Chốt phạm vi/mục tiêu tránh thiếu trang/khối, link cụt và sửa cấu trúc sau định dạng.

## 2. Bản đồ nội dung gồm gì?

Bản đồ: trang/URL, mục tiêu, khối, HTML, dữ liệu và link. Ngăn thẻ sai, heading thiếu, trùng nội dung và đích thiếu.

## 3. Bốn quy tắc ánh xạ sang thẻ?

Điều hướng → nav; chính → main; độc lập → article; chủ đề → section có heading. Hộp thuần bố cục mới div.

## 4. Vì sao dùng khung chung sáu trang?

Khung chung sửa head/menu/footer/skip link một nơi rồi dựng sáu trang. title/canonical/aria-current và main vẫn riêng từng trang.

## 5. Bốn nhóm kiểm trợ năng?

Bốn nhóm: cấu trúc/điều hướng thiếu main; ảnh/tên alt sai; form thiếu nhãn/lỗi dạng chữ; bàn phím/focus có bẫy. Đối chiếu POUR.

## 6. Bốn công cụ kiểm định?

Theo mục 11.5: W3C Validator kiểm cú pháp HTML; tab Network tìm tài nguyên lỗi/404; đối chiếu thẻ mô tả trang kiểm title, description, canonical riêng; trình đọc màn hình kiểm cấu trúc, nhãn và thứ tự đọc bằng cách nghe. Kết quả mong muốn là HTML không lỗi, không thiếu tài nguyên, metadata không trùng và nghe hiểu trang không cần nhìn. Lighthouse và axe là công cụ bổ sung, không thay thế bốn bước này.

## 7. Đánh giá chéo và mã lỗi?

Đánh giá chéo do người khác tìm điểm mù tác giả; mã lỗi theo dõi trang/mức độ/người sửa/trạng thái. Không ghi tự kiểm thành peer review đã diễn ra.

## 8. Ba điều kiện nối sang CSS?

Sang CSS khi cấu trúc sáu trang ổn định, điểm gắn kiểu rõ, thứ tự đọc DOM đúng không đảo nguồn. Ảnh có alt/tỷ lệ, form chia nhóm, trách nhiệm CSS/JS rõ.
