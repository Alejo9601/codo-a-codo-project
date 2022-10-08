import { getProductsForCategory } from "./apiCalls.js";

const productsImages = document.querySelectorAll(
  ".newproducts .product-card img"
);
const productsTitle = document.querySelectorAll(
  ".newproducts .product-card h5"
);
const productsPrices = document.querySelectorAll(
  ".new products .product-card p i"
);

const products = await getProductsForCategory("electronics", 4);

const paintNewProducts = () => {
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

export default paintNewProducts;
