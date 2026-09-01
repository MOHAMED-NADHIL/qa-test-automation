import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly cartItems: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;
  readonly completeHeader: Locator;
  readonly completeMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cancelButton = page.locator('[data-test="cancel"]');

    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.completeMessage = page.locator('[data-test="complete-text"]');
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async getItemCount() {
    return await this.cartItems.count();
  }
}