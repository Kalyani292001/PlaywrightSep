const { test, expect } = require("@playwright/test")

test("check the functionality of radio button", async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
})

test('handling the check boxex', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-0')).not.toBeChecked()
    await page.locator('#vfb-6-1').check()
    await expect(page.locator('#vfb-6-1')).toBeChecked()

})

test.only('Handling the radio Buttons with click method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    //await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    await page.locator('#vfb-7-1').click()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
    await page.locator('#vfb-7-1').uncheck()
})