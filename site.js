/* Home page — render title, photographic cards, theme from store.json */
(function () {
  var BTN = "BTN-TXT";
  var UNIT = "UNIT-TXT";
  var D1 = "D1";
  var D2 = "D2";
  function faNum(n) {
    return String(n).replace(/[0-9]/g, function (d) { return "0123456789"[+d]; });
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
  function fillFa() {
    try {
      document.title = "TT1-FINAL";
      var nav = document.querySelectorAll(".nav-links a");
      if (nav[0]) nav[0].textContent = "L1x";
      if (nav[1]) nav[1].textContent = "L2x";
      if (nav[2]) nav[2].textContent = "L3x";
      if (nav[3]) nav[3].textContent = "L4x";
    } catch (e) {}
  }
  fillFa();
  Encanto.loadStore().then(function (store) {
    var site = store.site || {};
    Encanto.applyTheme(site);
    Encanto.applyLinks(site);
    T("brandFa", site.brandFa);
    T("brandEn", site.brandEn);
    T("tagline", site.tagline);
    if (site.brandFa) {
      document.title = site.brandFa + " | " + (site.brandEn || "");
    }
    var cats = store.categories || [];
    var wrap = document.getElementById("cards");
    if (wrap && cats.length) {
      wrap.classList.add("grid5");
      wrap.innerHTML = cats.map(card).join("");
    }
    fillFa();
  }).catch(function () {});
})();
