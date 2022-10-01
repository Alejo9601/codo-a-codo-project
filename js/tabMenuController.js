////API CALL//////////////////

const getAllProductsForCategory = (category) => {
  category = encodeURI(category);
  return fetch(`https://fakestoreapi.com/products/category/${category}`).then(
    (response) => response.json()
  );
};

//////////////////////////////

const tabMenuClickables = document.querySelectorAll(".tabmenu-item__clickable");
const productsImages = document.querySelectorAll(".product-card--sm img");

const handleTabClick = (ev) => {
  tabMenuClickables.forEach((clickable) => {
    clickable.parentElement.classList.remove("active");
  });
  ev.target.parentElement.classList.add("active");

  getAllProductsForCategory(ev.target.textContent.toLowerCase()).then(
    (apiProducts) => {
      productsImages.forEach((productImg, index) => {
        productImg.src = apiProducts[index].image;
      });
    }
  );
};

tabMenuClickables.forEach((element) => {
  element.addEventListener("click", handleTabClick);
});
