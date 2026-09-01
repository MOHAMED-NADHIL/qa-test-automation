import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products Functionality', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });


  test('TC_PRODUCT_001 - Verify Products page', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await expect(productsPage.pageTitle).toHaveText('Products');
  });


  test('TC_PRODUCT_002 - Add product to cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.addProduct('sauce-labs-backpack');

    await expect(productsPage.cartBadge).toHaveText('1');
  });


  test('TC_PRODUCT_003 - Open shopping cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await productsPage.addProduct('sauce-labs-backpack');
    await productsPage.openCart();

    await expect(page).toHaveURL(/cart/);
  });

});