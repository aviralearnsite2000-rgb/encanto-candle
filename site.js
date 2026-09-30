/* Home page - render title, photographic cards, theme from store.json */
(function () {
  var BTN = "BTN-TXT";
  var UNIT = "UNIT-TXT";
  var D1 = "D1";
  var D2 = "D2";
  var FADIG = "0123456789";
  function faNum(n) {
    return String(n).replace(/[0-9]/g, function (d) { return FADIG[+d]; });
  }
  function card(c) {
    var n = (c.items || []).length;
    var bg = c.image
      ? '<div class="card-bg"><img src="' + Encanto.esc(c.image) + '" alt="" loading="lazy"></div>'
      : "";
    var badge = n
      ? '<span class="card-count">' + faNum(n) + " " + UNIT + "</span>"
      : "";
    return '<a class="card" href="category.html?c=' + encodeURIComponent(c.slug) + '">' +
      bg + '<div class="card-veil" aria-hidden="true"></div>' + badge +
      '<span class="deco tl">' + D1 + '</span><span class="deco br">' + D2 + "</span>" +
      '<div class="card-txt"><h2>' + Encanto.esc(c.title) + "</h2><p>" + Encanto.esc(c.desc) + "</p></div>" +
      '<span class="btn">' + BTN + "</span></a>";
  }
  function T(id, v) {
    var el = document.getElementById(id);
    if (el && v) el.textContent = v;
  }
  function fillStatic() {
    try {
      var sc = document.querySelectorAll("#cards .card .btn, #decorWrap .card .btn");
      for (var k = 0; k < sc.length; k++) { if (sc[k].textContent === "BTN") sc[k].textContent = BTN; }
    } catch (e) {}
  }
  fillStatic();
  Encanto.loadStore().then(function (store) {
    var site = store.site || {};
    Encanto.applyTheme(site);
    Encanto.applyLinks(site);
    T("brandFa", site.brandFa);
    T("brandEn", site.brandEn);
    T("tagline", site.tagline);
    if (site.brandFa) { document.title = site.brandFa + " | " + (site.brandEn || ""); }
    var cats = store.categories || [];
    var wrap = document.getElementById("cards");
    var decorWrap = document.getElementById("decorWrap");
    if (wrap && cats.length) {
      var first = cats.slice(0, 4);
      var decor = null;
      for (var i = 0; i < cats.length; i++) { if (cats[i].slug === "decor") decor = cats[i]; }
      if (!decor) decor = cats[4];
      wrap.innerHTML = first.map(card).join("");
      if (decorWrap && decor) decorWrap.innerHTML = card(decor);
    }
    fillStatic();
  }).catch(function () {});
})();
