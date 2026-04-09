(function () {
  "use strict";

  var nav = document.getElementById("siteNav");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var icon = toggle.querySelector(".material-symbols-outlined");
    if (icon) {
      icon.textContent = open ? "close" : "menu";
    }
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNavOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) setNavOpen(false);
  });

  var leadForm = document.getElementById("leadForm");
  if (leadForm) {
    leadForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (leadForm.elements.name && leadForm.elements.name.value) || "";
      var phone = (leadForm.elements.phone && leadForm.elements.phone.value) || "";
      if (!name.trim() || !phone.trim()) {
        alert("Пожалуйста, укажите имя и телефон.");
        return;
      }
      alert("Спасибо, " + name.trim() + "! Мы свяжемся с вами по номеру " + phone.trim() + ".");
      leadForm.reset();
    });
  }

  document.querySelectorAll(".filter-label").forEach(function (label) {
    label.addEventListener("click", function () {
      document.querySelectorAll(".filter-label").forEach(function (el) {
        el.classList.remove("filter-label--active");
      });
      label.classList.add("filter-label--active");
    });
  });
})();
