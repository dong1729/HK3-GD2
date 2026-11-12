# Chương 6 — Hình ảnh và đa phương tiện

Nguồn học: https://vietcodedi.id.vn/textbooks/1/chapters/8

## Những ý em cần nhớ

`alt` phụ thuộc vai trò ảnh trong trang. Ảnh bìa cần mô tả thông tin nhận diện sách; hoa văn chỉ trang trí có `alt=""`. Biểu tượng giỏ cạnh chữ “Giỏ hàng” cũng để alt rỗng để tránh lặp. Nếu liên kết chỉ có hình, alt phải nói đích đến.

`width` và `height` cho trình duyệt biết tỉ lệ ảnh trước khi tải xong, giúp dành chỗ và giảm CLS. CSS vẫn dùng `width: 100%; height: auto` để co ảnh; các con số HTML cần đúng tỉ lệ tệp thật.

Với `srcset` dạng `w`, em khai báo chiều rộng thật của từng tệp. `sizes` mô tả chiều rộng ảnh sẽ chiếm trong bố cục, không phải độ rộng tệp tải. Ví dụ điện thoại 390px, lề hai bên tổng 40px thì ảnh rộng 350 CSS px; DPR 2 cần khoảng 700 pixel, bản 800 thường phù hợp. Không trộn `w` và `x` trong cùng srcset.

`picture` chọn định dạng hoặc cách cắt khác nhau. AVIF/WebP giảm dung lượng, JPEG dự phòng; SVG hợp icon, PNG hợp ảnh cần bảo toàn chi tiết/độ trong suốt. Art direction thay cả cách cắt ảnh, khác việc chỉ đổi độ phân giải cùng một hình.

Ảnh chủ đạo đặt `fetchpriority="high"`, không lazy. Ảnh ở dưới có thể `loading="lazy" decoding="async"`. Các gợi ý này không thay việc giảm dung lượng.

Video cần controls, poster, preload hợp lý và captions tiếng Việt. Video bài làm là minh họa không có lời nói, có phụ đề mô tả ba cảnh và bản chép nội dung. iframe bản đồ cần title, tải chậm và sandbox chỉ cho quyền cần thiết.

## Cách tự kiểm

Đổi khổ màn hình, xem Network/currentSrc để biết ảnh thực được chọn; kiểm tỉ lệ và CLS khi tải lại. Thử video và bật phụ đề. Cuối cùng rà alt theo ngữ cảnh, không chỉ kiểm có thuộc tính hay chưa.

Xem [ôn tập](ON_TAP.md), [bài tập](BAI_TAP.md), [nâng cao](NANG_CAO.md) và [dự án](DU_AN.md).
