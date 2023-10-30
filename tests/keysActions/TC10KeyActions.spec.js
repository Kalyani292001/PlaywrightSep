const { test, expect } = require("@playwright/test")

test("handling the key actions",async({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    await page.keyboard.down('PageDown')
    await page.locator('[name="text1"]').fill('I am learning Key Actions in Playwright')
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.locator('[name="text2"]').click()
    ///await page.keyboard.down('Tab')
    await page.keyboard.press("Control+V")
    //await page.waitForTimeout(30000)
})