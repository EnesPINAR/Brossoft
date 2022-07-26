const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector("menu");

openMenu.addEventListener("click", () => {
    menu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("open");
});