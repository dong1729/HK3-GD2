# Ôn tập chương 6 — Hình ảnh và đa phương tiện

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. Alt cho ba vai trò ảnh?

Nội dung: alt mô tả thông tin; trang trí: alt rỗng; chức năng: hành động/đích. Icon cạnh chữ Giỏ hàng dùng alt rỗng tránh đọc lặp.

## 2. Width/height giảm CLS thế nào?

width/height dành tỷ lệ trước khi tải. CSS aspect-ratio cũng làm được; chỉ width:100%/height:auto chưa chắc dành chỗ khi chưa biết tỷ lệ gốc.

## 3. Trình duyệt chọn srcset w ra sao?

sizes cho rộng CSS dự kiến; kết hợp DPR ước lượng pixel rồi chọn srcset. Browser còn có thể cân mạng/cache.

## 4. Vì sao không trộn w và x?

w mô tả rộng nội tại; x mật độ cho kích thước hiển thị cố định. Trộn trong cùng srcset không hợp lệ.

## 5. Art direction là gì?

Art direction thay cách cắt/bố cục ảnh, như banner ngang cắt trung tâm trên điện thoại; responsive resolution chỉ đổi độ phân giải cùng nội dung.

## 6. Ba tiêu chí chọn định dạng ảnh?

Cân chất lượng, dung lượng, hỗ trợ: JPEG ảnh chụp dự phòng; PNG lossless/alpha; WebP/AVIF nén hiện đại; SVG vector/icon.

## 7. Autoplay, muted và captions?

Browser thường chặn autoplay có tiếng; muted giúp nhưng không bảo đảm. captions chép lời và âm thanh có nghĩa cho người khiếm thính/không bật tiếng.

## 8. Iframe cần title/lazy/sandbox thế nào?

Iframe bên thứ ba có thể theo dõi/chạy script. title mô tả đích; lazy hoãn tải; sandbox chỉ cấp quyền cần, kiểm chức năng sau hạn chế.
