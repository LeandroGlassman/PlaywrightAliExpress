import { test as base } from "@playwright/test";
import { HomePage } from "../Pages/Home-Page";
import { ProductsPage } from "../Pages/products-page";

type MyFixtures = {
  homePage: HomePage;
  productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },
});

export { expect } from "@playwright/test";
