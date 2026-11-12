# Chương 11 — Hoàn thiện khung nhà sách

Nguồn học: https://vietcodedi.id.vn/textbooks/1/chapters/13

## Quy trình em áp dụng

Chốt sáu trang trước: trang chủ giới thiệu và dẫn sách; danh mục tìm/lọc; chi tiết giúp quyết định mua; giỏ kiểm đơn; thanh toán nhập người nhận; liên hệ gửi câu hỏi. Mỗi khối phải giúp mục tiêu trang, tránh thêm phần không cần thiết rồi sửa lại khung.

Bản đồ nội dung ghi khối, mục tiêu và HTML dự kiến. Với mỗi khối em hỏi: phục vụ mục tiêu nào; chính hay phụ; có lặp nhiều trang; có độc lập; cần heading cấp nào. Bảng này giúp phân biệt main/aside, article/section và phần nào đưa vào mẫu chung.

Khung dùng chung gồm head, header, nav, search, main, footer. Chỉ nội dung chính, metadata và trạng thái trang hiện tại thay đổi theo trang. Nhờ vậy sửa skip link hoặc menu một lần không để sáu bản bị lệch nhau.

Ánh xạ chính: nhóm điều hướng dùng nav; nội dung chính dùng main; đơn vị độc lập dùng article; nhóm có chủ đề dùng section và heading. Giỏ cần bảng dữ liệu với caption và th; form cần label, fieldset, legend. Không chọn thẻ chỉ vì hình dáng mặc định.

Rà trợ năng theo cấu trúc/điều hướng, ảnh và tên điều khiển, biểu mẫu, bàn phím/focus. Sau đó làm bốn kiểm ở mục 11.5: W3C Validator; Network để tìm tài nguyên lỗi; đối chiếu title/description/canonical; nghe một trang bằng trình đọc màn hình. Lighthouse/axe chỉ bổ sung, không thay việc nghe.

Danh sách lỗi ghi mã, trang, mô tả, mức độ, người sửa và trạng thái. Đánh giá chéo cần người khác tham gia; em tự rà thì chỉ gọi là tự kiểm. Những mục chưa đủ bằng chứng phải để mở.

## Sẵn sàng học CSS khi nào?

Ba điều kiện là cấu trúc dùng chung ổn định, điểm gắn kiểu rõ và thứ tự đọc trong DOM đúng. Ảnh có alt/tỉ lệ, form chia nhóm, class/data đặt có nghĩa. CSS lo hiển thị, JS lo hành vi; không dùng CSS đảo vị trí để che cấu trúc HTML sai.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [nâng cao](NANG_CAO.md) và [dự án](DU_AN.md).
