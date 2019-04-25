import {Selector, t} from 'testcafe';

export default class ProductPage {
  async addToCart() {
    await t
      .click(Selector('div.product > a').withAttribute('title', 'PHPro Automated Test Product'))
      .click(Selector('ul.sb-dropdown > li:nth-child(2)'))
      .click(Selector('#sbtBasket'));
  }

  async addToCartMobile() {
    await t
      .click(Selector('div.product > a').withAttribute('title', 'PHPro Automated Test Product'))
      .click(Selector('ul.sb-dropdown > li:nth-child(2)'))
      .click(Selector('#sbtBasket'));
  }

  async expectSuccess() {
    await t.expect(
      Selector('.success-msg').visible).ok();
  }
}