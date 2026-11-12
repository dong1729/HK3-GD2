# Ôn tập chương 10 — HTML hiện đại và API mở rộng

Câu hỏi được diễn đạt gọn theo thứ tự trong giáo trình.

## 1. Vì sao template chưa hiển thị?

Nội dung template nằm trong DocumentFragment ở template.content, chưa trong cây hiển thị: UI/điều khiển chưa hoạt động cho tới clone/chèn.

## 2. show, showModal và open?

show() non-modal; showModal() lên top layer, nền inert. Chỉ open không tạo modal/khóa nền.

## 3. ::backdrop hoạt động khi nào?

::backdrop là pseudo-element sau phần tử top layer như dialog modal. show() không có backdrop modal; popover/fullscreen cũng có thể liên quan top layer.

## 4. Ba lỗi modal tự chế và dialog gốc?

Modal tự chế dễ thoát focus ra nền, nền còn đọc được, đóng xong lạc focus. dialog modal xử lý nền inert/Esc/focus, vẫn cần tên và kiểm focus đầu/khôi phục.

## 5. details/summary hay popover?

details là gấp mở theo luồng với summary; popover lớp nổi nhẹ, auto có light dismiss/Esc, không khóa nền như modal.

## 6. data-* và dataset có gì cần tránh?

data-sm-book-id → dataset.smBookId. Tên thường/gạch nối; DOM ai cũng đọc được nên không đặt token/mật khẩu/dữ liệu riêng.

## 7. Thứ tự bốn cách nạp script?

Classic chặn parser tải/chạy; defer tải song song, chạy theo thứ tự sau parse; async chạy khi tải xong không giữ thứ tự; module trì hoãn mặc định và theo đồ thị phụ thuộc.

```text
Classic: HTML ─ gặp script ─ tải + chạy ─ tiếp tục HTML
Defer:   HTML ───────────────── xong ─ chạy A ─ chạy B
         tải A/B song song với HTML, giữ thứ tự defer
Async:   HTML ─── [script nào tải xong chạy trước] ───
Module:  HTML ───────────────── xong ─ chạy đồ thị module
```

Async làm thứ tự giữa các tệp không đoán trước theo vị trí thẻ. Không dựa vào thứ tự giữa script async/defer/module trộn lẫn để truyền dữ liệu ngầm; module nên import phụ thuộc tường minh.

## 8. Rating nên dùng progress hay meter?

progress mô tả mức hoàn thành công việc; rating 4.2/5 dùng meter min=0 max=5 value=4.2 kèm nhãn/chữ đọc được.
