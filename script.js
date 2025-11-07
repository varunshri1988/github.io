// ===============================
// Mannrang (Mnrg) — Script.js
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
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Default: Home when near top
  if (window.scrollY < 150) current = "home";
  // Fallback: Contact when at bottom
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5)
    current = "contact";

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
// Disable right-click site-wide
// ===============================
document.addEventListener("contextmenu", event => {
  event.preventDefault();
  return false;
});
