/* 🕯️ صفحه دسته — محصول‌های یک دسته را از روی store.json رندر می‌کند (?c=slug)
   گرید همیشه دو ستونه است؛ هر محصول چند عکس داشته باشد گالری سوایپی می‌شود.
   کلیک روی محصول همان صفحه را به «نمای بزرگ» می‌برد: درگ بین عکس‌ها، توضیحات و
   دکمه سفارش زیر عکس، دکمه بازگشت بالای عکس — بدون رفتن به صفحه جدید. */
(function () {
  var slug = new URLSearchParams(location.search).get("c") || "";
  var grid = document.getElementById("products");
  var IG_FALLBACK = "https://instagram.com/encanto._candle";
  var modal = document.getElementById("productModal");
  var items = [];
  var igLink = IG_FALLBACK;
  var lastCard = null;

  function faNum(n) {
    return String(n).replace(/[0-9]/g, function (d) {
      return "۰۱۲۳۴۵۶۷۸۹"[+d];
    });
  }

  function imgList(p) {
    if (p.images && p.images.length) return p.images;
    if (p.image) return [p.image];
    return [];
  }

  /* گالری با چیدمان استاندارد: اسلاید ۱ چپ‌ترین است و دکمه «بعدی» سمت راست است.
     درگ موس + سوایپ لمسی + دکمه + دات — هم برای کارت محصول هم نمای بزرگ. */
  function galleryHTML(p) {
    var list = imgList(p);
    if (!list.length) {
      return '<div class="p-gal single"><div class="p-track"><div class="p-slide"><span style="font-size:4rem">'
        + Encanto.esc(p.icon || "🕯️") + "</span></div></div></div>";
    }
    var slides = list.map(function (src, i) {
      return '<div class="p-slide"><img src="' + Encanto.esc(src) + '" alt="'
        + Encanto.esc(p.name) + (list.length > 1 ? " — " + faNum(i + 1) : "")
        + '" loading="lazy" draggable="false"></div>';
    }).join("");
    var dots = list.length > 1
      ? '<div class="p-dots" aria-hidden="true">' + list.map(function (_, i) {
          return '<i class="' + (i === 0 ? "on" : "") + '"></i>';
        }).join("") + "</div>"
      : "";
    var nav = list.length > 1
      ? '<button class="p-nav prev" type="button" aria-label="عکس قبلی">‹</button>'
        + '<button class="p-nav next" type="button" aria-label="عکس بعدی">›</button>'
        + '<span class="p-count"><b class="cur">' + faNum(1) + "</b> از " + faNum(list.length) + "</span>"
      : "";
    return '<div class="p-gal" data-gal data-n="' + list.length + '">'
      + '<div class="p-track">' + slides + "</div>" + nav + dots + "</div>";
  }

  function productCard(p, i) {
    return '<article class="product" data-i="' + i + '" tabindex="0" aria-haspopup="dialog">' +
      '<div class="p-img">' + galleryHTML(p) + "</div>" +
      '<div class="p-body"><h3>' + Encanto.esc(p.name) + "</h3>" +
      '<p class="desc">' + Encanto.esc(p.desc) + "</p>" +
      "<div><span class=\"price\">" + Encanto.esc(p.price) + "</span></div>" +
      '<div class="order-row"><a class="btn" href="' + Encanto.esc(igLink) + '" target="_blank" rel="noopener">سفارش 💌</a></div>' +
      "</div></article>";
  }

  function goTo(gal, idx) {
    var n = +gal.getAttribute("data-n");
    idx = Math.max(0, Math.min(n - 1, idx));
    gal.setAttribute("data-i", idx);
    /* اسلاید ۱ چپ‌ترین است؛ ترک به چپ می‌رود (−) */
    gal.querySelector(".p-track").style.transform = "translateX(" + -idx * 100 + "%)";
    var cur = gal.querySelector(".p-count .cur");
    if (cur) cur.textContent = faNum(idx + 1);
    var dots = gal.querySelectorAll(".p-dots i");
    dots.forEach(function (d, i) { d.classList.toggle("on", i === idx); });
    /* عکس عوض شد: زوم ریست و مرجع عکسِ فعلی به‌روز شود */
    resetZoom(gal);
    var slides = gal.querySelectorAll(".p-slide");
    gal._zimg = slides[idx] ? slides[idx].querySelector("img") : null;
  }

  /* ===== زوم (فقط نمای بزرگ) ===== */
  function resetZoom(gal) {
    if (!gal._canZoom) return;
    gal._z = 1; gal._zx = 0; gal._zy = 0;
    if (gal._zimg) gal._zimg.style.transform = "";
    gal.classList.remove("zoomed");
  }

  /* حد جابه‌جایی عکسِ زوم‌شده تا از کادر بیرون نرود */
  function clampPan(gal) {
    var img = gal._zimg;
    if (!img) { gal._zx = 0; gal._zy = 0; return; }
    var slide = img.closest(".p-slide");
    var W = slide.clientWidth, H = slide.clientHeight;
    var nw = img.naturalWidth || W, nh = img.naturalHeight || H;
    var fit = Math.min(W / nw, H / nh); /* object-fit:contain */
    var mx = Math.max(0, (nw * fit * gal._z - W) / 2);
    var my = Math.max(0, (nh * fit * gal._z - H) / 2);
    gal._zx = Math.max(-mx, Math.min(mx, gal._zx || 0));
    gal._zy = Math.max(-my, Math.min(my, gal._zy || 0));
  }

  function applyZoom(gal) {
    var img = gal._zimg;
    if (!img) return;
    if ((gal._z || 1) > 1.01) {
      img.style.transform = "translate(" + (gal._zx || 0) + "px," + (gal._zy || 0) + "px) scale(" + gal._z + ")";
      gal.classList.add("zoomed");
    } else {
      img.style.transform = "";
      gal.classList.remove("zoomed");
    }
  }

  /* زوم به اندازه z2 طوری که نقطه (sx,sy) — نسبت به مرکز کادر — سرِ جای خودش بماند */
  function zoomAt(gal, z2, sx, sy) {
    var z1 = gal._z || 1;
    z2 = Math.max(1, Math.min(4, z2));
    if (Math.abs(z1 - z2) < 0.001) { applyZoom(gal); return; }
    gal._zx = (gal._zx || 0) + (z1 - z2) * (sx - (gal._zx || 0)) / z1;
    gal._zy = (gal._zy || 0) + (z1 - z2) * (sy - (gal._zy || 0)) / z1;
    gal._z = z2;
    clampPan(gal);
    applyZoom(gal);
  }

  /* اسکرول موس و دابل‌کلیک = زوم؛ دابل‌تپ و پینچ داخل bindDrag */
  function bindZoom(gal) {
    gal._canZoom = true;
    gal.addEventListener("wheel", function (e) {
      e.preventDefault();
      var r = gal.getBoundingClientRect();
      zoomAt(gal, (gal._z || 1) * Math.exp(-e.deltaY * 0.0018),
        e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    }, { passive: false });
    gal.addEventListener("dblclick", function (e) {
      e.preventDefault();
      if (Date.now() - (gal._tapZoomT || 0) < 600) return; /* دابل‌تپ لمسی همین حالا زوم کرده است */
      var r = gal.getBoundingClientRect();
      zoomAt(gal, (gal._z || 1) > 1 ? 1 : 2.5,
        e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    });
  }

  /* درگ با موس + سوایپ لمسی (آستانه ۴۰px) — کارت و نمای بزرگ هر دو همین را دارند.
     در نمای بزرگ وقتی عکس زوم شده باشد، همین درگ آن را جابه‌جا می‌کند و پینچ زوم می‌کند.
     جهت استاندارد: کشیدن به چپ = عکس بعدی. */
  function bindDrag(gal) {
    var startX = 0, startY = 0, dx = 0, dragging = false;
    var panning = false, panX0 = 0, panY0 = 0;
    var pts = new Map(), pinchStart = 1, pinchZ = 1;
    var lastTapT = 0, lastTapX = 0, lastTapY = 0;

    gal.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".p-nav")) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) { /* پینچ شروع شد */
        dragging = false; panning = false;
        if (!gal._canZoom) return;
        var a = [];
        pts.forEach(function (p) { a.push(p); });
        pinchStart = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) || 1;
        pinchZ = gal._z || 1;
        gal.classList.add("drag");
        try { gal.setPointerCapture(e.pointerId); } catch (_) {}
        return;
      }
      /* دابل‌تپ (لمسی) = زوم/برگرداندن */
      if (gal._canZoom && e.pointerType !== "mouse") {
        var now = Date.now();
        if (now - lastTapT < 320 && Math.hypot(e.clientX - lastTapX, e.clientY - lastTapY) < 28) {
          lastTapT = 0;
          gal._tapZoomT = now; /* تا dblclick ساختگی مرورگر دوباره زوم نکند */
          var r = gal.getBoundingClientRect();
          zoomAt(gal, (gal._z || 1) > 1 ? 1 : 2.5,
            e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
          pts.delete(e.pointerId);
          return;
        }
        lastTapT = now; lastTapX = e.clientX; lastTapY = e.clientY;
      }
      if ((gal._z || 1) > 1) { /* زوم شده: درگ = جابه‌جایی عکس */
        panning = true; panX0 = gal._zx || 0; panY0 = gal._zy || 0;
        startX = e.clientX; startY = e.clientY;
      } else {              /* حالت عادی: درگ = تعویض عکس */
        dragging = true; startX = e.clientX; dx = 0;
      }
      gal.classList.add("drag");
      try { gal.setPointerCapture(e.pointerId); } catch (_) {}
    });

    gal.addEventListener("pointermove", function (e) {
      if (pts.has(e.pointerId)) pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) { /* پینچ: زوم حول وسط دو انگشت */
        if (!gal._canZoom) return;
        var a = [];
        pts.forEach(function (p) { a.push(p); });
        var d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) || 1;
        var r = gal.getBoundingClientRect();
        zoomAt(gal, pinchZ * d / pinchStart,
          (a[0].x + a[1].x) / 2 - (r.left + r.width / 2),
          (a[0].y + a[1].y) / 2 - (r.top + r.height / 2));
        return;
      }
      if (panning) {
        gal._zx = panX0 + (e.clientX - startX);
        gal._zy = panY0 + (e.clientY - startY);
        clampPan(gal); applyZoom(gal);
        return;
      }
      if (!dragging) return;
      dx = e.clientX - startX;
      var idx = +gal.getAttribute("data-i");
      var base = -idx * gal.clientWidth; /* ترک به چپ می‌رود */
      var track = gal.querySelector(".p-track");
      track.style.transition = "none";
      track.style.transform = "translateX(" + (base + dx) + "px)";
    });

    function endDrag(e) {
      if (e && pts.has(e.pointerId)) pts.delete(e.pointerId);
      if (pts.size === 1) { /* پینچ تمام شد، یک انگشت ماند: درگ تازه از همین نقطه */
        var p = null;
        pts.forEach(function (q) { p = q; });
        startX = p.x; startY = p.y;
        if ((gal._z || 1) > 1) { panning = true; panX0 = gal._zx || 0; panY0 = gal._zy || 0; dragging = false; }
        else { dragging = true; dx = 0; panning = false; }
        return;
      }
      if (pts.size > 0) return; /* لمس هنوز ادامه دارد */
      gal.classList.remove("drag");
      var track = gal.querySelector(".p-track");
      if (track) track.style.transition = "";
      if (panning) { panning = false; clampPan(gal); applyZoom(gal); return; }
      if (!dragging) return;
      dragging = false;
      var idx = +gal.getAttribute("data-i");
      /* کشیدن به چپ = عکس بعدی */
      if (dx <= -40) idx++;
      else if (dx >= 40) idx--;
      goTo(gal, idx);
      dx = 0;
    }
    gal.addEventListener("pointerup", endDrag);
    gal.addEventListener("pointercancel", endDrag);
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
      bindDrag(gal);
    });
  }

  /* ===== نمای بزرگ محصول ===== */
  function openProduct(card, i) {
    var p = items[i];
    if (!p || !modal) return;
    lastCard = card;

    modal.querySelector(".pm-title").textContent = p.name || "";
    modal.querySelector(".pm-desc").textContent = p.desc || "";
    var price = modal.querySelector(".pm-price");
    price.textContent = p.price || "";
    price.hidden = !p.price;
    modal.querySelector(".pm-order").href = igLink;

    modal.querySelector(".pm-slot").innerHTML = galleryHTML(p);
    modal.hidden = false;
    document.body.classList.add("pm-open");
    initGalleries(modal);

    /* از همان عکسی که روی کارت دیده می‌شد شروع کنیم + زوم فعال */
    var gal = modal.querySelector("[data-gal]");
    if (gal) {
      bindZoom(gal);
      if (+gal.getAttribute("data-n") < 2) bindDrag(gal); /* عکس تکی هم زوم و جابه‌جایی داشته باشد */
      var old = card.querySelector("[data-gal]");
      goTo(gal, old ? +(old.getAttribute("data-i") || 0) : 0);
    }
    var back = modal.querySelector(".pm-back");
    if (back) back.focus();
  }

  function closeProduct() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("pm-open");
    modal.querySelector(".pm-slot").innerHTML = "";
    if (lastCard && document.contains(lastCard)) lastCard.focus();
    lastCard = null;
  }

  /* کلیک روی کارت → نمای بزرگ (دکمه‌ها، دات و درگ استثنا هستند) */
  function initCards(root) {
    root.querySelectorAll(".product").forEach(function (card) {
      var sx = 0, sy = 0, moved = false;
      card.addEventListener("pointerdown", function (e) {
        sx = e.clientX; sy = e.clientY; moved = false;
      });
      card.addEventListener("pointermove", function (e) {
        if (Math.abs(e.clientX - sx) > 10 || Math.abs(e.clientY - sy) > 10) moved = true;
      });
      card.addEventListener("click", function (e) {
        if (moved) return;                                  /* درگ یا اسکرول بوده، نه کلیک */
        if (e.target.closest(".order-row")) return;         /* لینک سفارش باید خودش کار کند */
        if (e.target.closest(".p-nav") || e.target.closest(".p-dots")) return;
        openProduct(card, +card.getAttribute("data-i"));
      });
      card.addEventListener("keydown", function (e) {
        if (e.key !== "Enter" && e.key !== " ") return;
        if (e.target !== card) return;
        e.preventDefault();
        openProduct(card, +card.getAttribute("data-i"));
      });
    });
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target.closest("[data-pm-close]")) closeProduct();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeProduct();
    });
  }

  Encanto.loadStore().then(function (store) {
    var site = store.site || {};
    Encanto.applyTheme(site);
    Encanto.applyLinks(site);

    igLink = site.instagram || IG_FALLBACK;
    var mini = document.getElementById("miniBrand");
    if (mini && site.brandFa) mini.textContent = site.brandFa + " 🕯️";

    /* بدون سرور (دابل‌کلیک): راهنمای سرور محلی */
    if (location.protocol === "file:") {
      grid.innerHTML = '<p style="text-align:center;color:var(--plum-soft)">برای دیدن محصولات، سایت را با سرور محلی باز کنید:<br><code dir="ltr">python -m http.server 8000</code></p>';
      return;
    }

    var cat = (store.categories || []).find(function (c) { return c.slug === slug; });
    if (!cat) {
      document.getElementById("catTitle").textContent = "دسته پیدا نشد 😕";
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
    items = cat.items || [];
    grid.innerHTML = items.length
      ? items.map(function (p, i) { return productCard(p, i); }).join("")
      : '<p style="text-align:center;color:var(--plum-soft)">هنوز محصولی ثبت نشده است 🌸</p>';
    initGalleries(grid);
    initCards(grid);
  }).catch(function () {
    grid.innerHTML = '<p style="text-align:center;color:var(--plum-soft)">خطا در بارگذاری محصولات — لطفاً صفحه را رفرش کنید.</p>';
  });
})();
