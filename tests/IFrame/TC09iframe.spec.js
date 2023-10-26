const { test,expect } = require("@playwright/test")


test('Handling Iframe',async({page})=>{
await page.goto('https://letcode.in/frame')
const NameField=page.frameLocator('#firstFr').locator('[name="fname"]')
await NameField.fill('Kalyani')
await expect(NameField).toBeVisible()
await page.waitForTimeout(50000)

})

test('Handling Iframe 2nd way using name attribute',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const NameField=page.frame('firstFr')
    await NameField.locator('[name="fname"]').fill("Kalyani Hadole")
    await expect(NameField.locator('[name="fname"]')).toBeVisible()
    await page.waitForTimeout(50000)
    
    })

    test.only('Handling Iframe 3rd way using url attribute',async({page})=>{
        await page.goto('https://letcode.in/frame')
        await page.waitForTimeout(30000)
        const NameField=page.frame({url:"https://letcode.in/frameUI"})
        await NameField.locator('[name="fname"]').fill("Kalyani")
        await expect(NameField.locator('[name="fname"]')).toBeVisible()
        await page.waitForTimeout(30000)
        
        })
