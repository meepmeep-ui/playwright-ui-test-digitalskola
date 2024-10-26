// const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('./page-object/login-page');
// const { DashboardPage } = require('./page-object/dashboard-page');
const { test } = require('./base/base-test');


    test('TC-3 Successful login with standard_user using page object', async ({ logPage, dashbPage, cartShopPage }) => {

    await logPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
    await dashbPage.validateOnPage()
    await dashbPage.clickAddToCart()
    await dashbPage.clickShopCart()
    await cartShopPage.cartValidatePage()
    
    })

    test('TC-4 Successful login with visual_user using page object', async ({ logPage, dashbPage }) => {

        await logPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
        await dashbPage.validateOnPage()
        
        })


    //     test.beforeAll(async () => {
    //         console.log("execute before all - to setup env test")
    //     });

    //     test.beforeEach(async () => {
    //         console.log("execute before each - clean up item inside cart")
    //     });
        

    //  test.afterEach(async ({page}, testInfo) => {
    //     console.log(testInfo.status)
    //     console.log(testInfo.expectedStatus)

    //     if (testInfo.status !== testInfo.expectedStatus) {
    //         console.log("test failed, perform screenshot")
    //         await page.screenshot({path: 'failed-screenshot.png', fullPage: true})
    //     }
    //  });
     
        