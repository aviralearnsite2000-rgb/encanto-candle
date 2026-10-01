/* Encanto cat playing with yarn — inline SVG, vanilla JS.
   Injected into #catPlay; pure decoration (aria-hidden in markup).
   Same pattern as hero-showcase.js. */
(function () {
  var mount = document.getElementById("catPlay");
  if (!mount) return;

  var svg = ""
    + '<svg viewBox="0 0 370 150" aria-hidden="true">'
    + '<ellipse cx="185" cy="142" rx="130" ry="7" fill="#5b1a5e" opacity=".22"/>'
    + '<g class="cat-tail">'
    + '<path d="M74,114 C50,112 36,100 40,84" fill="none" stroke="#5b1a5e" stroke-width="22" stroke-linecap="round"/>'
    + '<path d="M74,114 C50,112 36,100 40,84" fill="none" stroke="#f5a623" stroke-width="14" stroke-linecap="round"/>'
    + '<circle cx="40" cy="84" r="8" fill="#fff" stroke="#5b1a5e" stroke-width="3"/>'
    + "</g>"
    + '<g class="cat-breathe">'
    + '<ellipse cx="160" cy="104" rx="102" ry="44" fill="#f5a623" stroke="#5b1a5e" stroke-width="5"/>'
    + '<path d="M108,68 L108,84 M136,62 L136,80 M164,61 L164,79" stroke="#8a4b12" stroke-width="7" stroke-linecap="round"/>'
    + '<ellipse cx="95" cy="134" rx="20" ry="10" fill="#fff" stroke="#5b1a5e" stroke-width="4"/>'
    + '<ellipse cx="225" cy="134" rx="15" ry="9" fill="#fff" stroke="#5b1a5e" stroke-width="4"/>'
    + '<circle cx="250" cy="94" r="38" fill="#f5a623" stroke="#5b1a5e" stroke-width="5"/>'
    + '<path d="M224,64 L232,34 L254,54 Z" fill="#f5a623" stroke="#5b1a5e" stroke-width="4" stroke-linejoin="round"/>'
    + '<path d="M231,58 L235,42 L247,52 Z" fill="#f78fb0"/>'
    + '<path d="M268,52 L286,32 L292,60 Z" fill="#f5a623" stroke="#5b1a5e" stroke-width="4" stroke-linejoin="round"/>'
    + '<path d="M273,51 L283,39 L286,55 Z" fill="#f78fb0"/>'
    + '<path d="M232,94 q7,6 14,0 M258,94 q7,6 14,0" fill="none" stroke="#5b1a5e" stroke-width="3.5" stroke-linecap="round"/>'
    + '<ellipse cx="253" cy="103" rx="4" ry="3" fill="#5b1a5e"/>'
    + '<path d="M253,106 q-1,5 -7,5 M253,106 q1,5 7,5" fill="none" stroke="#5b1a5e" stroke-width="2.5" stroke-linecap="round"/>'
    + '<path d="M222,100 L206,96 M222,105 L207,106 M284,100 L300,96 M284,105 L299,106" stroke="#5b1a5e" stroke-width="2" stroke-linecap="round" opacity=".7"/>'
    + '<ellipse cx="240" cy="108" rx="6" ry="4" fill="#f78fb0" opacity=".55"/>'
    + '<ellipse cx="266" cy="108" rx="6" ry="4" fill="#f78fb0" opacity=".55"/>'
    + "</g>"
    + '<g class="cat-paw">'
    + '<ellipse cx="268" cy="130" rx="15" ry="10" fill="#fff" stroke="#5b1a5e" stroke-width="4"/>'
    + "</g>"
    + '<g class="yarn-ball">'
    + '<path d="M302,132 C308,130 312,128 316,126" fill="none" stroke="#d96a9b" stroke-width="3" stroke-linecap="round"/>'
    + '<circle cx="326" cy="118" r="19" fill="#f9aecb" stroke="#b04a78" stroke-width="4"/>'
    + '<path d="M310,112 q16,-8 32,2 M309,124 q16,8 33,-3" fill="none" stroke="#d96a9b" stroke-width="2.5" stroke-linecap="round"/>'
    + "</g>"
    + "</svg>";

  mount.innerHTML = svg;
})();
