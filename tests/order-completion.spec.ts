import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';

test.describe('Order Completion Functionality', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await productsPage.addProduct(
      'sauce-labs-backpack'
    );

    await productsPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterCustomerInformation(
      'Mohamed',
      'Nadhil',
      '40000'
    );

    await checkoutPage.clickContinue();
  });


  test('TC_ORDER_001 - Verify checkout overview', async ({ page }) => {

    const overviewPage = new CheckoutOverviewPage(page);

    await expect(page).toHaveURL(/checkout-step-two/);

    await expect(overviewPage.pageTitle)
      .toHaveText('Checkout: Overview');

    expect(await overviewPage.getItemCount())
      .toBe(1);
  });


  test('TC_ORDER_002 - Complete order successfully', async ({ page }) => {

    const overviewPage = new CheckoutOverviewPage(page);

    await overviewPage.clickFinish();

    await expect(page).toHaveURL(/checkout-complete/);

    await expect(overviewPage.completeHeader)
      .toHaveText('Thank you for your order!');

    await expect(overviewPage.completeMessage)
      .toContainText('Your order has been dispatched');
  });


  test('TC_ORDER_003 - Cancel checkout from overview', async ({ page }) => {

    const overviewPage = new CheckoutOverviewPage(page);

    await overviewPage.clickCancel();

    await expect(page).toHaveURL(/inventory/);
  });

});