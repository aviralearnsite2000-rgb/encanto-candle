/* Encanto — store data + theme (shared) */
window.Encanto = (function () {
  var cache = null;
  function loadStore() {
    if (cache) return Promise.resolve(cache);
    return fetch("data/store.json", { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error("store not found"); return r.json(); })
      .then(function (s) { cache = s; return s; });
  }
  function applyTheme(site) {
    site = site || {};
    var t = site.theme || {};
    var root = document.documentElement.style;
    var map = { bg: "--bg", pinkLight: "--pink-100", pink: "--pink-300", rose: "--rose", roseDeep: "--rose-deep", plum: "--plum", plumSoft: "--plum-soft" };
    Object.keys(map).forEach(function (k) { if (t[k]) root.setProperty(map[k], t[k]); });
    if (site.bgImage) { root.setProperty("--bg-photo", 'url("' + site.bgImage + '") center/cover no-repeat'); }
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function igHandle(url) {
    try { var parts = String(url).split("/").filter(Boolean); return "@" + parts[parts.length - 1]; }
    catch (e) { return "@encanto._candle"; }
  }
  function applyLinks(site) {
    if (!site) return;
    if (site.instagram) {
      document.querySelectorAll("a.ig-link").forEach(function (a) { a.href = site.instagram; a.textContent = igHandle(site.instagram); });
    }
    if (site.footer) {
      document.querySelectorAll(".footer-note").forEach(function (el) { el.textContent = site.footer; });
    }
  }
  return { loadStore: loadStore, applyTheme: applyTheme, applyLinks: applyLinks, igHandle: igHandle, esc: esc };
})();
