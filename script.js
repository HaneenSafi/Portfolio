const navbar = document.querySelector(".navbar");
const cursorGlow = document.querySelector(".cursor-glow");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const typing = document.getElementById("typing");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const words = [
  "Creative Web Experiences",
  "Responsive Interfaces",
  "Clean & Modern Solutions",
  "Full Stack Applications"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = words[wordIndex];

  if (!deleting) {
    typing.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typing.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 75);
}
typeEffect();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 180;
    if (window.scrollY >= top) current = section.id;
  });

  navItems.forEach(item => {
    item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
  });
});
