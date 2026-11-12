# Chương 1 — Tài liệu HTML và metadata

Nguồn: https://vietcodedi.id.vn/textbooks/1/chapters/3

## Ghi nhớ

DOCTYPE; UTF-8 sớm trong head; viewport theo thiết bị; lang theo ngôn ngữ. Mỗi trang có title, description, canonical và Open Graph riêng.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [mốc dự án](DU_AN.md).


## Bộ khung tối thiểu

DOCTYPE trước html để chọn standards mode; html lang=vi; head có meta charset=UTF-8 ngay đầu, viewport width=device-width/initial-scale=1 và title có nghĩa. Lưu tệp thật bằng UTF-8.

## Bốn nhóm trong phần đầu

| Nhóm | Thành phần | Mục đích |
|---|---|---|
| Chế độ/ngôn ngữ | DOCTYPE, lang | Dựng trang đúng chuẩn, đọc đúng ngôn ngữ |
| Giải mã/thiết bị | charset, viewport | Không hỏng dấu, bố cục đúng điện thoại |
| Định danh | title, description, canonical, icon | Tên trang, mô tả, URL chính, biểu tượng |
| Chia sẻ/tài nguyên | Open Graph, theme-color, stylesheet, script | Preview và tài nguyên trang |

Charset: BOM → HTTP charset → meta dò sớm → cơ chế dự phòng, ngoài trường hợp ghi đè riêng. Toàn bộ khai báo meta charset phải trong 1024 byte đầu. HTTP và meta xung đột thì không sửa bằng cách thêm nhiều meta; sửa nguồn cấu hình.

lang kế thừa, đoạn ngoại ngữ khai báo lại; tiếng Việt dùng vi, không vn. Không khóa zoom. Mỗi trang có title/description/canonical riêng. canonical và OG dùng địa chỉ dự kiến nhất quán; favicon/ảnh chia sẻ phải là tài nguyên có thật.

Open Graph gồm og:title, og:description, og:image, og:url; nền tảng có thể có fallback nhưng không nên để tự đoán. Không preload/preconnect mọi tài nguyên; chỉ ưu tiên sau khi biết nhu cầu thực.

Kiểm: compatMode=CSS1Compat; byte UTF-8 và HTTP Content-Type; chế độ điện thoại và zoom; Network không thiếu tài nguyên; W3C Nu. Không đồng nhất có thẻ SEO với đã được Google lập chỉ mục.
