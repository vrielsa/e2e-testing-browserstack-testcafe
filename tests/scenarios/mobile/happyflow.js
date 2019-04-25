import ProductPage from '../../pages/product';
import CategoryPage from "../../pages/category";
import LoginPage from "../../pages/login";
import CartPage from "../../pages/cart";

fixture(`Happy Flow Mobile`)
  .page(CategoryPage.ENDPOINT);

const loginPage = new LoginPage();
const categoryPage = new CategoryPage();
const productPage = new ProductPage();
const cartPage = new CartPage();

test('Mobile - Login, Open category, Add to Cart, Go to Cart, Go to Checkout', async t => {
  await loginPage.login();
  await categoryPage.openCategoryMobile();
  await productPage.addToCartMobile();
  await cartPage.goToCart();
  await cartPage.goToCheckout();
  await cartPage.expectOnCheckout();
});

test('Clear Cart', async t => {
  await loginPage.login();
  await cartPage.goToCart();
  await cartPage.clearCart();
});