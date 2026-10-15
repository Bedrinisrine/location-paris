const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const year = document.getElementById("year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

window.addEventListener(
  "scroll",
  () => {
    nav?.classList.toggle("is-scrolled", window.scrollY > 24);
  },
  { passive: true }
);

toggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll('.nav__links a').forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const revealTargets = document.querySelectorAll(
  ".track, .about, .listen, .contact, .player"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((el) => observer.observe(el));
