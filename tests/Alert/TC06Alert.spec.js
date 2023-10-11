const { test, expect } = require('@playwright/test')


test('verify the Basic alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async basicAlert => {
        await expect(basicAlert.message()).toContain("I am a JS Alert")
        await expect(basicAlert.type()).toContain('alert')
        await basicAlert.accept()
        // console.log(basicAlert.message())
        // console.log(basicAlert.type())
    })

    await page.locator('[onclick="jsAlert()"]').click()
    await expect(page.locator('[id="result"]')).toHaveText('You successfully clicked an alert')
    await page.pause()
})

test('Handle confirm alert with playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirmAlert =>{
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await expect(confirmAlert.type()).toContain('confirm')
        //await confirmAlert.accept()
        await confirmAlert.dismiss()
        // await console.log(confirmAlert.message())
        // await console.log(confirmAlert.type())
    })
    await page.getByText('Click for JS Confirm').click()
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    //await page.locator('button[onclick="jsConfirm()"]').click()
    //await page.waitForTimeout(5000)  
})

test.only('Handle Prompt alert with playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async PromptAlert =>{
        await expect(PromptAlert.message()).toContain('I am a JS prompt')
        await expect(PromptAlert.type()).toContain('prompt')
        await PromptAlert.accept('Mahesh')
        //await PromptAlert.dismiss()
        // await console.log(PromptAlert.message())
        // await console.log(PromptAlert.type())
    })
    await page.getByText('Click for JS Prompt').click()
    await expect(page.locator('#result')).toHaveText('You entered: Mahesh')
    //await expect(page.locator('#result')).toHaveText('You entered: null')
    await page.waitForTimeout(5000)
})

