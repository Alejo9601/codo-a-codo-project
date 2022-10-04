////API CALL//////////////////

const getProductsForCategory = (category, limit = 100) => {
  category = escape(category);
  return fetch(
    `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
  ).then((response) => response.json());
};

//////////////////////////////
let electronicsProducts;
let jeweleryProducts;
let mensClothesProducts;
let womensClothesProducts;

const tabMenuClickables = document.querySelectorAll(".tabmenu-item__clickable");
const productsImages = document.querySelectorAll(".product-card--sm img");
const productsTitle = document.querySelectorAll(".product-card--sm h5");
const productsPrices = document.querySelectorAll(".product-card--sm p i");

const getProducts = async () => {
  electronicsProducts = await getProductsForCategory("electronics", 3);
  jeweleryProducts = await getProductsForCategory("jewelery", 3);
  mensClothesProducts = await getProductsForCategory("men's clothing", 3);
  womensClothesProducts = await getProductsForCategory("women's clothing", 3);
}

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
    productTitle.textContent = products[index].title.slice(0, 25);
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


getProducts().then(()=> {

  paintProducts("electronics")

  tabMenuClickables.forEach((element) => {
    element.addEventListener("click", handleTabClick);
  });
});




