// BeforeEach()
// AfterEach()
// BeforeAll()
// AfterAll()

const { test, expect } = require("@playwright/test")
const { timeout } = require("../../playwright.config")
let page
// test.beforeEach(async ({ browser }) => {
//     page = await browser.newPage()
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await page.locator('input[name="username"]').fill('Admin')
//     await page.locator('input[name="password"]').fill('admin123')
//     await page.locator('button[type="submit"]').click()
// })

test('login functionality', async ({ page }) => {
    // await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    // await page.waitForTimeout(5000)
    // await page.waitForTimeout(10000)
    // await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    // await page.waitForTimeout(10000)
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module',{timeout:5000})).toHaveText("Dashboard")
})

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
})

test.afterAll(async () => {
    await page.locator('p[class="oxd-userdropdown-name"]').click()
    await page.locator('a[href="/web/index.php/auth/logout"]').click()
    await page.waitForTimeout(4000)
})

test('invalid credentials', async () => {
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

// test.afterEach(async()=>{
//     await page.locator('p[class="oxd-userdropdown-name"]').click()
//     await page.locator('a[href="/web/index.php/auth/logout"]').click()
//     await page.waitForTimeout(5000)
  
// })