import { expect } from "@playwright/test";

export class CartPage {

    constructor(page) {
        this.cartInventItem = page.locator('[data-test="inventory-item"]')
        this.cartContButton = page.locator('[data-test="checkout"]')
    }

    async cartValidatePage() {
        await expect(this.cartInventItem).toBeVisible()
    }


}