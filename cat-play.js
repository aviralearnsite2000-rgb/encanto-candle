/* Encanto playful cat - auto-extracted from Cat_pet.html, no visual changes.
   SVG injected into #catPlay (zero-height overlay on top edge of cards).
   Pure decoration: pointer-events:none, aria-hidden. ASCII only. */
(function () {
  var mount = document.getElementById("catPlay");
  if (!mount) return;
  mount.innerHTML = (
    '<svg id="playful-cat" viewBox="92 214 520 229" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '  <defs>' +
    '    <clipPath id="yarn-clip"><circle r="21"></circle></clipPath>' +
    '    <clipPath id="body-clip"><path d="M200 441 C196 395 210 330 255 295 C285 273 320 264 345 266 C372 268 392 280 405 292 C428 290 468 292 488 312 C503 330 506 360 504 392 C503 420 495 438 478 441 Z"></path></clipPath>' +
    '    <path id="heart-shape" d="M0 6 C-9 -1 -9 -9 -4 -10 C-1 -11 0 -8 0 -6 C0 -8 1 -11 4 -10 C9 -9 9 -1 0 6Z"></path>' +
    '  </defs>' +
    '  <g class="cat-art">' +
    '    <ellipse id="yarn-shadow" cx="568" cy="441" rx="20" ry="3.5" fill="var(--cat-outline)" opacity=".3"></ellipse>' +
    '    <path d="M104 441.5 L534 441.5" stroke="var(--cat-outline)" stroke-width="5" stroke-linecap="round"></path>' +
    '    <g id="cat">' +
    '      <g id="cat-swat-paw">' +
    '        <path d="M398 420 L468 420 C481 420 489 426 489 431 C489 437 482 439 474 439 L398 439 Z" fill="#F4AB1F" stroke="var(--cat-outline)" stroke-width="5" stroke-linejoin="round"></path>' +
    '        <path d="M455 422 C470 420 487 423 489 431 C489 437 482 439 474 439 L455 439 C449 434 449 425 455 422Z" fill="#FFFFFF" stroke="var(--cat-outline)" stroke-width="4" stroke-linejoin="round"></path>' +
    '        <path d="M470 432 L470 437 M479 431 L479 436" stroke="var(--cat-outline)" stroke-width="2.2" stroke-linecap="round" opacity=".5"></path>' +
    '      </g>' +
    '      <g id="cat-tail" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
    '        <path id="tail-line" d="M236 418 C205 412 175 404 147 406 C123 408 110 417 112 426" stroke="var(--cat-outline)" stroke-width="32"></path>' +
    '        <path d="M236 418 C205 412 175 404 147 406 C123 408 110 417 112 426" stroke="#F4AB1F" stroke-width="22"></path>' +
    '        <path d="M150 406 C125 407 110 417 112 426" stroke="#FFFFFF" stroke-width="22"></path>' +
    '        <path d="M200 404 l-4 10 M180 401 l-3 10" stroke="#BE650C" stroke-width="5"></path>' +
    '      </g>' +
    '      <g id="cat-ear-left">' +
    '        <path d="M404 304 C409 284 415 270 422 258 C433 267 444 282 451 304 Z" fill="#F4AB1F" stroke="var(--cat-outline)" stroke-width="6" stroke-linejoin="round"></path>' +
    '        <path d="M414 294 C417 284 420 276 423 270 C430 277 436 286 440 296 Z" fill="#F61F80"></path>' +
    '      </g>' +
    '      <g id="cat-ear-right">' +
    '        <path d="M460 304 C470 289 483 276 497 266 C501 283 501 300 497 320 Z" fill="#F4AB1F" stroke="var(--cat-outline)" stroke-width="6" stroke-linejoin="round"></path>' +
    '        <path d="M470 298 C477 289 485 282 492 278 C494 289 494 300 491 311 Z" fill="#F61F80"></path>' +
    '      </g>' +
    '      <g id="cat-body">' +
    '        <path d="M200 441 C196 395 210 330 255 295 C285 273 320 264 345 266 C372 268 392 280 405 292 C428 290 468 292 488 312 C503 330 506 360 504 392 C503 420 495 438 478 441 Z" fill="#F4AB1F"></path>' +
    '        <g clip-path="url(#body-clip)">' +
    '          <path d="M240 300 C295 264 360 260 398 286" fill="none" stroke="#FADDA5" stroke-width="10" opacity=".8"></path>' +
    '          <path d="M210 330 C225 332 238 338 250 346 L246 320 Z" fill="#BE650C"></path>' +
    '          <path d="M252 290 C258 305 266 318 280 334 L284 285 Z" fill="#BE650C"></path>' +
    '          <path d="M314 270 C314 286 316 300 318 314 C326 300 334 285 342 270 Z" fill="#BE650C"></path>' +
    '          <path d="M202 440 C202 425 210 415 228 412 C260 408 285 420 300 440 Z" fill="#DE9416"></path>' +
    '        </g>' +
    '        <path d="M200 440 C196 395 210 330 255 295 C285 273 320 264 345 266 C372 268 392 280 405 292 C428 290 468 292 488 312 C503 330 506 360 504 392 C503 420 495 438 478 440" fill="none" stroke="var(--cat-outline)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"></path>' +
    '        <path d="M168 441 C160 432 162 418 176 412 C190 406 210 406 222 414 C230 420 230 434 224 441 Z" fill="#FFFFFF"></path>' +
    '        <path d="M168 441 C160 432 162 418 176 412 C190 406 210 406 222 414 C230 420 230 434 224 441" fill="none" stroke="var(--cat-outline)" stroke-width="5" stroke-linecap="round"></path>' +
    '        <path d="M182 432 l0 7 M194 430 l0 9" stroke="var(--cat-outline)" stroke-width="2.2" stroke-linecap="round" opacity=".5"></path>' +
    '        <path d="M372 383 C338 386 302 394 288 412 C279 426 284 440 304 440 L304 441 L380 441 Z" fill="#F4AB1F"></path>' +
    '        <path d="M319 391 C302 397 290 405 286 417 C282 431 290 441 304 441 L324 441 C318 426 316 406 319 391Z" fill="#FFFFFF"></path>' +
    '        <path d="M372 383 C338 386 302 394 288 412 C279 426 284 440 304 440" fill="none" stroke="var(--cat-outline)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
    '        <path d="M319 393 C316 408 317 424 323 439" fill="none" stroke="var(--cat-outline)" stroke-width="3.5" stroke-linecap="round"></path>' +
    '        <path d="M298 428 l0 9 M309 426 l0 11" stroke="var(--cat-outline)" stroke-width="2.2" stroke-linecap="round" opacity=".5"></path>' +
    '        <path d="M166 441.5 L482 441.5" stroke="var(--cat-outline)" stroke-width="5" stroke-linecap="round"></path>' +
    '      </g>' +
    '      <g id="cat-face" stroke-linecap="round" stroke-linejoin="round">' +
    '        <ellipse cx="449" cy="415" rx="11" ry="8.5" fill="#F6E8D9"></ellipse>' +
    '        <ellipse cx="465" cy="415" rx="11" ry="8.5" fill="#F6E8D9"></ellipse>' +
    '        <path d="M451 405 L463 405 C463 410 459 413 457 413 C455 413 451 410 451 405Z" fill="var(--cat-outline)"></path>' +
    '        <path d="M457 413 L457 417 M447 417 C451 421 455 420 457 417 C459 420 463 421 467 417" fill="none" stroke="var(--cat-outline)" stroke-width="2.4"></path>' +
    '        <path d="M436 406 L418 402 M436 411 L416 412 M437 416 L420 422 M478 406 L496 402 M478 411 L498 412 M477 416 L494 422" fill="none" stroke="var(--cat-outline)" stroke-width="2.2"></path>' +
    '        <g id="cat-blush" opacity="0">' +
    '          <ellipse cx="424" cy="398" rx="8" ry="5" fill="#F78FB0"></ellipse>' +
    '          <ellipse cx="489" cy="398" rx="7" ry="5" fill="#F78FB0"></ellipse>' +
    '        </g>' +
    '        <g id="cat-eyes-closed" fill="none" stroke="var(--cat-outline)" stroke-width="3.2">' +
    '          <path id="eye-closed-L" d="M429 386 C433 381 441 381 446 385"></path>' +
    '          <path id="eye-closed-R" d="M466 385 C471 381 479 381 483 386"></path>' +
    '        </g>' +
    '        <g id="cat-eyes-open">' +
    '          <g id="eye-open-L" opacity="0"><g id="look-L">' +
    '            <ellipse cx="438" cy="385" rx="6.5" ry="8" fill="var(--cat-outline)"></ellipse>' +
    '            <circle cx="440" cy="382" r="2.3" fill="#FFFFFF"></circle>' +
    '          </g></g>' +
    '          <g id="eye-open-R" opacity="0"><g id="look-R">' +
    '            <ellipse cx="474" cy="385" rx="6.5" ry="8" fill="var(--cat-outline)"></ellipse>' +
    '            <circle cx="476" cy="382" r="2.3" fill="#FFFFFF"></circle>' +
    '          </g></g>' +
    '        </g>' +
    '        <g id="cat-mouth-open" opacity="0">' +
    '          <ellipse cx="457" cy="424" rx="7" ry="9" fill="var(--cat-outline)"></ellipse>' +
    '          <ellipse cx="457" cy="429" rx="4.6" ry="3.2" fill="#F78FB0"></ellipse>' +
    '        </g>' +
    '      </g>' +
    '    </g>' +
    '    <g id="yarn-ball">' +
    '      <g id="yarn-thread">' +
    '        <path d="M562 438 C552 446 540 436 532 441 C526 445 530 450 536 446" fill="none" stroke="#D9709A" stroke-width="3.5" stroke-linecap="round"></path>' +
    '      </g>' +
    '      <g id="yarn-body">' +
    '        <g id="yarn-spin">' +
    '          <g transform="translate(568 420)">' +
    '            <circle r="21" fill="#F9AECB"></circle>' +
    '            <g clip-path="url(#yarn-clip)" fill="none" stroke="#D9709A" stroke-width="2.6" stroke-linecap="round">' +
    '              <path d="M-24 -10 Q0 0 24 -16"></path><path d="M-24 0 Q0 10 24 -6"></path><path d="M-24 10 Q0 19 24 5"></path>' +
    '              <path d="M-12 -24 Q-3 0 -10 24"></path><path d="M2 -24 Q11 0 4 24"></path>' +
    '            </g>' +
    '            <circle r="21" fill="none" stroke="var(--cat-outline)" stroke-width="5"></circle>' +
    '          </g>' +
    '        </g>' +
    '        <ellipse cx="560" cy="411" rx="5.5" ry="3.2" fill="#FFFFFF" opacity=".6" transform="rotate(-35 560 411)"></ellipse>' +
    '      </g>' +
    '    </g>' +
    '    <g id="cat-zzz" fill="var(--cat-outline)" font-family="system-ui, -apple-system, \'Segoe UI\', sans-serif" font-weight="800" direction="ltr" pointer-events="none">' +
    '      <text id="cat-z1" font-size="17" opacity="0">z</text>' +
    '      <text id="cat-z2" font-size="17" opacity="0">z</text>' +
    '      <text id="cat-z3" font-size="17" opacity="0">z</text>' +
    '    </g>' +
    '    <g id="cat-puff" pointer-events="none" fill="#FFFFFF" stroke="var(--cat-outline)" stroke-width="1.5">' +
    '      <circle id="cat-p1" r="6" opacity="0"></circle><circle id="cat-p2" r="4.5" opacity="0"></circle><circle id="cat-p3" r="3.5" opacity="0"></circle>' +
    '    </g>' +
    '    <g id="cat-bubble" opacity="0" pointer-events="none">' +
    '      <path d="M-30 -18 H30 A10 10 0 0 1 40 -8 V8 A10 10 0 0 1 30 18 H-14 L-26 30 L-22 18 H-30 A10 10 0 0 1 -40 8 V-8 A10 10 0 0 1 -30 -18Z" fill="#FFFFFF" stroke="var(--cat-outline)" stroke-width="3" stroke-linejoin="round"></path>' +
    '      <text y="6" text-anchor="middle" font-size="17" font-weight="800" fill="var(--cat-outline)" font-family="system-ui, Tahoma, sans-serif">&#1605;&#1740;&#1608;!</text>' +
    '    </g>' +
    '    <g id="cat-fly" opacity="0" pointer-events="none">' +
    '      <g id="cat-fly-wings">' +
    '        <ellipse cx="-2.6" cy="-3.5" rx="2.8" ry="4.4" fill="#FFFFFF" stroke="var(--cat-outline)" stroke-width="1" opacity=".9" transform="rotate(-28)"></ellipse>' +
    '        <ellipse cx="2.6" cy="-3.5" rx="2.8" ry="4.4" fill="#FFFFFF" stroke="var(--cat-outline)" stroke-width="1" opacity=".9" transform="rotate(28)"></ellipse>' +
    '      </g>' +
    '      <circle r="2.8" fill="var(--cat-outline)"></circle>' +
    '    </g>' +
    '    <g id="cat-hearts"></g>' +
    '  </g>' +
    '</svg>'
  );
  var svg = mount.querySelector("svg");
  if (!svg) return;
  const $ = id => svg.getElementById ? svg.getElementById(id) : document.getElementById(id);
  const el = {
    cat: $('cat'), tail: $('cat-tail'), earL: $('cat-ear-left'), earR: $('cat-ear-right'),
    face: $('cat-face'), eyes: $('cat-eyes-closed'), eyesOpen: $('cat-eyes-open'), blush: $('cat-blush'),
    paw: $('cat-swat-paw'), ball: $('yarn-ball'), ballBody: $('yarn-body'), spin: $('yarn-spin'),
    thread: $('yarn-thread'), ballShadow: $('yarn-shadow'), hearts: $('cat-hearts'),
    eyeCL: $('eye-closed-L'), eyeCR: $('eye-closed-R'), eyeOL: $('eye-open-L'), eyeOR: $('eye-open-R'),
    lookL: $('look-L'), lookR: $('look-R'), mouth: $('cat-mouth-open'),
    z: [$('cat-z1'), $('cat-z2'), $('cat-z3')], puff: [$('cat-p1'), $('cat-p2'), $('cat-p3')], bubble: $('cat-bubble'), fly: $('cat-fly'), wings: $('cat-fly-wings')
  };
  /* accessory */
  const PIVOT = {
    cat: [312, 442], tail: [200, 396], earL: [428, 300], earR: [480, 306],
    eyes: [456, 386], ball: [568, 441], spin: [568, 420], thread: [562, 438]
  };
  const CYCLE = 2.8;
  const HIT = 0.30;
  /* accessory */
  const ease = {
    io: t => t * t * (3 - 2 * t),
    out: t => 1 - (1 - t) * (1 - t),
    in: t => t * t,
    lin: t => t
  };
  function track(keys, t) {
    if (t <= keys[0][0]) return keys[0][1];
    for (let i = 0; i < keys.length - 1; i++) {
      const a = keys[i], b = keys[i + 1];
      if (t <= b[0]) return a[1] + (b[1] - a[1]) * (ease[a[2] || 'io'])((t - a[0]) / (b[0] - a[0]));
    }
    return keys[keys.length - 1][1];
  }
  const lerp = (a, b, w) => a + (b - a) * w;
  const TAU = Math.PI * 2;
  /* accessory */
  const K = {
    pawX:  [[0,0],[.18,0],[.26,-6,'in'],[HIT,70],[.36,66],[.54,0],[1,0]],
    pawY:  [[0,0],[.26,0,'in'],[HIT,-5],[.36,-3],[.54,0],[1,0]],
    pawR:  [[0,0],[.18,0],[.26,6,'in'],[HIT,-10],[.36,-6],[.54,0],[1,0]],
    catX:  [[0,0],[.16,0],[.27,-3,'in'],[HIT,4],[.44,0],[1,0]],
    catSY: [[0,1],[.16,1],[.27,.982,'in'],[HIT,1.015],[.44,1],[1,1]],
    wig:   [[0,0],[.12,0],[.16,1],[.22,-1],[.26,0],[1,0]],
    faceX: [[0,0],[.18,0],[.27,1],[HIT,3],[.46,2],[.62,3],[.78,0],[1,0]],
    faceY: [[0,0],[.18,0],[.27,1],[HIT,0],[.46,-4],[.62,1],[.78,0],[1,0]],
    earL:  [[0,0],[.26,0],[.31,-8],[.37,2.5],[.44,0],[.62,0],[.66,-5],[.72,0],[1,0]],
    earR:  [[0,0],[.28,0],[.33,8],[.40,-2.5],[.46,0],[.60,0],[.64,6],[.70,0],[.86,0],[.89,-4],[.92,0],[1,0]],
    squint:[[0,1],[.26,1],[.31,.62],[.40,.62],[.48,1],[1,1]],
    tailK: [[0,0],[.14,0],[.22,-3.5],[HIT,2.5],[.40,0],[1,0]],
    ballX: [[0,0],[HIT,0,'out'],[.46,16,'in'],[.62,9,'out'],[.68,4,'in'],[.74,0],[1,0]],
    ballY: [[0,0],[HIT,0,'out'],[.46,-1,'in'],[.62,0,'out'],[.68,-.18,'in'],[.74,0],[1,0]],
    ballR: [[0,0],[HIT,0,'out'],[.62,300,'out'],[.74,360],[1,360]],
    bSX:   [[0,1],[.29,1],[.31,.82],[.36,.94],[.44,1],[.60,1],[.62,1.18],[.66,1],[.72,1],[.74,1.06],[.78,1],[1,1]],
    bSY:   [[0,1],[.29,1],[.31,1.12],[.36,1.06],[.44,1],[.60,1],[.62,.82],[.66,1],[.72,1],[.74,.94],[.78,1],[1,1]],
    thread:[[0,0],[HIT,0],[.38,28],[.50,-14],[.62,10],[.70,-6],[.80,0],[1,0]]
  };
  const APEX = [92, 118, 78];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  /* accessory */
  let last = 0, clock = 0, phase = 0, round = 0;
  let w = 0, petUntil = 0, pressed = false;
  let hopT = -1;
  let taps = [];
  let nextHeart = 0;
  /* accessory */
  const env = (t, a = .12, b = .88) => track([[0,0],[a,1],[b,1],[1,0]], t);
  const ACTIONS = {
    yawn: { dur: 2.6, run(t, v, o) {
      const m = env(t, .22, .78);
      v.faceY -= 3.5 * m; v.earL -= 8 * m; v.earR += 8 * m;
      v.squint = lerp(v.squint, .3, m); v.catSY *= 1 + .035 * m;
      o.mouth = track([[0,0],[.18,.35],[.36,1],[.62,1],[.82,0],[1,0]], t);
      v.tail += 5 * Math.sin(TAU * t) * m;
    }},
    nap: { dur: 6.5, run(t, v, o) {
      const m = env(t, .1, .9);
      v.faceY += 3 * m; v.earL += 5 * m; v.earR -= 5 * m;
      v.squint = lerp(v.squint, .75, m); v.tail *= 1 - .8 * m;
      o.zzz = m; o.breath = m;
    }},
    look: { dur: 3.4, run(t, v, o) {
      const m = env(t, .1, .9);
      o.openL = o.openR = m;
      o.lx = track([[0,0],[.14,-3],[.4,-3],[.56,3.2],[.82,3.2],[.94,0],[1,0]], t);
      o.ly = track([[0,0],[.14,-1],[.4,-1.5],[.56,.8],[.82,.8],[1,0]], t);
      v.faceX += o.lx * .7; v.earL += o.lx * 1.6; v.earR += o.lx * 1.6;
    }},
    wink: { dur: 2, run(t, v, o) {
      const m = env(t, .14, .86);
      const shut = track([[0,0],[.38,0],[.46,1],[.62,1],[.7,0],[1,0]], t);
      o.openL = m; o.openR = m * (1 - shut);
      v.blush = Math.max(v.blush, .9 * m); v.faceY -= 1.5 * m;
      v.earR += 6 * shut;
    }},
    wiggle: { dur: 2.6, run(t, v, o) {
      const m = env(t, .1, .86);
      v.tail += 13 * Math.sin(TAU * t * 4) * m;
      v.catX += 1.5 * Math.sin(TAU * t * 6) * m;
      v.earL += 3.5 * Math.sin(TAU * t * 3) * m; v.earR -= 3.5 * Math.sin(TAU * t * 3 + 1) * m;
      o.openL = o.openR = m; v.faceY -= 1 * m;
    }},
    fly: { dur: 5.6, run(t, v, o) {
      const m = env(t, .06, .94);
      const wob = 1 - track([[0,0],[.68,0],[.72,1],[.8,1],[.86,0],[1,0]], t);
      o.fx = track([[0,650],[.15,548],[.3,506],[.45,562],[.6,522],[.72,534],[.79,534],[1,670]], t) + 2.5 * Math.sin(TAU * t * 7) * wob;
      o.fy = track([[0,270],[.15,342],[.3,286],[.45,360],[.6,348],[.72,426],[.79,426],[.85,378,'out'],[1,235]], t) + 3.5 * Math.sin(TAU * t * 9) * wob;
      o.fly = track([[0,0],[.03,1],[.95,1],[1,0]], t);
      o.openL = o.openR = m;
      o.lx = Math.max(-3.5, Math.min(3.5, (o.fx - 456) / 30)) * m;
      o.ly = Math.max(-3, Math.min(3, (o.fy - 386) / 18)) * m;
      v.faceX += o.lx * .5; v.faceY += o.ly * .4;
      v.earR += 6 * Math.max(0, 1 - Math.hypot(o.fx - 494, o.fy - 282) / 28) * Math.sin(TAU * clock * 6);
      v.pawX += track([[0,0],[.71,0],[.75,-6,'in'],[.79,48],[.86,44],[.97,0],[1,0]], t);
      v.pawY += track([[0,0],[.75,0],[.79,-4],[.86,-2],[.97,0],[1,0]], t);
      v.pawR += track([[0,0],[.71,0],[.75,5,'in'],[.79,-8],[.86,-5],[.97,0],[1,0]], t);
      v.catX += track([[0,0],[.68,0],[.75,-3,'in'],[.79,4],[.9,0],[1,0]], t);
      v.tail += track([[0,0],[.6,0],[.72,-5],[.79,4],[.9,0],[1,0]], t);
    }}
  };
  ACTIONS.stretch = { dur: 3, run(t, v, o) {
    const m = env(t, .25, .72);
    o.stretch = m; v.squint = lerp(v.squint, .3, m);
    v.earL -= 7 * m; v.earR += 7 * m; v.faceX += 3 * m; v.faceY -= 2 * m;
    v.pawX += 30 * m; v.pawY -= 1 * m;
    v.tail -= 9 * m + 2 * Math.sin(TAU * t * 2) * m;
    o.mouth = .45 * track([[0,0],[.3,0],[.45,1],[.65,1],[.8,0],[1,0]], t);
  }};
  ACTIONS.sneeze = { dur: 2.2, run(t, v, o) {
    const up = track([[0,0],[.15,.4],[.25,.2],[.42,1,'in'],[.48,0,'out'],[1,0]], t);
    const kick = track([[0,0],[.44,0],[.48,1,'out'],[.62,.3],[.8,0],[1,0]], t);
    v.faceY += -4 * up + 5 * kick; v.faceX += 3 * kick;
    v.squint = lerp(v.squint, .25, Math.max(up, kick));
    o.mouth = .5 * up;
    v.earL += -6 * up + 8 * kick; v.earR += 6 * up - 8 * kick;
    v.catX -= 3 * kick; v.catSY *= 1 - .03 * kick;
    v.tail += 8 * kick * Math.sin(TAU * t * 5);
    o.puff = t > .44 ? (t - .44) / .56 : 0;
  }};
  ACTIONS.meow = { dur: 2.4, run(t, v, o) {
    const m = env(t, .1, .88);
    o.openL = o.openR = m;
    o.mouth = .7 * track([[0,0],[.15,0],[.25,1],[.4,.2],[.5,1],[.65,0],[1,0]], t);
    o.bubble = track([[0,0],[.18,0],[.3,1,'out'],[.8,1],[.92,0],[1,0]], t);
    v.faceY -= 2 * m; v.earL -= 2 * m; v.earR += 2 * m;
    v.tail += 4 * Math.sin(TAU * t * 2) * m;
  }};
  let act = null, lastAct = '';
  const NAMES = Object.keys(ACTIONS);
  const DEMO = /demo/.test(location.search);
  let bag = [];
  function nextName() {
    if (!bag.length) {
      bag = NAMES.slice();
      for (let i = bag.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [bag[i], bag[j]] = [bag[j], bag[i]]; }
      if (bag[0] === lastAct) bag.push(bag.shift());
    }
    return bag.shift();
  }
  /* accessory */
  const ORDER = ['look', 'wink', 'yawn', 'stretch', 'wiggle', 'meow', 'sneeze', 'fly', 'nap'];
  let seq = 0;
  function maybeAct() {
    let n;
    if (seq < ORDER.length) n = ORDER[seq++];
    else { if (!DEMO && Math.random() > 0.7) return; n = nextName(); }
    lastAct = n; act = { def: ACTIONS[n], t0: clock };
  }
  const T = (node, s) => node.setAttribute('transform', s);
  const rot = (a, p) => `rotate(${a.toFixed(2)} ${p[0]} ${p[1]})`;
  const scl = (sx, sy, p) => `translate(${p[0]} ${p[1]}) scale(${sx.toFixed(4)} ${sy.toFixed(4)}) translate(${-p[0]} ${-p[1]})`;
  function frame(now) {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now; clock += dt;
    /* accessory */
    const petting = pressed || clock < petUntil;
    w += ((petting ? 1 : 0) - w) * (1 - Math.exp(-dt / 0.16));
    /* accessory */
    if (act && clock - act.t0 >= act.def.dur) act = null;
    let next = act ? phase : phase + dt / CYCLE;
    if (petting && phase < HIT && next > 0.14) next = Math.max(phase, Math.min(next, 0.14));
    if (petting && phase < HIT && phase > 0.14) next = phase + (0.14 - phase) * Math.min(1, dt * 6);
    if (next >= 1) { next -= 1; round++; if (!petting && hopT < 0) maybeAct(); }
    phase = next;
    const p = phase;
    const apex = APEX[round % APEX.length];
    /* accessory */
    const breath = 0.5 - 0.5 * Math.cos(TAU * clock / 2.4);
    const play = {
      catX: track(K.catX, p) + track(K.wig, p) * 1.5,
      catSY: track(K.catSY, p),
      tail: 2.5 * Math.sin(TAU * clock / 1.4) + track(K.tailK, p),
      earL: track(K.earL, p), earR: track(K.earR, p),
      faceX: track(K.faceX, p), faceY: track(K.faceY, p),
      squint: track(K.squint, p), blush: 0,
      pawX: track(K.pawX, p), pawY: track(K.pawY, p), pawR: track(K.pawR, p)
    };
    /* accessory */
    const pet = {
      catX: 0.55 * Math.sin(TAU * clock * 9),
      catSY: 0.975 + 0.008 * Math.sin(TAU * clock * 1.6),
      tail: 4.5 * Math.sin(TAU * clock * 1.3),
      earL: -8 + 1.2 * Math.sin(TAU * clock * 2.2), earR: 8 - 1.2 * Math.sin(TAU * clock * 2.2 + 1),
      faceX: -1.5, faceY: 2.5 + Math.sin(TAU * clock * 1.6),
      squint: 0.72, blush: 1,
      pawX: 0, pawY: 0, pawR: 0
    };
    /* accessory */
    const o = { openL: 0, openR: 0, lx: 0, ly: 0, mouth: 0, zzz: 0, breath: 0, stretch: 0, puff: 0, bubble: 0, fly: 0, fx: 650, fy: 270 };
    if (act) act.def.run(Math.min(1, (clock - act.t0) / act.def.dur), play, o);
    const calm = 1 - w;
    o.openL *= calm; o.openR *= calm; o.lx *= calm; o.ly *= calm; o.mouth *= calm; o.zzz *= calm; o.breath *= calm; o.stretch *= calm; o.bubble *= calm;
    const v = {};
    for (const k in play) v[k] = lerp(play[k], pet[k], w);
    /* accessory */
    let hopY = 0, hopS = 1, open = 0;
    if (hopT >= 0) {
      const h = (clock - hopT) / 0.95;
      if (h >= 1) hopT = -1;
      else {
        hopY = track([[0,0],[.14,4,'out'],[.42,-22,'in'],[.68,0,'out'],[.78,2],[1,0]], h);
        hopS = track([[0,1],[.14,.94],[.3,1.06],[.6,1],[.7,.95],[.82,1],[1,1]], h);
        open = track([[0,0],[.1,1],[.75,1],[.9,0],[1,0]], h);
        v.earL += track([[0,0],[.15,5],[.7,5],[1,0]], h);
        v.earR -= track([[0,0],[.15,5],[.7,5],[1,0]], h);
        v.tail += track([[0,0],[.2,-4],[.6,3],[1,0]], h);
      }
    }
    /* accessory */
    const sy = v.catSY * (1 + 0.018 * (1 + 1.4 * o.breath) * breath) * hopS * (1 - 0.05 * o.stretch);
    const sx = (1 + 0.006 * breath) * (2 - hopS) * (1 + 0.06 * o.stretch);
    T(el.cat, `translate(${v.catX.toFixed(2)} ${hopY.toFixed(2)}) ${scl(sx, sy, PIVOT.cat)}`);
    T(el.tail, rot(v.tail, PIVOT.tail));
    T(el.earL, rot(v.earL, PIVOT.earL));
    T(el.earR, rot(v.earR, PIVOT.earR));
    T(el.face, `translate(${v.faceX.toFixed(2)} ${v.faceY.toFixed(2)})`);
    const oL = Math.max(open, o.openL), oR = Math.max(open, o.openR);
    T(el.eyes, scl(1 + (1 - v.squint) * 0.15, v.squint, PIVOT.eyes));
    el.eyeCL.setAttribute('opacity', (1 - oL).toFixed(3));
    el.eyeCR.setAttribute('opacity', (1 - oR).toFixed(3));
    el.eyeOL.setAttribute('opacity', oL.toFixed(3));
    el.eyeOR.setAttribute('opacity', oR.toFixed(3));
    T(el.eyeOL, scl(1, Math.max(.05, oL), [438, 385]));
    T(el.eyeOR, scl(1, Math.max(.05, oR), [474, 385]));
    const look = `translate(${o.lx.toFixed(2)} ${o.ly.toFixed(2)})`;
    T(el.lookL, look); T(el.lookR, look);
    el.mouth.setAttribute('opacity', Math.min(1, o.mouth * 3).toFixed(3));
    T(el.mouth, scl(1, Math.max(.05, o.mouth), [457, 417]));
    /* --- Zzz --- */
    el.z.forEach((z, i) => {
      const q = (clock * 0.45 + i / 3) % 1;
      z.setAttribute('opacity', (o.zzz * Math.sin(Math.PI * q)).toFixed(3));
      z.setAttribute('transform', `translate(${(516 + 20 * q + 3 * Math.sin(TAU * q * 2)).toFixed(1)} ${(340 - 56 * q).toFixed(1)}) scale(${(.6 + .8 * q).toFixed(3)})`);
    });
    /* accessory */
    const fx0 = v.catX + v.faceX, fy0 = hopY + v.faceY;
    el.puff.forEach((c, i) => {
      const q = o.puff, a = [-.5, .1, .7][i];
      c.setAttribute('opacity', q > 0 ? (Math.sin(Math.PI * Math.min(1, q * 1.4)) * .95).toFixed(3) : '0');
      if (q > 0) c.setAttribute('transform', `translate(${(470 + fx0 + Math.cos(a) * 46 * Math.sqrt(q)).toFixed(1)} ${(414 + fy0 + Math.sin(a) * 30 * Math.sqrt(q)).toFixed(1)}) scale(${(.5 + q).toFixed(3)})`);
    });
    el.bubble.setAttribute('opacity', Math.min(1, o.bubble * 1.5).toFixed(3));
    if (o.bubble > 0) T(el.bubble, `translate(${(548 + fx0).toFixed(1)} ${(338 + fy0).toFixed(1)}) scale(${(.6 + .4 * o.bubble).toFixed(3)})`);
    /* accessory */
    el.fly.setAttribute('opacity', o.fly.toFixed(3));
    if (o.fly > 0) {
      T(el.fly, `translate(${o.fx.toFixed(1)} ${o.fy.toFixed(1)}) scale(1.7)`);
      T(el.wings, `scale(1 ${(.35 + .65 * Math.abs(Math.sin(clock * 40))).toFixed(3)})`);
    }
    el.blush.setAttribute('opacity', (v.blush * 0.75).toFixed(3));
    T(el.paw, `translate(${v.pawX.toFixed(2)} ${v.pawY.toFixed(2)}) rotate(${v.pawR.toFixed(2)} 460 432)`);
    /* accessory */
    const bx = track(K.ballX, p), by = track(K.ballY, p) * apex;
    T(el.ball, `translate(${bx.toFixed(2)} ${by.toFixed(2)})`);
    T(el.ballBody, scl(track(K.bSX, p), track(K.bSY, p), PIVOT.ball));
    T(el.spin, rot(track(K.ballR, p), PIVOT.spin));
    T(el.thread, rot(track(K.thread, p), PIVOT.thread));
    const lift = Math.min(1, -by / 120);
    T(el.ballShadow, `translate(${bx.toFixed(2)} 0) ${scl(1 - 0.6 * lift, 1, [568, 441])}`);
    el.ballShadow.setAttribute('opacity', (0.3 * (1 - 0.7 * lift)).toFixed(3));
    /* accessory */
    if (petting && w > 0.5 && clock > nextHeart) { spawnHeart(); nextHeart = clock + 0.42; }
    if (reduce.matches) { running = false; return; }
    requestAnimationFrame(frame);
  }
  function spawnHeart() {
    const NS = 'http://www.w3.org/2000/svg';
    const g = document.createElementNS(NS, 'g');
    const x = 430 + Math.random() * 60, y = 300 + Math.random() * 18;
    g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    const u = document.createElementNS(NS, 'use');
    u.setAttribute('href', '#heart-shape');
    u.setAttribute('class', 'cat-heart');
    u.setAttribute('fill', '#F61F80');
    u.setAttribute('stroke', 'var(--cat-outline)');
    u.setAttribute('stroke-width', '2');
    const dx = (Math.random() - 0.5) * 16;
    u.style.setProperty('--dx1', dx.toFixed(1) + 'px');
    u.style.setProperty('--dx2', (dx * 2.4).toFixed(1) + 'px');
    u.style.setProperty('--r', ((Math.random() - 0.5) * 30).toFixed(0) + 'deg');
    g.appendChild(u); el.hearts.appendChild(g);
    u.addEventListener('animationend', () => g.remove());
  }
  /* accessory */
  function poke() {
    if (reduce.matches) {
      el.blush.setAttribute('opacity', '.75');
      clearTimeout(poke.t); poke.t = setTimeout(() => el.blush.setAttribute('opacity', '0'), 1600);
      return;
    }
    petUntil = clock + 1.5;
    taps = taps.filter(t => clock - t < 1.1); taps.push(clock);
    if (taps.length >= 3 && hopT < 0) { hopT = clock; taps = []; }
  }
  svg.addEventListener('pointerdown', e => { pressed = true; poke(); });
  window.addEventListener('pointerup', () => { if (pressed) { pressed = false; petUntil = clock + 1.2; } });
  window.addEventListener('pointercancel', () => { pressed = false; });
  svg.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); poke(); } });
  let running = false;
  function start() { if (running || reduce.matches) return; running = true; last = 0; requestAnimationFrame(frame); }
  start();
  if (reduce.addEventListener) reduce.addEventListener('change', start);
})();
