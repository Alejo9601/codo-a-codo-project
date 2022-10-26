//Gets all the necessary elements from the DOM
const productCards = document.querySelectorAll(".product-card");

const cart = document.querySelector(".cart");
const cartDetail = document.querySelector(".cart__detail");
const cartDetailUl = document.querySelector(".cart__detail ul");
const cartButton = document.querySelector(".btn-cart");

const countBubble = cartButton.children[1];

//Holds the current count of products on the cart
let cartItemsCount = 0;

//Holds the current sum of the prices of the products in the cart
let cartCurrentSum = 0;

//Adds a product to the cart
const setProductOnCart = (product) => {
   const productDescription = product.children[1];
   let li = document.createElement("li");
   let button = document.createElement("button");

   button.textContent = "remove";
   button.addEventListener("click", handleButtonRemoveFromCart);

   li.textContent = productDescription.children[0].textContent;
   li.appendChild(button);

   cartDetailUl.appendChild(li);

   const p = productDescription.children[1];

   const i = p.children[1]; //Actual price

   cartCurrentSum = +parseInt(i.textContent.replace("$ ", ""));

   const sum = document.createElement("p");

   sum.textContent = "$ " + cartCurrentSum;

   cartDetail.appendChild(sum);
};

//Removes the product from the cart
const removeProductFromCart = (product) => {
   cartDetailUl.removeChild(product);
};

//Decrements the current count of products on the cart
const decrementItemsOnCart = () => {
   cartItemsCount -= 1;

   if (cartItemsCount <= 0) {
      countBubble.classList.remove("visible");
   }

   countBubble.textContent = cartItemsCount;
};

//Increments the current count of products on the cart
const incrementItemsOnCart = () => {
   cartItemsCount += 1;

   if (cartItemsCount > 0) {
      countBubble.classList.add("visible");
   }

   countBubble.textContent = cartItemsCount;
};

//Handlers for buttons
const handleButtonRemoveFromCart = (ev) => {
   removeProductFromCart(ev.target.parentNode);
   decrementItemsOnCart();
};

const handleButtonAddToCart = (ev) => {
   setProductOnCart(ev.target.parentNode);
   incrementItemsOnCart();
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
