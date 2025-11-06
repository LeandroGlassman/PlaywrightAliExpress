import { test, expect } from "../fixtures";

test.describe("AliExpress Product Search", () => {
  test("search for products and verify second item on page 2", async ({
    homePage,
    productsPage,
  }) => {
    // Navigate to AliExpress
    await homePage.goto();

    // Search for a specific product
    await homePage.fillSearchBar("instax mini");
    await homePage.clickSearch();

    // Verify products are listed on page 1
    const productsCountPage1 = await productsPage.getProductsCount();
    expect(productsCountPage1).toBeGreaterThan(0);

    // Navigate to the second page
    await productsPage.navigateToSecondPage();

    // Verify products are listed on page 2
    const productsCountPage2 = await productsPage.getProductsCount();
    expect(productsCountPage2).toBeGreaterThan(0);

    // Get the second item and verify it's visible
    const secondItem = productsPage.getProductCard(1); // is an array, the second item is 1
    await expect(secondItem).toBeVisible();

    // Take a screenshot of the second item and attach to report
    await test.info().attach("Second Item Card on Page 2", {
      body: await secondItem.screenshot(),
      contentType: "image/png",
    });
  });
});
