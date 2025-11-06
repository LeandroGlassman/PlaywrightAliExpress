import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchBar: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator("#search-words");
    this.searchButton = page.locator('input[class*="search--submit"]');
  }

  async goto() {
    await this.page.goto("https://www.aliexpress.com");
  }

  async fillSearchBar(searchTerm: string) {
    await this.searchBar.fill(searchTerm);
  }

  async clickSearch() {
    await this.searchButton.click();
  }
}
