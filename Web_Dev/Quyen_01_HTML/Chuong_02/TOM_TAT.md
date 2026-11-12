# Chương 2 — Cấu trúc nội dung và heading

Nguồn: https://vietcodedi.id.vn/textbooks/1/chapters/4

## Ghi nhớ

header/nav/main/footer là khung; article độc lập, section nhóm chủ đề có heading, div hộp thuần bố cục.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [mốc dự án](DU_AN.md).


## Chọn khối theo nội dung

| Phần tử | Dùng cho | Landmark thường gặp |
|---|---|---|
| header | Mở đầu trang/khối | banner khi ở ngữ cảnh cấp tài liệu |
| nav | Điều hướng quan trọng | navigation |
| main | Nội dung chính đang hiển thị | main |
| article | Nội dung độc lập, như sách hoặc nhận xét | article, không thay main |
| section | Nhóm chủ đề có heading | region khi có tên truy cập thích hợp |
| aside | Phần bổ trợ như sách liên quan | complementary |
| footer | Phần kết trang/khối | contentinfo khi ở ngữ cảnh cấp tài liệu |
| div | Hộp thuần bố cục/lập trình | Không mang vai trò khối nội dung tự thân |

Một h1 là quy ước cho sáu trang. h2 cho mục lớn, h3 cho tiểu mục. Không nhảy cấp khi đi sâu; quay từ h3 về h2 để sang mục mới là bình thường. CSS quyết định cỡ chữ. Không dựa vào thuật toán outline cũ để đặt h1 ở mọi section.

Phép thử article: tách ra vẫn đủ nghĩa không? section cần chủ đề/heading; div không bị cấm nếu chỉ bọc cho bố cục. main nằm trong div vẫn có thể là landmark hợp lệ; cần tránh vị trí bị cấm và hidden/aria-hidden/inert sai.

header/footer trong article là phần đầu/cuối của bài đó, không làm banner/contentinfo cho toàn trang. Nhiều nav đặt nhãn riêng. Tránh gán role thủ công trùng với thẻ gốc.

Kiểm theo thứ tự: DOM và content model → cây heading → cây Accessibility/landmark → bàn phím → hình thức CSS. Giao diện trông đúng chưa chứng minh cấu trúc đúng.
