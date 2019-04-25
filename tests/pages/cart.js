import {Selector, t} from 'testcafe';

export default class CartPage {
  async goToCart() {
    await t
      .click(Selector('.top-cart .switcher-holder'))
      .click(Selector('#popId-topcart .actions a'));
  }

  async goToCheckout() {
    await t
      .click(Selector('.btn-proceed-checkout'));
  }

  async clearCart() {
    await t
      .click(Selector('.cart-btn-remove'));
  }

  async expectOnCheckout() {
    await t
      .expect(Selector('body.checkout-onepage-index').visible).ok();
  }
}