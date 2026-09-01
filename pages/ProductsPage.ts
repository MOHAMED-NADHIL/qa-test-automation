import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly shoppingCart: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator('[data-test="title"]');
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async verifyProductsPage() {
    await this.pageTitle.waitFor();
  }

  async addProduct(productName: string) {
    const product = this.page.locator(
      `[data-test^="add-to-cart-${productName}"]`
    );

    await product.click();
  }

  async openCart() {
    await this.shoppingCart.click();
  }

  async getCartItemCount() {
    return await this.cartBadge.textContent();
  }
}