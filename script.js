// ===============================
// Mannrang (Mnrg) — Responsive Script
// ===============================

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ===============================
// Highlight active navigation link
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".site-nav a");

function updateActiveLink() {
  let current = "";
  const scrollPos = window.scrollY + 80; // Offset for header height

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop - 2) { // -2 for tolerance, can remove if unnecessary
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// ===============================
// Intersection Observer for Animations
// ===============================
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

document.querySelectorAll(
  ".hero-logo, .company-name, .company-tagline, " +
  ".tea-pack-img, .tea-right, " +
  ".Mnrg-logo, .about-right"
).forEach(el => {
  observer.observe(el);
});

// ===============================
// Mobile Menu Optimization
// ===============================
// Prevents animation lag on mobile by reducing complexity
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function() {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
  });
}

// ===============================
// Touch optimization
// ===============================
if ('ontouchstart' in window) {
  document.body.classList.add('touch-device');
}

// ===============================
// Disable right-click site-wide
// ===============================
document.addEventListener("contextmenu", event => {
  event.preventDefault();
  return false;
});

// ===============================
// Viewport meta tag verification
// ===============================
// Ensure viewport meta tag is set in HTML head:
// <meta name="viewport" content="width=device-width,initial-scale=1" />

