import { expect } from "@playwright/test";

export class CartPage {

    constructor(page) {
        this.page = page
        this.cartPageTitle = page.getByText('Swag Labs')
        this.cartMenuButton = page.getByRole('button', { name: 'Open Menu'})
        this.cartInventItem = page.locator('[data-test="item-0-title-link"]')
        this.cartContinueButton = page.locator('[data-test="checkout"]')


        // this.cartContButton = page.locator('[data-test="checkout"]')
    }

    async cartValidatePage() {
        await expect(this.cartPageTitle).toBeVisible()
        await expect(this.cartMenuButton).toBeVisible()
        await expect(this.cartInventItem).toBeVisible()
        
    }


    async cartCheckoutItem() {
        await this.cartContinueButton.click()     
        await expect(this.page).toHaveScreenshot('checkout-page.png')   
    }
      
    // async addProductToCart(productName) {
    //     await this.productLocator
    //               .filter({ hasText: productName })
    //               .locator(await this.addToCartButton)
    //              .click();
    //   }

}