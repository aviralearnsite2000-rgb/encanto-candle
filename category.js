/* Category page — render one category's products from store.json (?c=slug) */
(function () {
  var slug = new URLSearchParams(location.search).get("c") || "";
  var grid = document.getElementById("products");
  var IG_FALLBACK = "https://instagram.com/encanto._candle";
  function productCard(p, ig) {
    var visual = p.image
      ? '<img src="' + Encanto.esc(p.image) + '" alt="' + Encanto.esc(p.name) + '" loading="lazy">'
      : Encanto.esc(p.icon || "🕯️");
    return '<article class="product">' +
      '<div class="p-img">' + visual + "</div>" +
      '<div class="p-body"><h3>' + Encanto.esc(p.name) + "</h3>" +
      '<p class="desc">' + Encanto.esc(p.desc) + "</p>" +
      "<div><span class=\"price\">" + Encanto.esc(p.price) + "</span></div>" +
      '<div class="order-row"><a class="btn" href="' + Encanto.esc(ig) + '" target="_blank" rel="noopener">سفارش 💌</a></div>' +
      "</div></article>";
  }
  Encanto.loadStore().then(function (store) {
    var site = store.site || {};
    Encanto.applyTheme(site);
    Encanto.applyLinks(site);
    var ig = site.instagram || IG_FALLBACK;
    var mini = document.getElementById("miniBrand");
    if (mini && site.brandFa) mini.textContent = site.brandFa + " 🕯️";
    if (location.protocol === "file:") {
      grid.innerHTML = '<p style="text-align:center">برای دیدن محصولات با سرور محلی باز کنید</p>';
      return;
    }
    var cat = (store.categories || []).find(function (c) { return c.slug === slug; });
    if (!cat) {
      document.getElementById("catTitle").textContent = "دسته پیدا نشد";
      grid.innerHTML = "";
      return;
    }
    document.title = cat.title + " | " + (site.brandFa || "انکنتو");
    var emoji = document.getElementById("catEmoji");
    if (cat.image) {
      emoji.innerHTML = '<img src="' + Encanto.esc(cat.image) + '" alt="" style="width:84px;height:84px;object-fit:cover;border-radius:50%;margin:0 auto">';
    } else {
      emoji.textContent = cat.icon || "🕯️";
    }
    document.getElementById("catTitle").textContent = cat.title;
    document.getElementById("catDesc").textContent = cat.desc || "";
    var items = cat.items || [];
    grid.innerHTML = items.length
      ? items.map(function (p) { return productCard(p, ig); }).join("")
      : '<p style="text-align:center">هنوز محصولی ثبت نشده است</p>';
  }).catch(function () {
    grid.innerHTML = '<p style="text-align:center">خطا در بارگذاری — لطفاً رفرش کنید.</p>';
  });
})();
