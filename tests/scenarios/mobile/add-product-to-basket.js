import ProductPage from '../../pages/product';

fixture(`add-product-to-basket`)
  .page(ProductPage.ENDPOINT);

const productPage = new ProductPage();

test('Add to product to basket', async t => {
  await productPage.mobileAddToCart();
  await productPage.expectSuccess();
});