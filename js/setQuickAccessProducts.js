const getAllProducts = () => {
  return fetch("https://fakestoreapi.com/products/category/electronics").then(
    (response) => response.json()
  );
};

const productsImages = document.querySelectorAll(".product-card--sm img");

getAllProducts().then((apiProducts) => {
  productsImages.forEach((productImg, index) => {
    productImg.src = apiProducts[index].image;
  });
});
