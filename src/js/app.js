const mobileNavigation = document.getElementById("mobile-navigation");

const openMenuButton = document.getElementById("openBtn");
const closeMenuButton = document.getElementById("closeBtn");

const toggleMenu = () => mobileNavigation.classList.toggle("hidden");

openMenuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);


mobileNavigation.addEventListener("click", (e) => {
  if (e.target === mobileNavigation) {
    toggleMenu();
  }
});
