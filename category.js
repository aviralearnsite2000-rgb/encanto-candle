/* Category page — renders one category from store.json (?c=slug).
   Grid is always two columns; multi-photo products become swipe galleries. */
(function () {
  var slug = new URLSearchParams(location.search).get("c") || "";
  var grid = document.getElementById("products");
  var IG_FALLBACK = "https://instagram.com/encanto._candle";

  function faNum(n) {
    return String(n).replace(/[0-9]/g, function (d) {
      return "0123456789"[+d];
    });
  }

  function imgList(p) {
    if (p.images && p.images.length) return p.images;
    if (p.image) return [p.image];
    return [];
  }

  /* Gallery: ltr track keeps index math simple; mouse drag + touch swipe + buttons + dots */
  function galleryHTML(p) {
    var list = imgList(p);
    if (!list.length) {
      return '<div class="p-gal single"><div class="p-track"><div class="p-slide"><span style="font-size:4rem">'
        + Encanto.esc(p.icon || "CANDLE") + "</span></div></div></div>";
    }
    var slides = list.map(function (src, i) {
      return '<div class="p-slide"><img src="' + Encanto.esc(src) + '" alt="'
        + Encanto.esc(p.name) + (list.length > 1 ? " - " + faNum(i + 1) : "")
        + '" loading="lazy" draggable="false"></div>';
    }).join("");
    var dots = list.length > 1
      ? '<div class="p-dots" aria-hidden="true">' + list.map(function (_, i) {
          return '<i class="' + (i === 0 ? "on" : "") + '"></i>';
        }).join("") + "</div>"
      : "";
    var nav = list.length > 1
      ? '<button class="p-nav prev" type="button" aria-label="PREV">&#8249;</button>'
        + '<button class="p-nav next" type="button" aria-label="NEXT">&#8250;</button>'
        + '<span class="p-count"><b class="cur">' + faNum(1) + "</b> / " + faNum(list.length) + "</span>"
      : "";
    return '<div class="p-gal" data-gal data-n="' + list.length + '">'
      + '<div class="p-track">' + slides + "</div>" + nav + dots + "</div>";
  }

  function productCard(p, ig) {
    return '<article class="product">' +
      '<div class="p-img">' + galleryHTML(p) + "</div>" +
      '<div class="p-body"><h3>' + Encanto.esc(p.name) + "</h3>" +
      '<p class="desc">' + Encanto.esc(p.desc) + "</p>" +
      "<div><span class=\"price\">" + Encanto.esc(p.price) + "</span></div>" +
      '<div class="order-row"><a class="btn" href="' + Encanto.esc(ig) + '" target="_blank" rel="noopener">ORDER</a></div>' +
      "</div></article>";
  }

  function goTo(gal, idx) {
    var n = +gal.getAttribute("data-n");
    idx = Math.max(0, Math.min(n - 1, idx));
    gal.setAttribute("data-i", idx);
    gal.querySelector(".p-track").style.transform = "translateX(-" + idx * 100 + "%)";
    var cur = gal.querySelector(".p-count .cur");
    if (cur) cur.textContent = faNum(idx + 1);
    var dots = gal.querySelectorAll(".p-dots i");
    dots.forEach(function (d, i) { d.classList.toggle("on", i === idx); });
  }

  function initGalleries(root) {
    root.querySelectorAll("[data-gal]").forEach(function (gal) {
      if (gal.getAttribute("data-n") < 2) return;
      gal.setAttribute("data-i", 0);
      var prev = gal.querySelector(".p-nav.prev");
      var next = gal.querySelector(".p-nav.next");
      if (prev) prev.addEventListener("click", function (e) { e.stopPropagation(); goTo(gal, +gal.getAttribute("data-i") - 1); });
      if (next) next.addEventListener("click", function (e) { e.stopPropagation(); goTo(gal, +gal.getAttribute("data-i") + 1); });
      gal.querySelectorAll(".p-dots i").forEach(function (d, i) {
        d.addEventListener("click", function (e) { e.stopPropagation(); goTo(gal, i); });
      });

      /* mouse drag + touch swipe (40px threshold) */
      var startX = 0, dx = 0, dragging = false;
      gal.addEventListener("pointerdown", function (e) {
        if (e.target.closest(".p-nav")) return;
        dragging = true; startX = e.clientX; dx = 0;
        gal.classList.add("drag");
        try { gal.setPointerCapture(e.pointerId); } catch (_) {}
      });
      gal.addEventListener("pointermove", function (e) {
        if (!dragging) return;
        dx = e.clientX - startX;
        var idx = +gal.getAttribute("data-i");
        var base = -idx * gal.clientWidth;
        gal.querySelector(".p-track").style.transition = "none";
        gal.querySelector(".p-track").style.transform =
          "translateX(" + (base + dx) + "px)";
      });
      function endDrag() {
        if (!dragging) return;
        dragging = false;
        gal.classList.remove("drag");
        var track = gal.querySelector(".p-track");
        track.style.transition = "";
        var idx = +gal.getAttribute("data-i");
        if (dx <= -40) idx++;
        else if (dx >= 40) idx--;
        goTo(gal, idx);
        dx = 0;
      }
      gal.addEventListener("pointerup", endDrag);
      gal.addEventListener("pointercancel", endDrag);
    });
  }

  Encanto.loadStore().then(function (store) {
    var site = store.site || {};
    Encanto.applyTheme(site);
    Encanto.applyLinks(site);

    var ig = site.instagram || IG_FALLBACK;
    var mini = document.getElementById("miniBrand");
    if (mini && site.brandFa) mini.textContent = site.brandFa + " CANDLE";

    /* file:// (double-click): local-server hint */
    if (location.protocol === "file:") {
      grid.innerHTML = '<p style="text-align:center;color:var(--plum-soft)">Open with a local server:<br><code dir="ltr">python -m http.server 8000</code></p>';
      return;
    }

    var cat = (store.categories || []).find(function (c) { return c.slug === slug; });
    if (!cat) {
      document.getElementById("catTitle").textContent = "NOT-FOUND";
      grid.innerHTML = "";
      return;
    }
    document.title = cat.title + " | " + (site.brandFa || "Encanto");
    var emoji = document.getElementById("catEmoji");
    if (cat.image) {
      emoji.innerHTML = '<img src="' + Encanto.esc(cat.image) + '" alt="" style="width:84px;height:84px;object-fit:cover;border-radius:50%;margin:0 auto">';
    } else {
      emoji.textContent = cat.icon || "CANDLE";
    }
    document.getElementById("catTitle").textContent = cat.title;
    document.getElementById("catDesc").textContent = cat.desc || "";
    var items = cat.items || [];
    grid.innerHTML = items.length
      ? items.map(function (p) { return productCard(p, ig); }).join("")
      : '<p style="text-align:center;color:var(--plum-soft)">EMPTY</p>';
    initGalleries(grid);
  }).catch(function () {
    grid.innerHTML = '<p style="text-align:center;color:var(--plum-soft)">LOAD-ERROR</p>';
  });
})();
