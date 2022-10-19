import startCountdown from "./countdownController.js";
import startCardSlider from "./cardSliderController.js";
import loadQuickAccessProducts from "./tabMenuController.js";
import paintNewProducts from "./newProductsController.js";
import setCartController from "./cartController.js";

loadQuickAccessProducts();
paintNewProducts();
setCartController();
startCountdown();
startCardSlider();
