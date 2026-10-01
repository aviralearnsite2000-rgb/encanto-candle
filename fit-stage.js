/* Scale-only: the wrap is centered via translate(-50%,-50%) so the
   card is always dead-centered (equal left/right gaps) on any screen,
   and scaled by JS to touch the top and bottom edges of the viewport. */
(function () {
  var MOBILE = 760, PADX = 0, PADY = 0; /* بدون پد: کارت دقیقاً از بالا تا پایین صفحه کشیده می‌شود */
  var wrap = document.querySelector('body.home .wrap');
  if (!wrap) return;
  function fit() {
    var vw = window.innerWidth || document.documentElement.clientWidth || 1180;
    if (vw <= MOBILE) { wrap.style.transform = 'translate(-50%,-50%)'; return; }
    var vh = window.innerHeight || document.documentElement.clientHeight || 760;
    var s = Math.min((vw - PADX) / 1180, (vh - PADY) / 760);
    if (!(s > 0)) s = 1;
    /* translate وسط‌چین می‌کند، scale اندازه را تنظیم — فاصله چپ و راست همیشه برابر */
    wrap.style.transform = 'translate(-50%,-50%)' + (s === 1 ? '' : ' scale(' + s + ')');
  }
  if (window.addEventListener) {
    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    window.addEventListener('load', fit);
  }
  setTimeout(fit, 100);
  fit();
})();
