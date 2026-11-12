# Ôn tập chương 3 — Văn bản và ngữ nghĩa inline

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. Block và inline khác nhau?

Mặc định khối xuống dòng mới và chiếm rộng khả dụng; inline đi trong dòng chữ. CSS display không đổi content model HTML.

## 2. Div trong p sẽ ra sao?

p chỉ chứa phrasing content. div trong p khiến parser đóng p trước div và có thể sinh p rỗng, DOM khác bản nguồn.

## 3. Khi nào dùng br?

br khi ngắt dòng là nội dung như thơ/địa chỉ. Xuống dòng theo màn hình/khoảng cách dùng CSS.

## 4. hr khác wbr thế nào?

hr đánh dấu chuyển chủ đề; wbr gợi ý điểm ngắt chuỗi dài, không bắt xuống dòng và không tạo đường kẻ.

## 5. strong/em khác b/i thế nào?

strong quan trọng; em nhấn giọng; b thu hút chú ý không tăng quan trọng; i giọng/thuật ngữ khác ngữ cảnh. CSS quyết định hình thức.

## 6. s, del và ins khác nhau?

s thông tin không còn chính xác/liên quan; del phần xóa khi sửa; ins phần thêm. Chữ chèn bằng CSS không có ngữ nghĩa sửa đổi tương đương.

## 7. code/kbd/samp/var và pre?

code mã; kbd đầu vào; samp đầu ra; var biến. pre giữ khoảng trắng/xuống dòng, code đánh dấu mã nên kết hợp.

## 8. Khi nào cần thực thể HTML?

&lt; hiển thị dấu nhỏ hơn không mở thẻ; &amp; biểu diễn &; &quot; cho nháy kép trong thuộc tính cùng dấu bao. Không escape hai lần.
