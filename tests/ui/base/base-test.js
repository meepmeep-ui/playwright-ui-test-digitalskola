const { test:base } = require("@playwright/test");
import { CartPage } from "../page-object/cart-page";
import { DashboardPage } from "../page-object/dashboard-page";
import { LoginPage } from "../page-object/login-page";

export const test = base.extend({
    logPage: async ({page}, use) => {
        const logPage = new LoginPage(page)
        await logPage.navigate()
        await use(logPage)
    },
    dashbPage: async ({page}, use) => {
        await use(new DashboardPage(page))
    },
    cartShopPage: async ({page}, use) => {
        await use(new CartPage(page))
    }
})