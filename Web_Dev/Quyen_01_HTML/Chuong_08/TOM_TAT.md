# Chương 8 — Khả năng truy cập

Nguồn học: https://vietcodedi.id.vn/textbooks/1/chapters/10

## Những ý em cần nhớ

POUR gồm nhận biết được, thao tác được, hiểu được và tương thích vững với công nghệ hỗ trợ. Ví dụ: alt cho ảnh (1.1.1), thao tác bàn phím (2.1.1), gợi ý sửa lỗi (3.3.3), tên/vai trò/giá trị của điều khiển (4.1.2). Mức AA gồm cả A và AA; điểm Lighthouse cao chưa phải chứng nhận WCAG.

Thứ tự đọc và Tab chủ yếu theo DOM. Đổi vị trí bằng CSS không tự đổi thứ tự đọc. Em sửa cấu trúc nguồn và tránh tabindex dương. Skip link phải là điểm đến sớm, chỉ hiện khi focus cũng được, nhưng không được display:none; đích main cần nhận focus đúng.

Ưu tiên button, a, input, details, dialog có hành vi sẵn. ARIA chỉ bổ sung tên, trạng thái và quan hệ còn thiếu; không tự tạo hành vi bàn phím. Không đổi role gốc vô cớ, không che phần tử còn nhận focus bằng aria-hidden và luôn có tên cho điều khiển.

`aria-hidden` bỏ thông tin khỏi cây trợ năng nhưng không tự bỏ khỏi màn hình/Tab. `display:none` bỏ khỏi bố cục và luồng focus thông thường. `inert` dùng khi cả vùng tạm không được tương tác, như nền hộp thoại hoặc vùng đang tải.

Nút icon cần tên đúng chức năng. Logo cạnh chữ có thể alt rỗng để tránh nghe trùng. Thông báo giỏ hàng dùng live polite đã tồn tại trước khi cập nhật, không chuyển focus đột ngột. Assertive chỉ dùng khi cần ngắt việc đọc vì khẩn cấp.

Tương phản AA cho chữ thường là ít nhất 4,5:1, chữ lớn 3:1; chữ lớn trong chương là từ 24px thường hoặc khoảng 18,66px đậm. Các thành phần giao diện thuộc tiêu chí tương phản phi văn bản cần 3:1 khi áp dụng. Em đo bằng công cụ thay vì đoán bằng mắt, kiểm cả hover/focus và không chỉ dùng màu để báo lỗi hay tình trạng hàng: phải kèm chữ hoặc dấu hiệu khác.

Dialog modal giữ focus bên trong khi mở; đóng bằng Esc và trả về nút mở. Đây là giới hạn focus có cách thoát, khác bẫy bàn phím không thoát được. Bộ lọc cần aria-expanded khớp trạng thái thật.

## Cách tự kiểm

Đi trang chỉ bằng Tab/Shift+Tab/Enter/Space/Esc, quan sát viền focus và thứ tự. Đối chiếu axe, Lighthouse và cây trợ năng, sau đó nghe bằng trình đọc màn hình. Kiểm tự động chỉ phát hiện một phần lỗi.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [nâng cao](NANG_CAO.md) và [dự án](DU_AN.md).
