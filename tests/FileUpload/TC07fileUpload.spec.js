
const { test, expect } = require('@playwright/test');

test('single file upload', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('tests/UploadFile/kalyani_hadole_resume.pdf')
    page.on('dialog', async fileupload => {
        await expect(fileupload.message()).toContain('Your file has now been uploaded!')
        await expect(fileupload.type()).toContain('alert')
        await fileupload.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url()).toContain('filename=kalyani_hadole_resume.pdf')
    await page.waitForTimeout(5000)

})

test.only('Double file upload', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['tests/UploadFile/kalyani_hadole_resume.pdf', 'tests/UploadFile/Oracle Class Assignment 3 - Que.pdf'])
    await expect(page.locator('#fileList > li').first()).toHaveText('kalyani_hadole_resume.pdf')
    await expect(page.locator('#fileList > li').nth(1)).toHaveText('Oracle Class Assignment 3 - Que.pdf')
    await page.waitForTimeout(5000)
})