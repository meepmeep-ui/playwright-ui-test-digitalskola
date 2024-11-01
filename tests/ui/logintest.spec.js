// const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('./page-object/login-page');
// const { DashboardPage } = require('./page-object/dashboard-page');
const { test } = require('./base/base-test');


    test('TC 3 - Successful login with standard_user using page object', { tag: ['@page-object', '@smoke']}, async ({ logPage, dashbPage, cartShopPage }) => {

    await logPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
    await dashbPage.clickAddToCart()
    await dashbPage.clickShopCart()
    await dashbPage.validateOnPage()

    //  // Add items to the cart
    //  for (const item of clickAddItem) {
    //     await dashbPage.addItemToCart(item);
    //   }

    // await dashbPage.validateCartValue();
    await cartShopPage.cartValidatePage()
    await cartShopPage.cartCheckoutItem()
    
    
    })

    test('TC 4 - Successful login with visual_user using page object', { tag: ['@mobile']}, async ({ logPage, dashbPage, cartShopPage }) => {

        // await logPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
        // await dashbPage.validateOnPage()
        await logPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
        // await dashbPage.clickAddToCart()
        // await dashbPage.clickShopCart()
        await dashbPage.validateOnPage()
        await cartShopPage.cartValidatePage()
        
        })


    //     test.beforeAll(async () => {
    //         console.log("execute before all - to setup env test")
    //     });

    //     test.beforeEach(async () => {
    //         console.log("execute before each - clean up item inside cart")
    //     });
        

    test.afterEach(async ({page}, testInfo) => {

        console.log(testInfo.status)
        console.log(testInfo.expectedStatus)

        if (testInfo.status !== testInfo.expectedStatus) {
            console.log("test failed, perform screenshot")
            const timestamp = new Date().toISOString().replace(/[:.]/g, '_')
            const filepath = 'screenshot/${timestamp}-${testInfo.title.toLowerCase()}-failed.png'
            const image = await page.screenshot({fullPage: true})

            testInfo.attach('failed test', {
                body: image,
                contentType: 'image/png',
            })
        }
     });
     
        