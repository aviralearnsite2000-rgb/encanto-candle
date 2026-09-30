/* Home page — render title, photographic cards, theme from store.json (ASCII-safe) */
(function () {
  var BTN = "دیدن محصولات";
  var UNIT = "محصول 🕯️";
  var D1 = "🌿";
  var D2 = "🤍";
  function faNum(n) {
    return String(n).replace(/[0-9]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹"[+d]; });
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
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }
  function fillStatic() {
    try {
      var nav = document.querySelectorAll(".nav-links a");
      if (nav[0]) nav[0].textContent = "خانه";
      if (nav[1]) nav[1].textContent = "محصولات";
      if (nav[2]) nav[2].textContent = "درباره ما";
      if (nav[3]) nav[3].textContent = "تماس با ما";
      var acts = document.querySelectorAll(".nav-acts .iconbtn");
      if (acts[0]) acts[0].innerHTML = "🛍️<span class=\"n\">" + faNum(0) + "</span>";
      if (acts[1]) acts[1].textContent = "🔍";
      var bg2 = document.querySelector(".burger");
      if (bg2) bg2.textContent = "☰";
      var h2 = document.querySelector(".hero2 h2");
      if (h2) h2.innerHTML = "شمع‌هایی که<br />داستان عشق را روایت می‌کنند…";
      var cta = document.querySelector(".btn-arrow");
      if (cta) cta.textContent = "مشاهده محصولات";
      var feats = [
        ["🎁", "بسته‌بندی زیبا", "مناسب هدیه دادن"],
        ["🤍", "ساخت دست‌ساز", "با عشق و دقت"],
        ["🛡️", "کیفیت تضمینی", "با بهترین مواد اولیه"],
        ["🚚", "ارسال سریع", "به سراسر کشور"]
      ];
      var nodes = document.querySelectorAll(".features .feat");
      for (var i = 0; i < nodes.length && i < feats.length; i++) {
        var ic = nodes[i].querySelector(".ic");
        var b = nodes[i].querySelector("b");
        var s = nodes[i].querySelector("span");
        if (ic) ic.textContent = feats[i][0];
        if (b) b.textContent = feats[i][1];
        if (s) s.textContent = feats[i][2];
      }
      var fn = document.querySelector(".footer-note");
      if (fn) fn.textContent = "سفارش از طریق دایرکت اینستاگرام";
      var bottom = [
        ["🏠", "خانه"],
        ["🤍", "علاقه‌مندی‌ها"],
        ["🯺", "محصولات"],
        ["🛍️", "سبد خرید"]
      ];
      var bn = document.querySelectorAll(".bottomnav a");
      for (var j = 0; j < bn.length && j < bottom.length; j++) {
        bn[j].innerHTML = '<span class="bi">' + bottom[j][0] + "</span>" + bottom[j][1];
        if (j === 0) bn[j].className = "on";
      }
      var cards = document.querySelectorAll("#cards .card");
      for (var k = 0; k < cards.length; k++) {
        var btn = cards[k].querySelector(".btn");
        if (btn && (btn.textContent === "BTN" || btn.textContent.indexOf("BTN") === 0)) btn.textContent = BTN;
        var tl = cards[k].querySelector(".deco.tl");
        var br = cards[k].querySelector(".deco.br");
        if (tl) tl.textContent = D1;
        if (br) br.textContent = D2;
      }
      document.title = "انکنتو | ENCANTO CANDLE";
    } catch (e) {}
  }
  fillStatic();
  Encanto.loadStore().then(function (store) {
    var site = store.site || {};
    Encanto.applyTheme(site);
    Encanto.applyLinks(site);
    setText("brandFa", site.brandFa);
    setText("brandEn", site.brandEn);
    var cats = store.categories || [];
    var wrap = document.getElementById("cards");
    if (wrap && cats.length) {
      wrap.classList.add("grid5");
      wrap.innerHTML = cats.map(card).join("");
    }
    fillStatic();
    if (site.tagline) {
      var tg = document.getElementById("tagline");
      if (tg && tg.textContent === "T1") tg.textContent = site.tagline;
    }
  }).catch(function () {});
})();
