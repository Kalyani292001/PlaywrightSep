const {test,expect}=require('@playwright/test')

//static dropdown--suggestions are given
test('verify the static dropdown',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('4')
    await (expect(page.locator('p[class="subtitle"]'))).toBeVisible()
})

test('static dropdown',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#superheros').selectOption('bt')
    await (expect(page.locator('p[class="subtitle"]'))).toBeVisible()

})

test('static dropdown for lang',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#lang').selectOption('java')
    await (expect(page.locator('p[class="subtitle"]'))).toBeVisible()

})

test('static dropdown for country',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#country').selectOption('Uruguay')

})



// dynamic dropdown--auto suggesstions

// test.only('verify the dynamic dropdown',async({page})=>{
//     await page.goto('https://www.redbus.in/')
//     await page.locator('#src').fill('pune',{delay:1000})
//     await page.waitForSelector('.placeHolderMainText')
//     const optionCount=await page.locator('.placeHolderMainText').count()
//     console.log(optionCount)
//     for (let i=0 ;i <optionCount;i++){
//         let txt=await page.locator('.placeHolderMainText').nth(i).textContent()
//         if(txt==='Katraj'){
//             await page.locator('.placeHolderMainText').click()
//             break
//         }
//     }
//     await page.pause()

// })

test.only('Verify the Dynyamic Dropdoen',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune',{delay:1000})
    await page.waitForSelector('.placeHolderMainText')
    const optionCount = await page.locator('.placeHolderMainText').count()
    console.log(optionCount)
    for(let i = 0 ;i < optionCount;i++){
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if(text === 'Nashik Phata'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.pause()
})