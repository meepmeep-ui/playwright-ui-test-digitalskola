import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  // await page.locator('[data-test="shopping-cart-link"]').click();
  // await page.locator('[data-test="checkout"]').click();
  // await page.locator('[data-test="firstName"]').click();
  // await page.locator('[data-test="firstName"]').fill('dummy first name');
  // await page.locator('[data-test="firstName"]').press('Tab');
  // await page.locator('[data-test="lastName"]').fill('dummy last name');
  // await page.locator('[data-test="lastName"]').press('Tab');
  // await page.locator('[data-test="postalCode"]').fill('101010');
  // await page.locator('[data-test="continue"]').click();
  // await page.locator('[data-test="finish"]').click();
  // await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-0-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="item-0-title-link"]').click();
  await page.locator('[data-test="continue-shopping"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await page.getByText('Swag Labs').click();
});