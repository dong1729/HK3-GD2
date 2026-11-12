# Ôn tập chương 1 — Tài liệu HTML và metadata

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. DOCTYPE ảnh hưởng dựng trang thế nào?

DOCTYPE chọn standards mode. Thiếu thường vào quirks mode: khác mô hình hộp, chiều cao phần trăm và căn ảnh trong ô bảng. Kiểm document.compatMode: CSS1Compat/BackCompat.

## 2. Thứ tự ưu tiên bảng mã?

Ưu tiên thông thường: BOM → charset HTTP → meta dò sớm → dò đoán/mặc định; ghi đè người dùng là ngoại lệ. Byte UTF-8 phải nhất quán với HTTP/meta.

## 3. Vì sao meta charset trong 1024 byte đầu?

Toàn bộ meta charset phải nằm trong 1024 byte đầu để bộ dò sớm tìm được. Đặt muộn không hợp chuẩn, có thể đã giải mã sai và không thể dựa vào nó để sửa.

## 4. Layout và visual viewport khác nhau?

Layout viewport dùng tính bố cục; visual viewport là vùng đang thấy khi zoom. width=device-width đặt khổ bố cục, initial-scale=1 đặt mức phóng ban đầu.

## 5. Hệ thống nào dùng lang?

lang giúp screen reader chọn giọng; trình duyệt ngắt từ/kiểm chính tả; CSS :lang(); công cụ dịch. Công cụ tìm kiếm có thể tham khảo nhưng không chỉ dựa vào lang.

## 6. Tại sao không khóa zoom?

Khóa zoom cản người thị lực kém, liên quan WCAG 1.4.4 và 1.4.10. Không dùng user-scalable=no hoặc maximum-scale=1.

## 7. title và og:title có vai trò gì?

title định danh tài liệu; og:title điều khiển tiêu đề preview Open Graph. Fallback tùy nền tảng nên khai báo tường minh.

## 8. Chữ Việt hỏng khi triển khai: kiểm gì?

Chữ Việt hỏng: kiểm byte tệp, HTTP charset, vị trí meta, dữ liệu nguồn cũ và cache/CDN. Đối chiếu Response Headers với bản nguồn.
