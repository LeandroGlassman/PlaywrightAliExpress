import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly productsCards: Locator;
  readonly secondPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsCards = page.locator("#card-list > div");
    this.secondPage = page.locator(".comet-pagination-item-2");
  }

  async navigateToSecondPage() {
    await this.secondPage.scrollIntoViewIfNeeded();
    await this.secondPage.click();
  }

  async getProductsCount() {
    return await this.productsCards.count();
  }

  getProductCard(index: number) {
    return this.productsCards.nth(index);
  }
}
