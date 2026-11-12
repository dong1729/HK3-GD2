# Ôn tập chương 8 — Khả năng truy cập

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. Bốn nguyên tắc POUR?

Perceivable: alt (1.1.1); Operable: bàn phím (2.1.1); Understandable: gợi ý sửa lỗi (3.3.3); Robust: tên/vai trò/giá trị (4.1.2).

## 2. A/AA/AAA khác nhau?

A/AA/AAA tăng dần; AA gồm A+AA, thường là mục tiêu sản phẩm khả thi. Công cụ tự động không chứng nhận toàn bộ AA.

## 3. Đọc số tiêu chí 2.4.7 thế nào?

2.4.7: nguyên tắc Operable, nhóm Navigable, tiêu chí Focus Visible mức AA: thấy được phần tử focus.

## 4. Thứ tự Tab và bố cục CSS?

Thứ tự Tab theo DOM/tabindex, không tự theo CSS order/grid. Sửa DOM, tránh tabindex dương để vá.

## 5. Skip link giải quyết gì?

Skip link bỏ khối lặp để vào main; hiện khi focus, không display:none. Đích nhận focus để tiếp tục đúng chỗ.

## 6. Năm quy tắc ARIA?

Năm quy tắc: ưu tiên HTML gốc; không đổi ngữ nghĩa gốc vô cớ; dùng được bàn phím; không aria-hidden/role=presentation trên phần tử focus; điều khiển cần tên truy cập. ARIA sai che thông tin đúng.

## 7. aria-hidden khác display:none?

aria-hidden bỏ cây truy cập nhưng vẫn có thể hiện/focus. display:none bỏ bố cục và focus thông thường. Không để nút focus được trong aria-hidden.

## 8. Live region polite/assertive?

polite chờ lượt đọc; assertive ngắt cho khẩn. Tạo vùng rỗng trước rồi đổi text; thêm vùng cùng nội dung một lượt có thể không được thông báo.
