import { expect } from "@playwright/test";

export class DashboardPage {

    constructor(page) {
        this.pageTitle = page.getByText('Swag Labs')
        this.menuButton = page.getByRole('button', { name: 'Open Menu'})
        this.clickAddItem = page.locator(('[data-test="add-to-cart-sauce-labs-backpack"]'))
        this.shopCartIcon = page.locator('[data-test="shopping-cart-link"]')
    }

    async validateOnPage() {
        await expect(this.pageTitle).toBeVisible()
        await expect(this.menuButton).toBeVisible()
        await expect(this.clickAddItem).toBeVisible()
    }

    async clickAddToCart() {
        await this.clickAddItem.click()        
    }

    async clickShopCart() {
        await this.shopCartIcon.click()
    }

}