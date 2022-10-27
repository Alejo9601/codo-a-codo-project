//Gets all the necessary elements from the DOM
const productCards = document.querySelectorAll(".product-card");

const cartDetail = document.querySelector(".cart__detail");
const cartDetailUl = document.querySelector(".cart__detail ul");
const cartButton = document.querySelector(".btn-cart");

const countBubble = cartButton.children[1];

//Holds the current sum of the prices of the products in the cart
let cartCurrentSum = 0;

let cart = [];

//Adds a product to the cart
const setProductOnCart = (product) => {
   const productDescription = product.children[1];

   let productItem = document.createElement("li");
   let btnRemoveProduct = document.createElement("button");

   btnRemoveProduct.textContent = "remove";
   btnRemoveProduct.addEventListener("click", handleButtonRemoveFromCart);

   productItem.textContent = productDescription.children[0].textContent;
   productItem.appendChild(btnRemoveProduct);

   productItem.setAttribute("id", `${cart.length + 1}`);

   cartDetailUl.appendChild(productItem);

   incrementItemsOnCart(productItem);

   //updateCurrentCartSum(productDescription.children[1]);
};

/**
 * Removes the product from the cart
 * @param {Element} ListItem
 */
const removeProductFromCart = (ListItem) => {
   const product = ListItem.children[0];
   // updateCurrentCartSum(productDescription.children[1], true);
   cartDetailUl.removeChild(ListItem);

   decrementItemsOnCart(ListItem);
};

/**
 * Updates currentCartSum
 * @param {Element} productPriceDescription
 * @param {boolean} isSubstraction
 */
const updateCurrentCartSum = (
   productPriceDescription,
   isSubstraction = false
) => {
   const priceWithDiscountElement = productPriceDescription.children[1];
   const priceWithDiscountValue = parseInt(
      priceWithDiscountElement.textContent.replace("$ ", "")
   );

   isSubstraction
      ? (cartCurrentSum = cartCurrentSum - priceWithDiscountValue)
      : (cartCurrentSum = cartCurrentSum + priceWithDiscountValue);

   const sum = document.querySelector(".cart__detail__current-sum");

   sum.textContent = "$ " + cartCurrentSum;
};

//Decrements the current count of products on the cart
const decrementItemsOnCart = (productToRemove) => {
   cart = cart.filter((cartProduct) => cartProduct.id !== productToRemove.id);

   console.log(productToRemove.id);

   if (cart.length === 0) {
      countBubble.classList.remove("visible");
   }

   countBubble.textContent = cart.length;
};

//Increments the current count of products on the cart
const incrementItemsOnCart = (product) => {
   cart.push(product);

   if (cart.length > 0) {
      countBubble.classList.add("visible");
   }

   countBubble.textContent = cart.length;
   console.log(cart);
};

//Handlers for buttons
const handleButtonRemoveFromCart = (ev) => {
   const product = ev.target.parentNode;
   removeProductFromCart(product);
};

const handleButtonAddToCart = (ev) => {
   const product = ev.target.parentNode;
   setProductOnCart(product);
};

const handleButtonShowCart = () => {
   if (cartDetail.classList.contains("cart__detail--visible")) {
      cartDetail.classList.remove("cart__detail--visible");
      return;
   }
   cartDetail.classList.add("cart__detail--visible");
};

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
