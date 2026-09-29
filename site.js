/* Home page — render title, cards, theme from store.json */
(function () {
  function visual(c) {
    if (c.image) { return '<img src="' + Encanto.esc(c.image) + '" alt="' + Encanto.esc(c.title) + '" loading="lazy">'; }
    return Encanto.esc(c.icon || "🕯️");
  }
  function card(c) {
    return '<a class="card" href="category.html?c=' + encodeURIComponent(c.slug) + '">' +
      '<div class="card-icon">' + visual(c) + "</div>" +
      '<div class="card-txt"><h2>' + Encanto.esc(c.title) + "</h2><p>" + Encanto.esc(c.desc) + "</p></div>" +
      '<span class="btn">دیدن محصولات</span></a>';
  }
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }
  Encanto.loadStore().then(function (store) {
    var site = store.site || {};
    Encanto.applyTheme(site);
    Encanto.applyLinks(site);
    setText("brandFa", site.brandFa);
    setText("brandEn", site.brandEn);
    setText("tagline", site.tagline);
    var cats = store.categories || [];
    var wrap = document.getElementById("cards");
    if (wrap && cats.length) wrap.innerHTML = cats.map(card).join("");
  }).catch(function () {});
})();
