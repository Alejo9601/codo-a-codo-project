const menuToggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");

const handleMenuToggler = (ev) => {
  if (menu.classList.contains("menu--active")) {
    menu.classList.remove("menu--active");
    menu.classList.add("menu--inactive");
    return;
  }
  menu.classList.add("menu--active");
  menu.classList.remove("menu--inactive");
};

const setMenuToglerController = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth() <= 580) {
      menu.classList.add("menu--inactive");
      return;
    }
    menu.classList.remove("menu--inactive");
  });
  menuToggler.addEventListener("click", handleMenuToggler);
};

export default setMenuToglerController;
