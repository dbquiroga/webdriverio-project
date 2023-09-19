import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import tests from "../../data/logindata.json" assert { type: "json" };

describe("My Login application", () => {
  tests.forEach((test) => {
    it(`should test ${test.name}`, async () => {
      await LoginPage.open();
      await LoginPage.login(test.username, test.password);

      if (test.name === "valid credentials") {
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(test.expected);
      } else {
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(test.expected);
      }
    });
  });
});
