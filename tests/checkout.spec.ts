import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Functionality', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addProduct('sauce-labs-backpack');
    await productsPage.openCart();

    await cartPage.clickCheckout();
  });


  test('TC_CHECKOUT_001 - Verify checkout page', async ({ page }) => {

    await expect(page).toHaveURL(/checkout-step-one/);

    await expect(
      page.locator('[data-test="firstName"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="lastName"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="postalCode"]')
    ).toBeVisible();
  });


  test('TC_CHECKOUT_002 - Continue checkout with valid information', async ({
    page
  }) => {

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.enterCustomerInformation(
      'Mohamed',
      'Nadhil',
      '40000'
    );

    await checkoutPage.clickContinue();

    await expect(page).toHaveURL(/checkout-step-two/);
  });


  test('TC_CHECKOUT_003 - Checkout validation without customer information', async ({
    page
  }) => {

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.clickContinue();

    await expect(checkoutPage.errorMessage).toBeVisible();

    await expect(checkoutPage.errorMessage)
      .toContainText('First Name is required');
  });

});