import {test,expect} from '@playwright/test'

test.describe('tests for css', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.staging.airtable.com/')
    })

    test('unique_elements', async({page})=>{
        await page.locator('.ActionButton-module_mediumAndUpText__3D7uw').click();
        await page.goBack();
        await page.waitForTimeout(3000);
        await page.getByTestId('next-slide-button').click();

    })

    test('test2', async({page})=>{

    })
})