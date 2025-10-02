document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#main-nav a");
  const currentPath = window.location.pathname.split("/").pop(); // current file name

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
