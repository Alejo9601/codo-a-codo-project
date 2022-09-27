elements = document.querySelectorAll(".tabmenu-item__clickable");

const handleTabClick = (ev) => {
  elements.forEach((element) => {
    element.parentElement.classList.remove("active");
  });
  ev.target.parentElement.classList.add("active");
};

elements.forEach((element) => {
  element.addEventListener("click", handleTabClick);
});
