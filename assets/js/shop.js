/* Tohfa & Twinkle | shop: grouped catalogue, collection filter, product dialog */
(function () {
  var root = document.getElementById("catalogue");
  var filterRow = document.getElementById("filter-row");
  var dlg = document.getElementById("detail");
  if (!root || !window.TT) return;

  function cardHTML(p) {
    var tier = p.tier ? TT.tiers[p.tier] : null;
    var top = '<span>' + p.kind + '</span>' +
      (tier ? '<span class="stars" role="img" aria-label="' + tier.label + ' tier">' + TT.starsHTML(tier.n) + '</span>' : '');
    var imgTag = '<img src="assets/img/' + p.img + '" alt="' + p.alt + '" loading="lazy" width="750" height="1000">';
    var inner = p.plate
      ? '<span class="plate"><img class="bg" src="assets/img/' + p.img + '" alt="" aria-hidden="true" loading="lazy"><img src="assets/img/' + p.img + '" alt="' + p.alt + '" loading="lazy"></span>'
      : imgTag;
    return '<button type="button" class="card reveal" data-id="' + p.id + '" aria-haspopup="dialog">' +
      '<figure class="arch"><span class="frame">' + inner + '</span></figure>' +
      '<span class="card-text"><span class="card-top">' + top + '</span>' +
      '<h3>' + p.name + '</h3>' +
      '<span class="desc">' + p.desc + '</span></span>' +
      '<span class="card-foot"><span>' + p.box + '</span><span class="price">' + TT.money(p.price) + '</span></span>' +
      '</button>';
  }

  function render() {
    root.innerHTML = TT.collections.map(function (c) {
      var items = TT.products.filter(function (p) { return p.c === c.id; });
      var note = c.note ? '<p class="note">' + c.note + '</p>' : "";
      return '<section class="group" id="' + c.id + '" data-group="' + c.id + '" aria-labelledby="h-' + c.id + '">' +
        '<header class="group-head"><h2 id="h-' + c.id + '">' + c.name + '</h2><p>' + c.tagline + '</p>' + note + '</header>' +
        '<div class="grid">' + items.map(cardHTML).join("") + '</div></section>';
    }).join("");

    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 }) : null;
    root.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.setProperty("--i", String(i % 3));
      if (io) io.observe(el); else el.classList.add("in");
    });
  }

  function setFilter(id, scroll) {
    var key = id || "all";
    filterRow.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.filter === key));
    });
    root.querySelectorAll(".group").forEach(function (g) { g.hidden = key !== "all" && g.dataset.group !== key; });
    if (scroll) {
      var top = document.getElementById("catalogue").getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    }
  }

  function openDetail(p) {
    var c = TT.collectionById(p.c);
    var tier = p.tier ? TT.tiers[p.tier] : null;
    var img = p.plate
      ? '<div class="detail-img is-plate" style="background:var(--maroon)"><img src="assets/img/' + p.img + '" alt="' + p.alt + '"></div>'
      : '<div class="detail-img"><img src="assets/img/' + p.img + '" alt="' + p.alt + '"></div>';
    dlg.innerHTML = '<button type="button" class="close-btn" aria-label="Close" data-close><i class="ph ph-x"></i></button>' +
      '<div class="detail-grid">' + img + '<div class="detail-info">' +
      '<p class="eyebrow">' + c.name + '</p>' +
      '<h2>' + p.name + '</h2><p class="kind">' + p.kind + (tier ? ", " + tier.label + " tier" : "") + '</p>' +
      '<p>' + p.desc + '</p>' +
      '<dl><div><dt>What is inside</dt><dd>' + p.inside + '</dd></div><div><dt>Perfect for</dt><dd>' + p.perfect + '</dd></div></dl>' +
      '<div class="detail-buy"><div><span class="price">' + TT.money(p.price) + '</span><span class="box">' + p.box + '</span></div>' +
      '<button type="button" class="btn btn-maroon" data-order="' + p.id + '"><i class="ph ph-instagram-logo"></i>Order on Instagram</button></div>' +
      '</div></div>';
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    history.replaceState(null, "", "#" + p.id);
  }

  root.addEventListener("click", function (e) {
    var card = e.target.closest(".card");
    if (card) openDetail(TT.byId(card.dataset.id));
  });

  dlg.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]") || e.target === dlg) { dlg.close(); return; }
    var order = e.target.closest("[data-order]");
    if (order) TT.sendToInstagram(TT.orderMessage(TT.byId(order.dataset.order)));
  });
  dlg.addEventListener("close", function () { history.replaceState(null, "", location.pathname); });

  filterRow.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    setFilter(b.dataset.filter, true);
    history.replaceState(null, "", b.dataset.filter === "all" ? location.pathname : "#" + b.dataset.filter);
  });

  /* build filter buttons */
  filterRow.innerHTML = '<button type="button" data-filter="all" aria-pressed="true">All gifts</button>' +
    TT.collections.map(function (c) { return '<button type="button" data-filter="' + c.id + '" aria-pressed="false">' + c.short + '</button>'; }).join("");

  render();

  /* deep links: #floating filters, #ladoo opens that product */
  var hash = decodeURIComponent(location.hash.slice(1));
  if (hash) {
    if (TT.collectionById(hash)) { setFilter(hash, false); }
    else if (TT.byId(hash)) { openDetail(TT.byId(hash)); }
  }
})();
