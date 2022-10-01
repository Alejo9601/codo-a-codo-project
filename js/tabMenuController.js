////API CALL//////////////////

const getAllProductsForCategory = (category) => {
  category = escape(category);
  console.log(category);
  return fetch(
    `https://fakestoreapi.com/products/category/${category}?limit=3`
  ).then((response) => response.json());
};

//////////////////////////////

const tabMenuClickables = document.querySelectorAll(".tabmenu-item__clickable");
const productsImages = document.querySelectorAll(".product-card--sm img");
const productsTitle = document.querySelectorAll(".product-card--sm h5");
const productsPrices = document.querySelectorAll(".product-card--sm p i");

//Paints products for a specific category
const paintProductsForCategory = (category) => {
  getAllProductsForCategory(category).then((apiProducts) => {
    productsImages.forEach((productImg, index) => {
      productImg.src = apiProducts[index].image;
    });
    productsTitle.forEach((productTitle, index) => {
      productTitle.textContent = apiProducts[index].title.slice(0, 25);
    });
    productsPrices.forEach((productPrices, index) => {
      productPrices.textContent = "$ " + apiProducts[index].price;
    });
  });
};

//First Paint
paintProductsForCategory("electronics");

//Will be executed when the user clicks on a tab element
const handleTabClick = (ev) => {
  tabMenuClickables.forEach((clickable) => {
    clickable.parentElement.classList.remove("active");
  });
  ev.target.parentElement.classList.add("active");
  paintProductsForCategory(ev.target.textContent.toLowerCase());
};

tabMenuClickables.forEach((element) => {
  element.addEventListener("click", handleTabClick);
});
