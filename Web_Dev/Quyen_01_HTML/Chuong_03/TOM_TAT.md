# Chương 3 — Văn bản và ngữ nghĩa inline

Nguồn: https://vietcodedi.id.vn/textbooks/1/chapters/5

## Ghi nhớ

Chọn thẻ theo ý nghĩa: strong/em, del/ins, code/kbd/samp/var. Không dùng br để dàn bố cục.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [mốc dự án](DU_AN.md).


## Tra nhanh từ nội dung chương

| Nhu cầu | Thẻ | Tránh |
|---|---|---|
| Đoạn/chuyển chủ đề | p / hr | hr để trang trí |
| Ngắt dòng nội dung/điểm ngắt tùy chọn | br / wbr | br để dàn cột |
| Quan trọng/nhấn giọng | strong / em | đánh đồng với đậm/nghiêng |
| Thu hút chú ý/giọng khác | b / i | đổi hàng loạt không xét nghĩa |
| Đánh dấu tham chiếu/chú thích phụ | mark / small | small chỉ để làm chữ nhỏ |
| Không còn đúng/xóa/thêm | s / del / ins | CSS thay lịch sử nội dung |
| Chỉ số | sub / sup | dùng để nâng hạ chữ trang trí |
| Mã/phím/kết quả/biến | code / kbd / samp / var | đảo kbd và samp |
| Khối giữ khoảng trắng | pre + code | dán HTML không escape |
| Trích dài/ngắn/tên tác phẩm | blockquote / q / cite | cite bao cả đoạn |
| Liên hệ/ngày giờ | address / time datetime | address cho mọi địa chỉ nhắc tới |
| Định nghĩa/viết tắt/mã máy | dfn / abbr / data | lặp dfn ở mọi lần nhắc |
| Phiên âm | ruby / rt / rp | bỏ dự phòng rp |

Block/inline mô tả trình bày mặc định; content model mới quyết định lồng thẻ hợp lệ. Parser không tự sửa mọi span chứa div theo cùng quy tắc như p. strong/em có ngữ nghĩa nhưng việc đọc nhấn giọng còn tùy screen reader và cấu hình.

Gỡ lỗi: nhìn DOM đã parse, kiểm p rỗng, br ép dòng và escape mã; đối chiếu ở nhiều khổ màn hình.
