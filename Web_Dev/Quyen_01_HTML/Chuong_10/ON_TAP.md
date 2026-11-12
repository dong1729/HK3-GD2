# Ôn tập chương 10

Trả lời theo thứ tự 8 câu trong giáo trình.

1. Nội dung template nằm trong DocumentFragment ở template.content, chưa trong cây hiển thị: UI/điều khiển chưa hoạt động cho tới clone/chèn.

2. show() non-modal; showModal() lên top layer, nền inert. Chỉ open không tạo modal/khóa nền.

3. ::backdrop là pseudo-element sau phần tử top layer như dialog modal. show() không có backdrop modal; popover/fullscreen cũng có thể liên quan top layer.

4. Modal tự chế dễ thoát focus ra nền, nền còn đọc được, đóng xong lạc focus. dialog modal xử lý nền inert/Esc/focus, vẫn cần tên và kiểm focus đầu/khôi phục.

5. details là gấp mở theo luồng với summary; popover lớp nổi nhẹ, auto có light dismiss/Esc, không khóa nền như modal.

6. data-sm-book-id → dataset.smBookId. Tên thường/gạch nối; DOM ai cũng đọc được nên không đặt token/mật khẩu/dữ liệu riêng.

7. Classic chặn parser tải/chạy; defer tải song song, chạy theo thứ tự sau parse; async chạy khi tải xong không giữ thứ tự; module trì hoãn mặc định và theo đồ thị phụ thuộc.

8. progress mô tả mức hoàn thành công việc; rating 4.2/5 dùng meter min=0 max=5 value=4.2 kèm nhãn/chữ đọc được.
