const{test, expect}=require('@playwright/test')


test('verify the Basic alert',async({page})=>{


    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async basicAlert=>{
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

test('')