import ProductPage from '../../pages/product';
import CategoryPage from "../../pages/category";
import LoginPage from "../../pages/login";
import CartPage from "../../pages/cart";

fixture(`Happy Flow Desktop`)
  .page(CategoryPage.ENDPOINT);

const categoryPage = new CategoryPage();
const cartPage = new CartPage();
const productPage = new ProductPage();
const loginPage = new LoginPage();

test('Desktop - Login, Open category, Add to Cart, Go to Cart, Go to Checkout', async t => {
  await loginPage.login();
  await categoryPage.openCategory();
  await productPage.addToCart();
  await cartPage.goToCart();
  await cartPage.goToCheckout();
  await cartPage.expectOnCheckout();
});

test('Clear Cart', async t => {
  await loginPage.login();
  await cartPage.goToCart();
  await cartPage.clearCart();
});