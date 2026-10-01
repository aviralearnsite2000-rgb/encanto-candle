/* Encanto hero showcase decorations — inline SVG hearts & sparkles, vanilla JS.
   Images are plain <img> tags in index.html (configurable paths there).
   Decorations scatter around/above the boxes, float + fade on staggered cycles. */
(function () {
  var mount = document.getElementById("heroDeco");
  if (!mount) return;

  var COLORS = ["#f8a9c6", "#ef6ea3", "#c4a8e8", "#f7d774", "#ffffff", "#f472a5"];
  var COUNT = window.innerWidth <= 760 ? 16 : 26;

  var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.9-9.8-9.2C.6 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.1 2.3h4.4C14.9 6.1 16.3 5 18.3 5c3.4 0 5.1 3.6 3.5 6.8C19.5 16.1 12 21 12 21z" fill="COLOR" opacity="OP"/></svg>';
  var STAR4 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1c.8 5.8 3.2 8.2 9 9-5.8.8-8.2 3.2-9 9-.8-5.8-3.2-8.2-9-9 5.8-.8 8.2-3.2 9-9z" fill="COLOR" opacity="OP"/></svg>';
  var TWINKLE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.6 6.2L20 9.6l-6.4 1.4L12 17.2l-1.6-6.2L4 9.6l6.4-1.4z" fill="COLOR" opacity="OP"/><circle cx="18.5" cy="17" r="1.6" fill="COLOR" opacity="OP"/></svg>';

  function pick(arr, i) { return arr[i % arr.length]; }
  function rnd(min, max) { return min + Math.random() * (max - min); }
  function edgePos() {
    // bias toward outer edges + above flowers, keep center clear for products
    var r = Math.random();
    var left;
    if (r < 0.36) left = rnd(0, 20);
    else if (r < 0.72) left = rnd(80, 100);
    else left = rnd(20, 80);
    var top = left > 25 && left < 75 ? rnd(0, 34) : rnd(0, 78);
    return { left: left, top: top };
  }

  var html = "";
  for (var i = 0; i < COUNT; i++) {
    var kind = i % 3; // 0 heart, 1 four-point star, 2 twinkle
    var size = Math.round(rnd(8, 22));
    var p = edgePos();
    var color = pick(COLORS, (i * 5 + 1) % COLORS.length);
    var svg = (kind === 0 ? HEART : kind === 1 ? STAR4 : TWINKLE)
      .split("COLOR").join(color).split("OP").join(kind === 0 ? ".9" : ".95");
    var dur = rnd(4.2, 7.5).toFixed(2);
    var delay = (-rnd(0, 7)).toFixed(2);
    html += '<span class="hero-deco-item" style="left:' + p.left.toFixed(1) +
      '%;top:' + p.top.toFixed(1) + '%;width:' + size + 'px;animation-duration:' +
      dur + 's;animation-delay:' + delay + 's">' + svg + "</span>";
  }
  mount.innerHTML = html;
})();
