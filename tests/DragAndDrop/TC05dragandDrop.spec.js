const { test, expect } = require('@playwright/test')

test('verify the drag and drop scenario', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').dragTo(await page.locator('#box101'))
    await expect(page.locator('#box1')).toHaveAttribute('dragableelement', "0")

})

test('verify the drag and drop scenario for second', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box2').dragTo(await page.locator('#box102'))
    await expect(page.locator('#box1')).toHaveAttribute("class", "dragableBox")

})

test('verify the drag and drop scenario using mouse actions', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box2').hover()
    await page.mouse.down()
    await page.locator('#box102').hover()
    await page.mouse.up()
    await expect(page.locator('#box1')).toHaveAttribute("class", "dragableBox")

})


test('verify the drag and drop scenario three', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box3').dragTo(await page.locator('#box103'))
    await expect(page.locator('#box1')).toHaveAttribute("class", "dragableBox")
    await page.waitForTimeout(4000)

})
test('verify the drag and drop scenario four', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box4').dragTo(await page.locator('#box104'))
    await expect(page.locator('#box1')).toHaveAttribute("class", "dragableBox")
    await page.waitForTimeout(4000)

})
test('verify the drag and drop scenario four', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box5').dragTo(await page.locator('#box105'))
    await expect(page.locator('#box1')).toHaveAttribute("class", "dragableBox")
    await page.waitForTimeout(4000)

})
test('verify the drag and drop scenario three', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box6').dragTo(await page.locator('#box106'))
    await expect(page.locator('#box1')).toHaveAttribute("class", "dragableBox")
    await page.waitForTimeout(4000)

})

test.only('verify the drag and drop scenario seven', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box7').dragTo(await page.locator('#box107'))
    await expect(page.locator('#box1')).toHaveAttribute("class", "dragableBox")
    await page.waitForTimeout(4000)

})