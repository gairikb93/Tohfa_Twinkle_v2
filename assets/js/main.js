/* Tohfa & Twinkle | shared behaviour: nav, scroll reveal, accordion, rail */
(function () {
  /* mobile menu */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("i").className = open ? "ph ph-x" : "ph ph-list";
    });
  }

  /* reveal on scroll (IntersectionObserver, no scroll listeners) */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  /* moments accordion: hover or focus or click opens a panel */
  var acc = document.querySelector(".acc");
  if (acc) {
    var items = Array.prototype.slice.call(acc.querySelectorAll(".acc-item"));
    var open = function (it) {
      items.forEach(function (x) {
        var on = x === it;
        x.classList.toggle("is-open", on);
        x.setAttribute("aria-expanded", String(on));
      });
    };
    var fine = window.matchMedia("(hover: hover) and (min-width: 861px)");
    items.forEach(function (it) {
      it.addEventListener("click", function () { open(it); });
      it.addEventListener("focus", function () { open(it); });
      it.addEventListener("mouseenter", function () { if (fine.matches) open(it); });
    });
  }

  /* small-boxes rail */
  var track = document.querySelector("[data-rail]");
  if (track && window.TT) {
    var ids = ["rangoli", "spiral", "rose", "sunflower", "matki", "jasmine", "ladoo", "marigold"];
    track.innerHTML = ids.map(function (id, i) {
      var p = TT.byId(id);
      var frame = p.plate
        ? '<span class="plate"><img class="bg" src="assets/img/' + p.img + '" alt="" aria-hidden="true" loading="lazy"><img src="assets/img/' + p.img + '" alt="' + p.alt + '" loading="lazy"></span>'
        : '<img src="assets/img/' + p.img + '" alt="' + p.alt + '" loading="lazy">';
      return '<a class="rail-item" href="shop.html#' + p.id + '">' +
        '<figure class="arch">' + frame + '</figure>' +
        '<div><h3>' + p.name + '</h3><div class="meta"><span>' + p.box + '</span><span class="price">' + TT.money(p.price) + '</span></div></div></a>';
    }).join("");
    var step = function (dir) {
      var item = track.querySelector(".rail-item");
      var w = item ? item.getBoundingClientRect().width + 32 : 300;
      track.scrollBy({ left: dir * w * 2, behavior: "smooth" });
    };
    var prev = document.getElementById("rail-prev");
    var next = document.getElementById("rail-next");
    if (prev) prev.addEventListener("click", function () { step(-1); });
    if (next) next.addEventListener("click", function () { step(1); });
  }
})();
