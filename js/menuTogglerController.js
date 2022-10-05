const menuToggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu-list--header");

const handleMenuToggler = (ev) => {
  if (menu.classList.contains("dropped")) {
    menu.style.display = "none";
    menu.classList.remove("dropped");
    return;
  }
  menu.style.display = "flex";
  menu.classList.add("dropped");
};

const setMenuToglerController = () => {
  menuToggler.addEventListener("click", handleMenuToggler);
};

export default setMenuToglerController;
