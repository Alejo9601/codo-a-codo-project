const productCards = document.querySelectorAll(".product-card");

const cart = document.querySelector(".cart");
const cartDetail = document.querySelector(".cart__detail");
const cartDetailUl = document.querySelector(".cart__detail ul");
const cartButton = document.querySelector(".btn-cart");

const countBubble = cartButton.children[1];

let cartItemsCount = 0;

const setProductOnCart = (product) => {
  const productDescription = product.children[1];
  let li = document.createElement("li");
  let button = document.createElement("button")

  button.textContent = "remove"
  button.addEventListener("click", handleButtonRemoveFromCart)

  li.textContent = productDescription.children[0].textContent;
  li.appendChild(button);

  cartDetailUl.appendChild(li)
};

const removeProductFromCart = (product) => {
  cartDetailUl.removeChild(product)
};

const decrementItemsOnCart = () => {
  cartItemsCount -= 1;

  if (cartItemsCount <= 0) {
    countBubble.classList.remove("visible");
  }

  countBubble.textContent = cartItemsCount;
}

const incrementItemsOnCart = () => {
  cartItemsCount += 1;

  if (cartItemsCount > 0) {
    countBubble.classList.add("visible");
  }

  countBubble.textContent = cartItemsCount;
};

const handleButtonRemoveFromCart = (ev) => {
  removeProductFromCart(ev.target.parentNode);
  decrementItemsOnCart();
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
  cartButton.addEventListener("click", handleButtonShowCart);
};

export default setCartController;
