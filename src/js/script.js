feather.replace({ class: "icons-ft" });
// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.getElementById("hamburger-menu");
// hamburger menu
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};
// click di luar sidebar untuk menghilangkan nav nya.
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
