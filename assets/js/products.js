/* Tohfa & Twinkle | catalogue data. Every product, price and description comes from the Diwali catalogue PDF. */
window.TT = (function () {
  var IG_USER = "tohfaandtwinkle";
  var RUPEE = "₹";

  var collections = [
    { id: "mithai", name: "The Mithai Collection", short: "Mithai", tagline: "Looks like mithai. Glows like Diwali.",
      note: "Not for eating! Our Mithai candles look good enough to eat, but they are strictly for lighting. Please keep them away from children and pets." },
    { id: "floating", name: "The Floating Collection", short: "Floating", tagline: "Light on water, made for urlis, bowls and rangoli." },
    { id: "pillar", name: "The Pillar Collection", short: "Pillar", tagline: "Enchanting blooms, enduring pillars." },
    { id: "utsav", name: "The Utsav Collection", short: "Utsav", tagline: "Festive décor with a handcrafted heart.",
      note: "Make it a hamper. Pair a Matki or Phool set with a Mithai box for a ready-made festive hamper. Message us and we will help you put it together." },
    { id: "love", name: "The Love & Bloom Collection", short: "Love & Bloom", tagline: "Gifts as enduring as your love.",
      note: "Say it with light. Add a handwritten note to any Love & Bloom gift. Just share your message when you order." },
    { id: "aroma", name: "The Aroma Collection", short: "Aroma", tagline: "Unwind your senses." }
  ];

  var tiers = {
    essential: { label: "Essential", n: 1, line: "Thoughtful everyday gifting" },
    classic: { label: "Classic", n: 2, line: "Our timeless favourites" },
    premium: { label: "Premium", n: 3, line: "Elevated, gift-ready sets" },
    signature: { label: "Signature", n: 4, line: "Our finest statement pieces" }
  };

  var products = [
    { id: "gujiya", c: "mithai", name: "Gujiya", kind: "Mithai Candles", price: 209, box: "Box of 4", img: "gujiya.jpg",
      alt: "Four crimped gujiya candles with silver varq in a floral window box",
      desc: "Crimped gujiya candles finished with silver varq. A little Holi and Diwali nostalgia in every box.",
      inside: "Set of 4 gujiya candles in a floral window box.", perfect: "Festive hampers, return gifts, Holi and Diwali." },
    { id: "paan", c: "mithai", name: "Banarasi Paan", kind: "Mithai Candles", price: 209, box: "Box of 4", img: "paan.jpg", plate: true,
      alt: "Four folded paan candles with silver varq in a green window box",
      desc: "Khaike nahi, jalaike Paan Banaraswala! Folded paan candles with silver varq, our cheekiest gift yet.",
      inside: "Pack of 4 paan candles in a green window box.", perfect: "After-dinner gifting, house-warmings, fun surprises." },

    { id: "rangoli", c: "floating", name: "Rangoli Blooms", kind: "Floating Candles", tier: "essential", price: 109, box: "Box of 4", img: "rangoli.jpg",
      alt: "Pastel flower floating candles resting on a rangoli",
      desc: "Pastel flower floaters that turn any rangoli or water bowl into a festive centrepiece.",
      inside: "Set of 4 flower floating candles in blue, green, pink and purple.", perfect: "Rangoli, urlis, entrance décor." },
    { id: "marigold", c: "floating", name: "Marigold", kind: "Floating Candles", tier: "classic", price: 209, box: "Box of 6", img: "marigold.jpg", plate: true,
      alt: "Three boxes of marigold floating candles in purple, green and blue",
      desc: "A harmony of marigold blooms in three soft colourways. Classic Indian festive charm.",
      inside: "Box of 6 marigold candles. Available in purple, green and blue.", perfect: "Diwali décor, pooja rooms, gifting." },
    { id: "sunflower", c: "floating", name: "Sunflower", kind: "Floating Candles", tier: "premium", price: 199, box: "Box of 3", img: "sunflower.jpg",
      alt: "Aqua and coral boxes of sunflower floating candles beside a bowl of water",
      desc: "Petal-perfect sunflowers that float beautifully and brighten up any space.",
      inside: "Box of 3 sunflower floating candles. Available in aqua and coral.", perfect: "Water bowls, dinner tables, house-warmings." },
    { id: "rose", c: "floating", name: "Rose", kind: "Floating Candles", tier: "signature", price: 189, box: "Box of 2", img: "rose-floater.jpg", plate: true,
      alt: "Coral, lavender and teal rose floating candles on a brass thali",
      desc: "Our most lavish floaters. Full-bloom roses that make a statement in any bowl.",
      inside: "Box of 2 rose floating candles. Available in coral, lavender and teal.", perfect: "Premium gifting, weddings, statement décor." },

    { id: "rose-pillars", c: "pillar", name: "Rose Pillars", kind: "Pillar Candles", tier: "premium", price: 209, box: "Box of 3", img: "rose-pillars.jpg",
      alt: "Three boxes of pearl-finish rose pillar candles among diyas and marigolds",
      desc: "Pearl-finish pillars sculpted with roses, elegant on a console, mantel or festive table.",
      inside: "Box of 3 rose pillars. Colourways: orange and white, green and white, purple and white.", perfect: "Diwali gifting, home décor, corporate gifts." },
    { id: "bloom-pillars", c: "pillar", name: "Bloom Pillars", kind: "Pillar Candles", tier: "signature", price: 309, box: "Box of 5", img: "bloom-pillars.jpg",
      alt: "Five pastel pillar candles, each crowned with a moulded flower",
      desc: "A bouquet of light: five pastel pillars, each crowned with a moulded flower.",
      inside: "Box of 5 floral pillar candles in assorted pastels.", perfect: "Romantic evenings, premium hampers, festive décor." },

    { id: "matki", c: "utsav", name: "Matki", kind: "Tealights", price: 199, box: "Box of 6", img: "matki.jpg",
      alt: "Six jute-wrapped terracotta matki tealights in a gift box",
      desc: "Jute-wrapped terracotta matki tealights. Rustic, earthy and authentically Indian.",
      inside: "Box of 6 jute-wrapped matki tealights.", perfect: "Diwali, pooja rooms, traditional décor." },
    { id: "phool", c: "utsav", name: "Phool", kind: "Tealights", price: 329, box: "Box of 6", img: "phool.jpg",
      alt: "Six hand-painted flower tealights with stone accents in a clear gift box",
      desc: "Hand-painted flower tealights with stone accents. Small flames, big happiness, each one a little piece of art.",
      inside: "Set of 6 hand-painted flower candles in a clear gift box.", perfect: "Gifting, return gifts, festive tables." },
    { id: "spiral", c: "utsav", name: "Spiral", kind: "Taper Candles", price: 159, box: "Box of 10", img: "spiral.jpg",
      alt: "Ten twisted taper candles in bright colours",
      desc: "Twisted taper candles in bright, joyful colours. Colour your celebrations.",
      inside: "Set of 10 spiral taper candles in a clear box.", perfect: "Birthdays, dinner parties, celebrations." },

    { id: "gulabi", c: "love", name: "Gulabi", kind: "Bouquet Candle", price: 299, box: "Single piece", img: "gulabi.jpg",
      alt: "A red rose bouquet candle tied with a green bow, in a gift box",
      desc: "A blaze of red roses tied with a green bow. A bouquet that keeps on glowing.",
      inside: "Red rose bouquet candle in a gift box.", perfect: "Valentine's Day, anniversaries, Karwa Chauth." },
    { id: "basant", c: "love", name: "Basant", kind: "Bouquet Candle", price: 299, box: "Single piece", img: "basant.jpg",
      alt: "A yellow rose bouquet candle on a deep green stem, in a window gift box",
      desc: "Sunny yellow roses on a deep green bouquet. Where art meets light.",
      inside: "Yellow rose bouquet candle in a window gift box.", perfect: "Birthdays, thank-yous, Basant Panchami." },
    { id: "bond-of-love", c: "love", name: "Bond of Love", kind: "Love Candle", price: 299, box: "Single piece", img: "bond-of-love.jpg",
      alt: "A sculpted red pillar candle of an embracing couple in a pink gift box",
      desc: "A sculpted pillar featuring an embracing couple. Ignite the flame of your affection.",
      inside: "Sculpted couple pillar candle in a gift box. Available in Crimson Red and Pearl Ivory.", perfect: "Valentine's Day, anniversaries, weddings." },

    { id: "jasmine", c: "aroma", name: "Jasmine Burner Set", kind: "Aroma Gift Set", tier: "essential", price: 199, box: "Single piece", img: "jasmine-burner.jpg",
      alt: "A yellow ceramic aroma burner with jasmine fragrance oil and a tealight",
      desc: "A cheerful ceramic aroma burner with fresh jasmine. Small fragrance, big happiness.",
      inside: "Ceramic aroma burner, jasmine fragrance oil (3 ml), tealight.", perfect: "Desks, bedrooms, everyday gifting." },
    { id: "lemongrass", c: "aroma", name: "Lemongrass Burner Set", kind: "Aroma Gift Set", tier: "classic", price: 269, box: "Single piece", img: "lemongrass-burner.jpg",
      alt: "A cream ceramic aroma burner in a maroon and gold gift box",
      desc: "Crisp, refreshing lemongrass with a warm ceramic burner, gift-boxed in maroon and gold.",
      inside: "Ceramic aroma burner, 2 fragrance oils, tealight.", perfect: "Living rooms, house-warmings, festive gifting." },
    { id: "white-jasmine", c: "aroma", name: "White Jasmine Burner Set", kind: "Aroma Gift Set", tier: "premium", price: 349, box: "Single piece", img: "white-jasmine.jpg",
      alt: "A grey-glazed ceramic aroma burner set tied with twine",
      desc: "A calm, grey-glazed burner with soft white jasmine, beautifully tied with twine.",
      inside: "Ceramic aroma burner, 2 fragrance oils, 4 tealights.", perfect: "Self-care gifts, corporate gifting, spa corners." },
    { id: "reed", c: "aroma", name: "Reed Diffuser & Potpourri", kind: "Aroma Gift Set", tier: "signature", price: 499, box: "Single piece", img: "reed-diffuser.jpg",
      alt: "A reed diffuser, lemongrass oil and dried potpourri gift set",
      desc: "Our most complete fragrance gift. Flame-free, long-lasting lemongrass for any room.",
      inside: "Ceramic pot, 6 rattan reeds, lemongrass oil (100 ml), refill oil (10 ml), dried potpourri.", perfect: "Premium hampers, offices, new homes." }
  ];

  function byId(id) { for (var i = 0; i < products.length; i++) if (products[i].id === id) return products[i]; return null; }
  function collectionById(id) { for (var i = 0; i < collections.length; i++) if (collections[i].id === id) return collections[i]; return null; }
  function money(n) { return RUPEE + n; }

  function starsHTML(n) {
    var s = "";
    for (var i = 0; i < n; i++) s += '<span class="star"></span>';
    return s;
  }

  function orderMessage(p) {
    return "Hi Tohfa & Twinkle! I'd love to order " + p.name + " (" + p.kind + ", " + p.box + ") at " + money(p.price) +
      ". Could you share availability and delivery details?";
  }

  /* Toast */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(function () { toastEl.classList.add("show"); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 6000);
  }

  /* Orders happen by Instagram DM, per the catalogue. Copy the message, then open the DM. */
  function sendToInstagram(text) {
    var done = function (copied) {
      toast(copied
        ? "Your message is copied. Paste it into the Instagram chat that just opened."
        : "Instagram is opening. Please type or paste your message: " + text);
      window.open("https://ig.me/m/" + IG_USER, "_blank", "noopener");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  }

  return { IG_USER: IG_USER, collections: collections, tiers: tiers, products: products, byId: byId,
    collectionById: collectionById, money: money, starsHTML: starsHTML, orderMessage: orderMessage,
    toast: toast, sendToInstagram: sendToInstagram };
})();
