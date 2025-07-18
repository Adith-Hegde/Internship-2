// Scroll to section smoothly (optional enhancement)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
