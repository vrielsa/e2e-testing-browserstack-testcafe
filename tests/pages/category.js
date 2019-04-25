import {Selector, t} from 'testcafe';

export default class CategoryPage {
  static ENDPOINT = process.env.TESTING_ENDPOINT;

  async openCategory() {
    await t
      .hover(Selector('nav.main > ul > li > a > span').withText(new RegExp('women', 'i')))
      .click(Selector('.drawerContainer a')
        .withAttribute('href', 'https://testing.essentiel-antwerp.com/be_en/women/sweatshirts'));
  }

  async openCategoryMobile() {
    await t
      .click(Selector('.heading').withText(new RegExp('menu', 'i')))
      .click(Selector('nav.main > ul > li > a > span').withText(new RegExp('women', 'i')))
      .click(Selector('a').withAttribute('href', 'https://testing.essentiel-antwerp.com/be_en/women/sweatshirts'))
  }

  async expectSubCategory() {
    await t.expect(Selector('body.category-sweatshirts').visible).ok();
  }
}