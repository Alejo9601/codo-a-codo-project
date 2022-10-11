const productCards = document.querySelectorAll(".product-card");
const cart = document.querySelector(".cart");
let cartItemsCount = 0;

const setProductOnCart = (productCard) => {};

const incrementItemsOnCart = () => {
  cartItemsCount += 1;
  const btnCart = cart.children[0];
  const countBubble = btnCart.children[1];

  if (cartItemsCount > 0) {
    countBubble.classList.add("visible");
  }

  countBubble.textContent = cartItemsCount;
};

const handleButtonAddToCart = (ev) => {
  setProductOnCart(ev.target.parentNode);
  incrementItemsOnCart();
};

const setCartController = () => {
  productCards.forEach((productCard) => {
    productCard.lastElementChild.addEventListener(
      "click",
      handleButtonAddToCart
    );
  });
};

export default setCartController;
