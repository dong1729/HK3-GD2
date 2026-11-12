# Chương 4 — Liên kết, URL và điều hướng

Nguồn: https://vietcodedi.id.vn/textbooks/1/chapters/6

## Ghi nhớ

a href chuyển đích; button thao tác. Skip link đầu body, nav có tên/aria-current, neo id duy nhất, _blank có noopener.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [mốc dự án](DU_AN.md).


## Tra nhanh

| Tình huống | Cách viết |
|---|---|
| Tới trang trong site | a href=/du-an/danh-muc |
| Tới miền khác | a với URL https tuyệt đối |
| Tới vùng trong trang | href=#danh-gia, id=danh-gia duy nhất |
| Thao tác ngay trên trang | button type=button |
| Gửi form | button type=submit |
| Mở tab mới có chủ đích | target=_blank, rel=noopener noreferrer, báo trước tab mới |
| Tải tài nguyên cùng nguồn | a href thật, download=tên-gợi-ý |
| Email/điện thoại | mailto: / tel: |

URL: scheme://host:port/path?query#fragment. Port mặc định HTTPS là 443, HTTP là 80. Fragment không gửi tới máy chủ. Query được gửi và có thể nằm trong lịch sử/log; không đặt token/dữ liệu riêng trong URL. URLSearchParams giúp mã hóa query thay vì nối tay.

URL tương đối giải theo URL tài liệu, ../ lên một cấp, / tính từ gốc miền. Đường dẫn hoa/thường có thể khác khi triển khai Linux. download chủ yếu áp dụng same-origin và data/blob; phản hồi máy chủ và trình duyệt còn ảnh hưởng hành vi tải.

Bốn mẫu điều hướng: nav menu, breadcrumb ol, skip link đầu body, nav phân trang prev/next. aria-label phân biệt nhiều nav; aria-current=page chỉ mục hiện tại. prev/next là quan hệ tài liệu hợp lệ, không nên hứa nó giúp Google xếp hạng.

Neo cần id ổn định và duy nhất; tabindex=-1 giúp vùng nhận focus; :target làm rõ đích và scroll-margin-top tránh header che. Không display:none skip link, không dùng tabindex dương/CSS order để vá thứ tự DOM.

Gỡ lỗi: kiểm URL cuối sau phân giải, tài nguyên có tồn tại, id đích, target/rel, focus sau skip link và lượt Tab thực tế.
