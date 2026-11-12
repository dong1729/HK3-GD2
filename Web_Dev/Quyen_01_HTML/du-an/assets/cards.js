const regions = [...document.querySelectorAll("[data-cart-region]")];
regions.forEach((el) => {
  el.inert = true;
  el.setAttribute("aria-busy", "true");
});
let doc;
try {
  const response = await fetch("/nguon/khuon.html");
  if (!response.ok) throw new Error("Không tải được khuôn");
  doc = new DOMParser().parseFromString(await response.text(), "text/html");
  for (const template of doc.querySelectorAll("template"))
    if (!document.getElementById(template.id))
      document.body.append(template.cloneNode(true));
  document.dispatchEvent(new Event("sm-templates-ready"));
} catch (error) {
  console.warn("Dùng bản dựng sẵn vì khuôn không tải được.", error.message);
} finally {
  regions.forEach((el) => {
    el.inert = false;
    el.removeAttribute("aria-busy");
  });
}
const host = document.getElementById("the-tu-khuon");
if (host && doc) {
  try {
    host.inert = true;
    const response = await fetch("/du-an/assets/books.json");
    if (!response.ok) throw new Error("Không tải được sách");
    const books = await response.json();
    const template = doc.getElementById("sm-card");
    for (const b of [...books, { id: "extra", name: "Thực hành HTML", price: 75000 }]) {
      const node = template.content.cloneNode(true);
      const article = node.querySelector("article");
      article.dataset.smBookId = b.id;
      article.dataset.smPrice = String(b.price);
      node.querySelector("[data-sm-slot=name]").textContent = b.name;
      node.querySelector("[data-sm-slot=price]").textContent =
        b.price.toLocaleString("vi-VN") + " đ";
      node.querySelector("[data-sm-slot=link]").textContent = "Xem " + b.name;
      host.append(node);
    }
  } catch (error) {
    host.textContent = "Không tải được dữ liệu. " + error.message;
  } finally {
    host.inert = false;
  }
}
