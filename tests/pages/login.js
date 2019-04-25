import {Selector, t} from "testcafe";

export default class LoginPage {
  async login() {
    await t
      .click(Selector('.signin'))
      .typeText(Selector('#inpSigninEmail'), process.env.CUSTOMER_EMAIL)
      .typeText(Selector('#inpSigninPass'), process.env.CUSTOMER_PASSWORD)
      .click(Selector('#sbtSignin'));
  }

  async expectLoggedIn() {
    await t
      .expect(Selector('body.customer-account-index').visible).ok();
  }
}