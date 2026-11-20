import { type Locator, type Page } from '@playwright/test';

export class Inventorypage {
  readonly page: Page;
  readonly ttacart: Locator;
  readonly linkTestAll: Locator;
  readonly itemTtaBikeLightTitle: Locator;
  readonly addToCartTestAllthethings: Locator;
  readonly addToCartTtaBike: Locator;
  readonly shoppingCartContainerSvg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ttacart = page.getByText("TTACart");
    this.linkTestAll = page.getByRole("link", { name: "test.all()" }).or(page.getByTestId("item-img-link"));
    this.itemTtaBikeLightTitle = page.getByTestId("item-tta-bike-light-title-link").or(page.getByRole("link", { name: "TTA Bike Light" })).or(page.getByText("TTA Bike Light"));
    this.addToCartTestAllthethings = page.getByTestId("add-to-cart-test-allthethings-tshirt-red").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
    this.addToCartTtaBike = page.getByTestId("add-to-cart-tta-bike-light").or(page.getByRole("button", { name: "Add to cart" })).or(page.getByText("Add to cart"));
    this.shoppingCartContainerSvg = page.locator("#shopping_cart_container > svg");
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory");
  }
    
  async addProduct(){
    await this.addToCartTestAllthethings.click();
    await this.addToCartTtaBike.click();
    await this.shoppingCartContainerSvg.click();
    
}

}
