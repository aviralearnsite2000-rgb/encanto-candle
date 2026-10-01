/* Scale-only: the wrap is already dead-centered in CSS
   (left:50% + top:50% + negative margins), so JS only shrinks it
   to fit the viewport. Center never shifts on wide/tall screens. */
(function () {
  var MOBILE = 760, PADX = 64, PADY = 56;
  var wrap = document.querySelector('body.home .wrap');
  if (!wrap) return;
  function fit() {
    var vw = window.innerWidth || document.documentElement.clientWidth || 1180;
    if (vw <= MOBILE) { wrap.style.transform = ''; return; }
    var vh = window.innerHeight || document.documentElement.clientHeight || 760;
    var s = Math.min((vw - PADX) / 1180, (vh - PADY) / 760);
    if (!(s > 0)) s = 1;
    if (s > 0.95) s = 0.95;
    wrap.style.transform = s === 1 ? '' : 'scale(' + s + ')';
  }
  if (window.addEventListener) {
    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    window.addEventListener('load', fit);
  }
  setTimeout(fit, 100);
  fit();
})();
