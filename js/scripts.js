elements = document.querySelectorAll(".menu-item-tabproducts");

const handleTabClick = (ev) => {
    elements.forEach(element => {
        element.classList.remove("active")
    })
    ev.target.classList.add("active")
}

elements.forEach(element => {
    element.addEventListener("click", handleTabClick);
});