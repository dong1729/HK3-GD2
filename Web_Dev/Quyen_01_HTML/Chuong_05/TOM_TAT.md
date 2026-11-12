# Chương 5 — Danh sách và bảng dữ liệu

Nguồn: https://vietcodedi.id.vn/textbooks/1/chapters/7

## Ghi nhớ

ul tập không thứ tự; ol trình tự; dl tên–giá trị. Bảng có caption, nhóm hàng, th scope, lưới đúng và vùng cuộn.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [mốc dự án](DU_AN.md).


## Danh sách: chọn bằng ý nghĩa

| Cấu trúc | Tình huống | Quy tắc |
|---|---|---|
| ul/li | Danh mục sách, menu | Đổi thứ tự không đổi ý nghĩa |
| ol/li | Bước đặt hàng, xếp hạng | Trình tự là dữ liệu, không gõ số bằng tay |
| dl/dt/dd | Tác giả, nhà xuất bản, giá | Tên gắn giá trị; có thể nhiều dt hoặc dd trong nhóm |

Danh sách con đặt trong li của cha. ol start đặt điểm bắt đầu; reversed đếm ngược; li value đặt lại số mục. CSS list-style-type đổi hình thức, không đổi loại danh sách. dl hiện đại cũng cho phép bọc các nhóm dt/dd bằng div; không suy luận rằng mọi phần tử ngoài dt/dd đều luôn bị cấm.

## Bảng dữ liệu

caption đặt tên; thead/tbody/tfoot gom hàng; tr là hàng; th là tiêu đề có scope=row/col; td là dữ liệu. colgroup/col mô tả nhóm cột, không thay cho tiêu đề ô.

Bảng đơn giản dùng scope. Bảng phức tạp gán id trên th, headers là danh sách id cho ô dữ liệu. colspan/rowspan phải phủ lưới không chồng/hở; hàng tổng colspan=3 + một ô tổng là bốn cột. Với rowspan phải tính cả ô hàng trước kéo xuống.

Bảng quá rộng đặt trong vùng cuộn ngang có tên và nhận bàn phím; không bẻ bảng thành dữ liệu mất quan hệ hàng/cột. Tránh bảng để dàn trang, thiếu caption, dùng td làm tiêu đề hoặc gộp ô chỉ để trang trí.

Bài trung bình có hai dòng đơn hàng và tổng 321.000 đ để kiểm cụ thể số cột, tiêu đề và phép tính.
