/* CIS Year 5 Science Hub: offline support.
   The first time a child opens any page of the hub, this saves every page, picture and tool on the device
   (including units that are hidden for now), plus the fonts and the 3D/map files the tools load from jsDelivr.
   Afterwards the pages work without internet. When the device is online, pages are fetched from the website
   first, so updates reach children automatically. */

var CACHE = "cis-science-2026-11-05a";   // a new name on each publish makes devices re-download everything

// Every file of the site. This list is regenerated on each publish.
var FILES = [
  /* FILES:START */
  "./",
  "adaptation-studio/index.html",
  "adaptation-studio/lib/addons/controls/OrbitControls.js",
  "adaptation-studio/lib/three.module.js",
  "adaptation-studio/photos/arcticfox.jpg",
  "adaptation-studio/photos/camel.jpg",
  "adaptation-studio/photos/deer.jpg",
  "adaptation-studio/photos/elephantear.jpg",
  "adaptation-studio/photos/fennec.jpg",
  "adaptation-studio/photos/frog.jpg",
  "adaptation-studio/photos/hare.jpg",
  "adaptation-studio/photos/hedgehog.jpg",
  "adaptation-studio/photos/jaguar.jpg",
  "adaptation-studio/photos/kapok.jpg",
  "adaptation-studio/photos/oak.jpg",
  "adaptation-studio/photos/owl.jpg",
  "adaptation-studio/photos/polarbear.jpg",
  "adaptation-studio/photos/saguaro.jpg",
  "adaptation-studio/photos/willow.jpg",
  "air-and-water/index.html",
  "balanced-plate/index.html",
  "balanced-plate/pics/plate.svg",
  "digestion-journey/index.html",
  "digestion-journey/pics/body.svg",
  "digestion-journey/pics/mouth.svg",
  "digestion-journey/pics/teeth.svg",
  "earth-seasons/index.html",
  "forces-playground/index.html",
  "forces-playground/pics/boat.svg",
  "forces-playground/pics/book.svg",
  "forces-playground/pics/trolley.svg",
  "hub/logo-horizontal-white.png",
  "hub/mascot-white.svg",
  "hub/mascot.svg",
  "hub/thumbs/adaptation-studio.jpg",
  "hub/thumbs/air-and-water.jpg",
  "hub/thumbs/balanced-plate.jpg",
  "hub/thumbs/digestion-journey.jpg",
  "hub/thumbs/earth-seasons.jpg",
  "hub/thumbs/forces-playground.jpg",
  "hub/thumbs/particle-playground.jpg",
  "hub/thumbs/practice.jpg",
  "hub/thumbs/seed-lab.jpg",
  "index.html",
  "particle-playground/index.html",
  "practice/banks/adaptations.js",
  "practice/banks/air-water.js",
  "practice/banks/diet.js",
  "practice/banks/digestion.js",
  "practice/banks/earth-space.js",
  "practice/banks/forces.js",
  "practice/banks/particles.js",
  "practice/banks/seeds.js",
  "practice/index.html",
  "seed-lab/index.html"
  /* FILES:END */
];

// Files the tools load from other websites (Seasons Explorer's 3D engine and world map).
var REMOTE = [
  "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
  "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js",
  "https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/+esm",
  "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json"
];

// Google Fonts stylesheets the pages use; the font files they point to are saved too.
var FONT_CSS = [
  "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,700;1,400&display=swap"
];

function saveFonts(cache) {
  return Promise.all(FONT_CSS.map(function (url) {
    return fetch(url, { mode: "cors" }).then(function (res) {
      if (!res.ok) return;
      return cache.put(url, res.clone()).then(function () { return res.text(); }).then(function (css) {
        // only the latin and latin-ext font files: enough for English and Slovak
        var files = [];
        css.split("/*").forEach(function (block) {
          if (!/^\s*latin(-ext)?\s*\*\//.test(block)) return;
          var m = block.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/);
          if (m && files.indexOf(m[1]) < 0) files.push(m[1]);
        });
        return Promise.all(files.map(function (f) { return cache.add(new Request(f, { mode: "cors" })).catch(function () {}); }));
      });
    }).catch(function () {});
  }));
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // add files one by one so that one missing file cannot break the rest
      var local = FILES.map(function (f) { return cache.add(new Request(f, { cache: "reload" })).catch(function () {}); });
      var remote = REMOTE.map(function (f) { return cache.add(new Request(f, { mode: "cors" })).catch(function () {}); });
      return Promise.all(local.concat(remote, [saveFonts(cache)])).then(function () {
        return cache.put(new URL("__ready", self.registration.scope).href, new Response("1"));
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.indexOf("cis-science-") === 0 && k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Pages on this website: ask the website first (so updates arrive); if it is slow or offline, use the saved copy. */
function pageRequest(req) {
  return caches.open(CACHE).then(function (cache) {
    var fetched = fetch(req).then(function (res) {
      if (res && res.status === 200) cache.put(req, res.clone());
      return res;
    });
    var wait = new Promise(function (resolve) { setTimeout(function () { resolve(null); }, 3000); });
    return Promise.race([fetched.catch(function () { return null; }), wait]).then(function (res) {
      if (res) return res;
      return cache.match(req, { ignoreSearch: true }).then(function (saved) {
        if (saved) return saved;
        return fetched.catch(function () {
          return req.mode === "navigate" ? cache.match(new URL("index.html", self.registration.scope).href) : Response.error();
        });
      });
    });
  });
}

/* Fonts and the jsDelivr files never change: use the saved copy if there is one, otherwise fetch and save it. */
function otherRequest(req) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(req).then(function (saved) {
      if (saved) return saved;
      return fetch(req).then(function (res) {
        if (res && (res.status === 200 || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      });
    });
  });
}

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin === self.location.origin) {
    event.respondWith(pageRequest(req));
  } else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" || url.hostname === "cdn.jsdelivr.net") {
    event.respondWith(otherRequest(req));
  }
});
