import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const exercises = [
  [6, "co-ban"],
  [6, "trung-binh"],
  [7, "co-ban"],
  [7, "trung-binh"],
  [8, "co-ban"],
  [9, "co-ban"],
  [10, "co-ban"],
  [10, "trung-binh"],
  [11, "co-ban"],
  [11, "trung-binh"],
];
for (const [chapter, level] of exercises) {
  test(`Bài ${chapter} ${level} — nội dung và trợ năng`, async ({ page }) => {
    await page.goto(
      `/Chuong_${String(chapter).padStart(2, "0")}/${level}.html`,
    );
    if (chapter === 10 && level === "trung-binh")
      await expect(page.locator("#the-tu-khuon>li")).toHaveCount(4);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  });
}

test("Ảnh chương 6: slot thực khớp sizes ở hai khổ", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto("/Chuong_06/trung-binh.html");
  const image = page.locator(".responsive-demo img");
  await expect
    .poll(() => image.evaluate((e) => e.complete && e.naturalWidth > 0))
    .toBe(true);
  expect(
    await image.evaluate((e) => e.getBoundingClientRect().width),
  ).toBeCloseTo(350, 0);
  const size = await image.evaluate((e) => ({
    src: e.currentSrc,
    ratio: e.getBoundingClientRect().width / e.getBoundingClientRect().height,
  }));
  expect(size.src).toMatch(/anh-goc-(800|1200)\.(webp|jpg)$/);
  expect(size.ratio).toBeCloseTo(16 / 9, 2);
  await page.setViewportSize({ width: 1440, height: 900 });
  expect(
    await image.evaluate((e) => e.getBoundingClientRect().width),
  ).toBeCloseTo(590, 0);
  await page.screenshot({
    path: "../bao-cao/anh/chuong-06-responsive.png",
    fullPage: true,
  });
  await context.close();
});

test("Nút gốc chương 8 hoạt động bằng bàn phím, không cướp focus", async ({
  page,
}) => {
  await page.goto("/Chuong_08/co-ban.html");
  const button = page.getByRole("button", {
    name: "Thêm vào giỏ",
    exact: true,
  });
  await button.focus();
  await page.keyboard.press("Space");
  await expect(page.locator("#trang-thai")).toContainText("Đã thêm");
  await expect(button).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("searchbox", { name: "Tìm sách" })).toBeFocused();
});

test("Details dùng được khi tắt JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/Chuong_10/co-ban.html");
  const details = page.locator("details");
  await expect(details).toHaveAttribute("open", "");
  await page.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(details).not.toHaveAttribute("open", "");
  await context.close();
});

test("Template mang đúng mã/giá và popover đóng bằng Esc", async ({ page }) => {
  await page.goto("/Chuong_10/trung-binh.html");
  const cards = page.locator("#the-tu-khuon article");
  await expect(cards).toHaveCount(4);
  const rows = await cards.evaluateAll((items) =>
    items.map((e) => ({
      id: e.dataset.smBookId,
      price: Number(e.dataset.smPrice),
      text: e.textContent,
    })),
  );
  expect(new Set(rows.map((x) => x.id)).size).toBe(4);
  expect(rows.every((x) => x.price > 0 && x.text.includes("đ"))).toBe(true);
  await expect(cards.nth(3)).toContainText("Thực hành HTML");
  await page.goto("/du-an/chi-tiet");
  const open = page.locator('header button[popovertarget="gio-nho"]');
  await open.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#gio-nho")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#gio-nho")).toBeHidden();
  const quick = page.getByRole("button", { name: /Xem nhanh/ }).first();
  await quick.click();
  await page.keyboard.press("Shift+Tab");
  expect(
    await page.evaluate(
      () => document.activeElement.closest("dialog") !== null,
    ),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(quick).toBeFocused();
});

test("Khung chung hai trang, metadata và hreflang riêng", async ({ page }) => {
  const shells = [];
  const titles = [];
  for (const slug of ["trang-chu", "danh-muc"]) {
    await page.goto("/du-an/" + slug);
    shells.push(
      await page.evaluate(() => {
        const header = document
          .querySelector("header.site-header")
          .cloneNode(true);
        header
          .querySelectorAll("[aria-current]")
          .forEach((e) => e.removeAttribute("aria-current"));
        return (
          header.outerHTML +
          document.querySelector("footer.site-footer").outerHTML
        );
      }),
    );
    titles.push(await page.title());
  }
  expect(shells[0]).toBe(shells[1]);
  expect(titles[0]).not.toBe(titles[1]);
  for (const [vi, en] of [
    ["danh-muc", "en/catalog"],
    ["chi-tiet", "en/book"],
  ]) {
    await page.goto("/du-an/" + vi);
    const target = await page
      .locator('link[hreflang="en"]')
      .getAttribute("href");
    expect(target).toContain("/du-an/" + en);
    await page.goto("/du-an/" + en);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator('link[hreflang="vi"]')).toHaveAttribute(
      "href",
      new RegExp("/du-an/" + vi + "$"),
    );
  }
});
