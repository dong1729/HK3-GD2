# Đối chiếu bàn phím, Lighthouse và axe — ba trang tham khảo

Nguồn dữ liệu: external-browser.json và lighthouse-external-summary.json, chạy trên GitHub Chromium ngày 12/11/2026.

## 1. https://pragprog.com/titles/elixir16/programming-elixir-1-6/

Lượt Tab ghi nhận 49 điểm trước khi lặp về điểm đầu. Cây DOM có 1 h1; skip-link ứng viên: 0.

Lỗi axe: color-contrast (serious).

20 điểm đầu: 1. A learn more about cookies → 2. A dismiss cookie message → 3. A return to pragprog home → 4. A Home → 5. A Books → 6. A Authors → 7. A Publish with Us → 8. A Support → 9. A eGifts → 10. A Swag → 11. A My Orders → 12. INPUT [không có chữ] → 13. BUTTON Search → 14. A Prereqs → 15. A Resources → 16. A Extracts → 17. A Author → 18. A book cover image → 19. A Tweet this → 20. A Exercise
Solutions

## 2. https://www.manning.com/books/grokking-algorithms-second-edition

Lượt Tab ghi nhận 100 điểm trước khi lặp về điểm đầu. Cây DOM có 1 h1; skip-link ứng viên: 0.

Lỗi axe: aria-allowed-attr (critical), aria-command-name (serious), aria-input-field-name (serious), aria-required-children (critical), button-name (critical), label (critical), link-name (serious), listitem (serious), meta-viewport (moderate).

20 điểm đầu: 1. A home-link → 2. INPUT [không có chữ] → 3. BUTTON [không có chữ] → 4. BUTTON View cart → 5. A catalog → 6. A MEAP → 7. A liveBook → 8. A bundles → 9. A liveVideo → 10. A liveProject → 11. A liveAudio → 12. A free ebooks → 13. A register pBook → 14. A subscription → 15. A sponsorships → 16. A view your dashboard → 17. A manage account details → 18. A click tolook inside
                    
                
                
      → 19. A watch video edition → 20. A Mastering Algorithmic Challenges
        read this article now inManning's Free 

## 3. https://www.manning.com/books/grokking-ai-algorithms-second-edition

Lượt Tab ghi nhận 95 điểm trước khi lặp về điểm đầu. Cây DOM có 1 h1; skip-link ứng viên: 0.

Lỗi axe: aria-allowed-attr (critical), aria-command-name (serious), aria-input-field-name (serious), aria-required-children (critical), button-name (critical), label (critical), link-name (serious), listitem (serious), meta-viewport (moderate).

20 điểm đầu: 1. A home-link → 2. INPUT [không có chữ] → 3. BUTTON [không có chữ] → 4. BUTTON View cart → 5. A catalog → 6. A MEAP → 7. A liveBook → 8. A bundles → 9. A liveVideo → 10. A liveProject → 11. A liveAudio → 12. A free ebooks → 13. A register pBook → 14. A subscription → 15. A sponsorships → 16. A view your dashboard → 17. A manage account details → 18. A click tolook inside
                    
                
                
      → 19. A watch video edition → 20. INPUT [không có chữ]

## Phân biệt kết luận

Công cụ phát hiện các trường hợp thiếu nhãn, tên, tương phản, quan hệ ARIA hoặc cấu trúc, tùy trang. Không nên kết luận bẫy phím chỉ từ việc lặp sau khi đã đi hết danh sách — đó có thể là chu kỳ Tab bình thường. Không có outline cũng chưa chứng minh mất dấu focus vì có thể dùng border/background/box-shadow; cần đối chiếu hình và cách hiển thị thực.

Kiểm thủ công có thể phát hiện thứ tự bất hợp lý, hành vi mở/đóng, điểm mất hướng và thông báo live không đúng lúc mà công cụ bỏ sót. Bài khảo sát đã có dữ liệu phím thực do trình duyệt tự động phát, ảnh màn hình và hai loại công cụ; phần đánh giá bằng người dùng/trình đọc màn hình vẫn ghi là chưa xác nhận.
