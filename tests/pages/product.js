import {Selector, t} from 'testcafe';

export default class ProductPage {
  static ENDPOINT = 'https://testing.essentiel-antwerp.com/be_en/';

  async addToCart() {
    await t
      .hover(Selector('nav.main > ul > li > a > span').withText(new RegExp('women', 'i')))
      .click(Selector('.drawerContainer a').withAttribute('href', 'https://testing.essentiel-antwerp.com/be_en/women/sweatshirts'))
      .click(Selector('div.product > a').withAttribute('title', 'PHPro Automated Test Product'))
      .click(Selector('ul.sb-dropdown > li:nth-child(2)'))
      .click(Selector('#sbtBasket'));
  }

  async mobileAddToCart() {
    await t
      .click(Selector('.heading').withText(new RegExp('menu', 'i')))
      .click(Selector('nav.main > ul > li > a > span').withText(new RegExp('women', 'i')))
      .click(Selector('a').withAttribute('href', 'https://testing.essentiel-antwerp.com/be_en/women/sweatshirts'))
      .click(Selector('div.product > a').withAttribute('title', 'PHPro Automated Test Product'))
      .click(Selector('ul.sb-dropdown > li:nth-child(2)'))
      .click(Selector('#sbtBasket'));
  }

  async expectSuccess() {
    await t.expect(
      Selector('.success-msg').visible).ok();
  }
}