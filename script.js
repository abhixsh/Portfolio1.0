// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll("nav a");

for (const link of navLinks) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
  });
}
