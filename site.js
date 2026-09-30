/* Home page - render title, photographic cards, theme from store.json */
(function () {
  var BTN = "دیدن محصولات";
  var UNIT = "محصول 🕯️";
  var D1 = "🌿";
  var D2 = "🤍";
  var FADIG = "۰۱۲۳۴۵۶۷۸۹";
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
      var nav0 = document.querySelectorAll(".nav-links a")[0]; if (nav0) nav0.textContent = "خانه";
      var nav1 = document.querySelectorAll(".nav-links a")[1]; if (nav1) nav1.textContent = "محصولات";
      var nav2 = document.querySelectorAll(".nav-links a")[2]; if (nav2) nav2.textContent = "درباره ما";
      var nav3 = document.querySelectorAll(".nav-links a")[3]; if (nav3) nav3.textContent = "تماس با ما";
      var acts = document.querySelectorAll(".nav-acts .iconbtn");
      if (acts[0]) acts[0].innerHTML = "🛍️" + '<span class="n">' + faNum(0) + "</span>";
      if (acts[1]) acts[1].textContent = "🔍";
      var bgr = document.querySelector(".burger");
      if (bgr) bgr.textContent = "☰";
      var h2 = document.querySelector(".hero2 h2");
      if (h2) h2.innerHTML = "شمع‌هایی که" + "<br />" + "داستان عشق را روایت می‌کنند…";
      var cta = document.querySelector(".btn-arrow");
      if (cta) cta.textContent = "مشاهده محصولات";
      var FEATS = [["🎁","بسته‌بندی زیبا","مناسب هدیه دادن"],["🤍","ساخت دست‌ساز","با عشق و دقت"],["🛡️","کیفیت تضمینی","با بهترین مواد اولیه"],["🚚","ارسال سریع","به سراسر کشور"]];
      var nodes = document.querySelectorAll(".features .feat");
      for (var i = 0; i < nodes.length && i < FEATS.length; i++) {
        var ic = nodes[i].querySelector(".ic");
        var b = nodes[i].querySelector("b");
        var s = nodes[i].querySelector("span");
        if (ic) ic.textContent = FEATS[i][0];
        if (b) b.textContent = FEATS[i][1];
        if (s) s.textContent = FEATS[i][2];
      }
      var fn = document.querySelector(".footer-note");
      if (fn) fn.textContent = "سفارش از طریق دایرکت اینستاگرام";
      var BN = [["🏠","خانه"],["🤍","علاقه‌مندی‌ها"],["🧺","محصولات"],["🛍️","سبد خرید"]];
      var bnl = document.querySelectorAll(".bottomnav a");
      for (var j = 0; j < bnl.length && j < BN.length; j++) {
        bnl[j].innerHTML = '<span class="bi">' + BN[j][0] + "</span>" + BN[j][1];
      }
      var sc = document.querySelectorAll("#cards .card .btn");
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
    if (wrap && cats.length) { wrap.classList.add("grid5"); wrap.innerHTML = cats.map(card).join(""); }
    fillStatic();
  }).catch(function () {});
})();
