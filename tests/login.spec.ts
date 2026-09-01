import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {

  test('TC_LOGIN_001 - Login with valid credentials', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);

    await expect(
      page.locator('[data-test="title"]')
    ).toHaveText('Products');
  });


  test('TC_LOGIN_002 - Login with invalid password', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('WrongPassword123');

    await page.locator('[data-test="login-button"]').click();

    await expect(
      page.locator('[data-test="error"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('Username and password do not match');
  });


  test('TC_LOGIN_003 - Login with empty credentials', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="login-button"]').click();

    await expect(
      page.locator('[data-test="error"]')
    ).toBeVisible();

    await expect(
      page.locator('[data-test="error"]')
    ).toContainText('Username is required');
  });

});