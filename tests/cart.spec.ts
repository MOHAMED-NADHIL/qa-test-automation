import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Shopping Cart Functionality', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });


  test('TC_CART_001 - Verify added product in cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addProduct('sauce-labs-backpack');
    await productsPage.openCart();

    await expect(cartPage.cartTitle).toHaveText('Your Cart');

    expect(await cartPage.getCartItemCount()).toBe(1);
  });


  test('TC_CART_002 - Remove product from cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addProduct('sauce-labs-backpack');
    await productsPage.openCart();

    await cartPage.removeProduct('sauce-labs-backpack');

    expect(await cartPage.getCartItemCount()).toBe(0);
  });


  test('TC_CART_003 - Continue shopping from cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addProduct('sauce-labs-backpack');
    await productsPage.openCart();

    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory/);
    await expect(productsPage.pageTitle).toHaveText('Products');
  });

});