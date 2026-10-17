/* Tohfa & Twinkle | contact: composes an Instagram message (orders are taken by DM) */
(function () {
  var form = document.getElementById("msg-form");
  if (!form || !window.TT) return;
  var result = document.getElementById("form-result");

  function setError(field, on) {
    field.closest(".field").classList.toggle("has-error", on);
    field.setAttribute("aria-invalid", String(on));
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements.name;
    var looking = form.elements.looking;
    var ok = true;
    setError(name, !name.value.trim()); if (!name.value.trim()) ok = false;
    setError(looking, !looking.value); if (!looking.value) ok = false;
    if (!ok) { form.querySelector('[aria-invalid="true"]').focus(); return; }

    var occasion = form.elements.occasion.value;
    var kind = form.elements.kind.value;
    var note = form.elements.note.value.trim();
    var lines = ["Hi Tohfa & Twinkle! I am " + name.value.trim() + "."];
    lines.push("I am looking for: " + looking.value + ".");
    if (occasion) lines.push("Occasion: " + occasion + ".");
    if (kind) lines.push("This is for: " + kind + ".");
    if (note) lines.push("A little more: " + note);
    var text = lines.join("\n");

    result.innerHTML = "<strong>Your message is ready.</strong> We copied it for you. Paste it into the Instagram chat that opens.<pre></pre>";
    result.querySelector("pre").textContent = text;
    result.classList.add("show");
    TT.sendToInstagram(text);
  });

  form.addEventListener("input", function (e) {
    if (e.target.matches("[aria-invalid='true']") && e.target.value) setError(e.target, false);
  });
})();
