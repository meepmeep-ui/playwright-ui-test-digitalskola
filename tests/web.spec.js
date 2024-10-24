const { test, expect } = require('@playwright/test');

test.describe("Web UI Demo", () => {
    test("TC-1 Successful login", async ({ page }) => {

    // navigation
    await page.goto("https://www.saucedemo.com/");

    await expect(page.locator('[data-test="username"]')).toBeVisible()

    // input username
    await page.getByPlaceholder('Username').fill('standard_user')

    // input password
    await page.locator('[id="password"]').fill('secret_sauce')

    // click login button
    await page.getByText('Login').click()

    // validation at dashboard page
    await expect(page.getByText('Swag Labs')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Open Menu'})).toBeVisible()

    // add item to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    // click cart icon
    await page.locator('[data-test="shopping-cart-link"]').click();

    // validation at checkout cart page
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible()
    await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible()
    await expect(page.locator('[data-test="checkout"]')).toBeVisible()
    await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible()

    // click checkout button
    await page.locator('[data-test="checkout"]').click();

     // validation at checkout: your information page
    await expect(page.getByText('Swag Labs')).toBeVisible()
    await expect(page.locator('[data-test="title"]')).toBeVisible()
    await expect(page.locator('.checkout_info')).toBeVisible()
    await expect(page.locator('[data-test="continue"]')).toBeVisible()
    await expect(page.locator('[data-test="cancel"]')).toBeVisible()
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible()    

    // input valid data in 'your information' fields
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('dummy first name');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').fill('dummy last name');
    await page.locator('[data-test="lastName"]').press('Tab');
    await page.locator('[data-test="postalCode"]').fill('101010');


    // click continue button
    await page.locator('[data-test="continue"]').click();

    // validation at checkout: your information page
    await expect(page.getByText('Swag Labs')).toBeVisible()
    await expect(page.locator('[data-test="title"]')).toBeVisible()
    await expect(page.locator('[data-test="cart-quantity-label"]')).toBeVisible()
    await expect(page.locator('[data-test="cart-desc-label"]')).toBeVisible()
    await expect(page.locator('[data-test="cart-list"]')).toBeVisible()
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible()   
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible()   
    await expect(page.locator('[data-test="payment-info-label"]')).toBeVisible()
    await expect(page.locator('[data-test="shipping-info-label"]')).toBeVisible()
    await expect(page.locator('[data-test="total-info-label"]')).toBeVisible()   
    await expect(page.locator('[data-test="payment-info-label"]')).toBeVisible()
    await expect(page.locator('[data-test="cancel"]')).toBeVisible()
    await expect(page.locator('[data-test="finish"]')).toBeVisible()   

    // click finish button
    await page.locator('[data-test="finish"]').click();

    // validation at checkout: complete page
    await expect(page.getByText('Swag Labs')).toBeVisible()
    await expect(page.locator('[data-test="title"]')).toBeVisible()
    await expect(page.locator('[data-test="checkout-complete-container"]')).toBeVisible()
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible()


    // click back home button
    await page.locator('[data-test="back-to-products"]').click();

    })
})
