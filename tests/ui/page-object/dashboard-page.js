import { expect } from "@playwright/test";
import exp from "constants";

export class DashboardPage {

    constructor(page) {
        this.page = page
        this.pageTitle = page.getByText('Swag Labs')
        this.menuButton = page.getByRole('button', { name: 'Open Menu'})
        this.clickAddItem = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.shopCartIcon = page.locator('[data-test="shopping-cart-link"]')
        this.cartCount = page.locator('[data-test="shopping-cart-badge"]')
        // this.itemsToAdd = ['#add-to-cart-sauce-labs-backpack', '#add-to-cart-sauce-labs-bike-light'];
        //  this.shopCartValue = page.locator('[data-test="shopping-cart-badge"]')
    }

    async validateOnPage() {
        await expect(this.pageTitle).toBeVisible()
        await expect(this.menuButton).toBeVisible()
        // await expect(this.page).toHaveScreenshot('cart-page.png', { maxDiffPixels: 500000 })
        await expect(this.page).toHaveScreenshot('cart-page.png')
        // await expect(this.clickAddItem).toBeVisible()
        // await expect(this.cartCount).toBeVisible()
    }

    async clickAddToCart() {
        await this.clickAddItem.click()        
    }

    async clickShopCart() {
        await this.shopCartIcon.click()        
    }


    // async validateCartValue() {
    //     await this.shopCartValue.toBeVisible()
        // await page.locator('[data-test="shopping-cart-badge"]').toBeVisible();
        // console.log(`Number of items in cart: ${cartCount}`);

       

        // Verify the cart count matches the items added
    //     expect(Number(cartCount)).toBe(clickAddItem.length);
    // }
    // async clickShopCart() {
    //     await this.shopCartIcon.click()
    // }

}