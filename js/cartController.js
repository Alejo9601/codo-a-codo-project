const productCards = document.querySelectorAll(".product-card");
const cart = document.querySelector(".cart");
const cartDetail = document.querySelector(".cart__detail");
const cartDetailUl = document.querySelector(".cart__detail ul");
const buttonShowCart = document.querySelector(".btn-cart");

let cartItemsCount = 0;

const setProductOnCart = (product) => {
  const productDescription = product.children[1];
  let li = document.createElement("li");
  li.textContent = productDescription.children[0].textContent;
  cartDetailUl.appendChild(li)
};

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

const handleButtonShowCart = () => {
  if(cartDetail.classList.contains("cart__detail--visible")) {
    cartDetail.classList.remove("cart__detail--visible");
    return;
  }
  cartDetail.classList.add("cart__detail--visible");
}

const setCartController = () => {
  productCards.forEach((productCard) => {
    productCard.lastElementChild.addEventListener(
      "click",
      handleButtonAddToCart
    );
  });
  buttonShowCart.addEventListener("click", handleButtonShowCart);
};

export default setCartController;
