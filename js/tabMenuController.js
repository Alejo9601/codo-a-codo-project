////API CALL//////////////////

const getProductsForCategory = (category, limit = 100) => {
  category = escape(category);
  console.log(category);
  return fetch(
    `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
  ).then((response) => response.json());
};

//////////////////////////////
const electronicsProducts = await getProductsForCategory("electronics", 3);
const jeweleryProducts = getProductsForCategory("jewelery", 3);
const mensClothesProducts = getProductsForCategory("men´s clothing", 3);
const womensClothesProducts = getProductsForCategory("women´s clothing", 3);

const tabMenuClickables = document.querySelectorAll(".tabmenu-item__clickable");
const productsImages = document.querySelectorAll(".product-card--sm img");
const productsTitle = document.querySelectorAll(".product-card--sm h5");
const productsPrices = document.querySelectorAll(".product-card--sm p i");

//Paints products
const paintProducts = async (category) => {
  let products;

  switch (category) {
    case "electronics":
      products = electronicsProducts;
      break;
    case "jewelery":
      products = jeweleryProducts;
      break;
    case "men's clothing":
      products = mensClothesProducts;
      break;
    case "women's clothing":
      products = womensClothesProducts;
      break;
    default:
      break;
  }

  productsImages.forEach((productImg, index) => {
    productImg.src = products[index].image;
  });
  productsTitle.forEach((productTitle, index) => {
    productTitle.textContent = products[index].slice(0, 25);
  });
  productsPrices.forEach((productPrices, index) => {
    productPrices.textContent = "$ " + products[index].price;
  });
};

const makeActiveTab = (tab) => {
  tabMenuClickables.forEach((clickable) => {
    clickable.parentElement.classList.remove("active");
  });
  tab.target.parentElement.classList.add("active");
};

//First Paint
paintProducts("electronics");

//Will be executed when the user clicks on a tab element
const handleTabClick = (clickedTab) => {
  const gridProducts = document.querySelector(".grid-products");
  gridProducts.style.opacity = "0";
  gridProducts.style.visibility = "hidden";

  makeActiveTab(clickedTab);

  paintProducts(clickedTab.target.textContent.toLowerCase()).then(() => {
    gridProducts.style.opacity = "1";
    gridProducts.style.visibility = "visible";
  });
};

tabMenuClickables.forEach((element) => {
  element.addEventListener("click", handleTabClick);
});
